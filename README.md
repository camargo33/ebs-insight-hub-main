# EBS Insight Hub

Dashboard avançado de análise de dados EBS - Análise de vendas, orçamentos e relatórios inteligentes com IA

## 📊 Funcionalidades

- **Dashboard Unificado**: Visão completa de vendas, orçamentos e análises
- **Análise de Vendas**: Acompanhamento detalhado de vendas por período, responsável e segmento
- **Gestão de Orçamentos**: Análise de orçamentos com status e comparativos
- **Relatórios Inteligentes**: Geração automática de PDFs e CSVs
- **Análise Preditiva**: Insights baseados em IA para tomada de decisão
- **Integração com Excel**: Upload e processamento de planilhas
- **Sistema de Autenticação**: Controle de acesso seguro

## 🚀 Tecnologias

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui + Tailwind CSS
- **Charts**: Recharts
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **PDF Generation**: jsPDF + html2canvas
- **Excel Processing**: SheetJS (xlsx)

## 🛠️ Instalação

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Configuração

1. Clone o repositório:
```bash
git clone https://github.com/camargo33/ebs-insight-hub-main.git
cd ebs-insight-hub-main
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto e adicione suas configurações do Supabase:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

5. Acesse `http://localhost:8080` no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── dashboard/      # Componentes do dashboard
│   ├── orcamentos/     # Componentes de orçamentos
│   └── ui/            # Componentes de UI (shadcn/ui)
├── hooks/              # Custom hooks
├── pages/              # Páginas da aplicação
├── types/              # Definições de tipos TypeScript
├── utils/              # Utilitários e processadores
├── constants/          # Constantes da aplicação
└── integrations/       # Integrações (Supabase)
```

## 🏗️ Build e Deploy

### Build para produção:
```bash
npm run build
```

### Preview da build:
```bash
npm run preview
```

### Lint do código:
```bash
npm run lint
```

## 📊 Funcionalidades Detalhadas

### Dashboard de Vendas
- KPIs principais (faturamento, quantidade de vendas, etc.)
- Gráficos de evolução temporal
- Ranking de clientes e responsáveis
- Filtros avançados por período e segmento

### Análise de Orçamentos
- Status de orçamentos (enviados, aprovados, rejeitados)
- Análise comparativa
- Insights de IA sobre padrões de vendas

### Processamento de Dados
- Upload de arquivos Excel/CSV
- Mapeamento automático de colunas
- Validação de dados
- Histórico de análises

### Relatórios
- Exportação para PDF
- Download de dados em CSV
- Relatórios personalizáveis

## 🔐 Autenticação

O sistema utiliza Supabase para autenticação, suportando:
- Login/registro com email e senha
- Recuperação de senha
- Sessões seguras

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para suporte, entre em contato através do [GitHub Issues](https://github.com/camargo33/ebs-insight-hub-main/issues).
