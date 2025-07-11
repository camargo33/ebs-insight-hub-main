
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useExcelProcessor } from '@/hooks/useExcelProcessor';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import FileUpload from '@/components/FileUpload';
import AnalysisHistory from '@/components/AnalysisHistory';

const Dashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [monthReference, setMonthReference] = useState('');
  const { processExcelFile, saveAnalysisToDatabase, processing, progress } = useExcelProcessor();

  // Redirect to auth if not logged in
  React.useEffect(() => {
    if (!authLoading && !user) {
      console.log('Usuário não autenticado, redirecionando para /auth');
      navigate('/auth');
    } else if (user) {
      console.log('Usuário autenticado:', user.email);
    }
  }, [user, authLoading, navigate]);

  // Fetch analyses with better error handling
  const { data: analyses = [], isLoading: analysesLoading, refetch } = useQuery({
    queryKey: ['analyses'],
    queryFn: async () => {
      console.log('Buscando análises...');
      
      if (!user) {
        console.log('Usuário não autenticado');
        return [];
      }

      const { data, error } = await supabase
        .from('analises_mensais')
        .select('*')
        .order('data_upload', { ascending: false });

      if (error) {
        console.error('Erro ao buscar análises:', {
          error,
          code: error.code,
          message: error.message,
          details: error.details
        });
        
        // Não mostrar toast de erro se for apenas problema de dados vazios
        if (error.code !== 'PGRST116') {
          toast({
            variant: "destructive",
            title: "Erro ao carregar dados",
            description: "Não foi possível carregar o histórico de análises.",
          });
        }
        
        return [];
      }

      console.log('Análises carregadas:', data?.length || 0);
      return data || [];
    },
    enabled: !!user,
    retry: 2,
    retryDelay: 1000,
  });

  const handleFileSelect = (file: File) => {
    console.log('Arquivo selecionado:', file.name);
    setSelectedFile(file);
    
    // Extrair mês de referência do nome do arquivo
    const fileName = file.name.toLowerCase();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const monthRef = `${currentYear}-${currentMonth.toString().padStart(2, '0')}`;
    setMonthReference(monthRef);
  };

  const handleProcess = async () => {
    if (!selectedFile) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Selecione um arquivo primeiro.",
      });
      return;
    }

    if (!monthReference) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Mês de referência não definido.",
      });
      return;
    }

    if (!user) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Usuário não autenticado. Faça login novamente.",
      });
      navigate('/auth');
      return;
    }

    try {
      console.log('Iniciando processamento automático com filtros: Mapa = 5 E Ano = 2025...');
      
      // Processar arquivo Excel
      const processedData = await processExcelFile(selectedFile);
      
      if (!processedData) {
        console.error('Falha no processamento do arquivo');
        return;
      }

      console.log('Dados processados (Mapa = 5 E Ano = 2025), salvando no banco...');

      // Salvar no banco de dados
      const analysisId = await saveAnalysisToDatabase(selectedFile, monthReference, processedData);
      
      if (analysisId) {
        toast({
          title: "Sucesso!",
          description: "Planilha processada (Mapa = 5 + Ano = 2025) e salva com sucesso.",
        });
        
        // Limpar formulário
        setSelectedFile(null);
        setMonthReference('');
        
        // Recarregar lista de análises
        refetch();
        
        // NAVEGAÇÃO AUTOMÁTICA PARA O DASHBOARD
        console.log('🚀 Navegando automaticamente para o dashboard:', analysisId);
        setTimeout(() => {
          navigate(`/dashboard/${analysisId}`);
        }, 1500); // Delay um pouco maior para garantir que o toast seja visto
      }
    } catch (error: any) {
      console.error('Erro no processamento completo:', error);
      
      // Mensagem de erro já tratada no hook
      // Não duplicar toast aqui
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    setMonthReference('');
  };

  const handleViewDashboard = (analysisId: string) => {
    console.log('Navegando para dashboard:', analysisId);
    navigate(`/dashboard/${analysisId}`);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Sistema de Análise de Vendas
            </h2>
            <p className="text-gray-600">
              Faça o upload da sua planilha mensal para gerar análises
            </p>
            <div className="mt-2 text-sm text-blue-600 bg-blue-50 border border-blue-200 rounded-lg p-3">
              🎯 <strong>Filtros aplicados:</strong> Mapa do Orçamento = 5 + Ano = 2025
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="w-full">
              <FileUpload
                onFileSelect={handleFileSelect}
                onProcess={handleProcess}
                selectedFile={selectedFile}
                processing={processing}
                progress={progress}
                onClear={() => {
                  setSelectedFile(null);
                  setMonthReference('');
                }}
              />
            </div>
            
            <div className="w-full">
              <AnalysisHistory
                analyses={analyses}
                onViewDashboard={(analysisId: string) => {
                  console.log('Navegando para dashboard:', analysisId);
                  navigate(`/dashboard/${analysisId}`);
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;