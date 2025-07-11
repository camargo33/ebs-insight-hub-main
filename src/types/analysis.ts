
export interface ProcessingResult {
  kpis: {
    total_orcamentos: number;
    total_vendas: number;
    taxa_conversao: number;
    clientes_ativos: number;
  };
  vendas_por_tipo: Array<{
    tipo_produto: string;
    total_orcamentos: number;
    total_vendas: number;
  }>;
  ranking_clientes: Array<{
    nome_cliente: string;
    categoria_produto: string;
    venda_janeiro: number;
    venda_fevereiro: number;
    venda_marco: number;
    total_vendas: number;
    participacao_categoria: number;
  }>;
  orcamentos_detalhados: Array<{
    codigo_orcamento: string;
    cliente: string;
    cidade: string;
    mercado: string;
    mes_solicitacao: number;
    ano_solicitacao: number;
    nro_orcamento: string;
    data_solicitacao: Date | null;
    data_envio: Date | null;
    data_efetivacao: Date | null;
    produto: string;
    tipo_orcamento: string;
    valor_orcamento: number;
    valor_venda: number;
    desconto: number;
    status_nf: string;
    status_iso: string;
    responsavel: string;
    dias_para_efetivacao: number;
  }>;
}

export interface PeriodFilter {
  ano?: number;
  mes?: number;
  periodo_customizado?: {
    inicio: Date;
    fim: Date;
  };
}

export interface AdvancedFilters {
  periodo: PeriodFilter;
  tipo_orcamento?: string[];
  responsavel?: string[];
  status_nf?: string[];
  status_iso?: string[];
  mercado?: string[];
  faixa_valor?: {
    min: number;
    max: number;
  };
  status_conversao?: 'convertidos' | 'pendentes' | 'perdidos' | 'todos';
}

export interface OrcamentoDetalhado {
  id: string;
  analise_id: string;
  codigo_orcamento: string;
  cliente: string;
  cidade: string;
  mercado: string;
  mes_solicitacao: number;
  ano_solicitacao: number;
  nro_orcamento: string;
  data_solicitacao: string;
  data_envio: string;
  data_efetivacao: string;
  produto: string;
  tipo_orcamento: string;
  valor_orcamento: number;
  valor_venda: number;
  desconto: number;
  status_nf: string;
  status_iso: string;
  responsavel: string;
  dias_para_efetivacao: number;
  created_at: string;
}