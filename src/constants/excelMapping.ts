// Mapeamento das abas solicitadas para os nomes reais na planilha
export const SHEET_MAPPING = {
  'resumo_clientes_vendas': '1-Resumo_Clientes_Vendas',
  'resumo_tipo_vendas': '1.1-Resumo_Tipo_Vendas'
};

// Posições fixas das colunas na aba Resumo_Tipo_Vendas
export const RESUMO_TIPO_VENDAS_COLUMNS = {
  TOTAL_ORCAMENTO: 17,  // Coluna R
  TOTAL_VENDA: 18,      // Coluna S
  TIPO_PRODUTO: 2       // Coluna C
};

// Colunas específicas para a aba ORÇAMENTOS
export const ORCAMENTOS_COLUMNS = [
  'Dados Prospect/Cliente',
  'Cidade/UF e/ou País',
  'Mercado',
  'Nro. Orçamento',
  'Data Solicitação',
  'Mês_B',
  'Ano_B',
  'Produto(s)',
  'Serviço(s)',
  'Data Envio',
  'Atendido o ReContato?',
  'Tipo Orçamento',
  'Taxa Limite',
  'Atendido Prazo (ISO)',
  'Responsável',
  'Data Efetivação',
  'Mês*',
  'Ano*',
  'Valor do Orçamento',
  'Valor da Venda',
  '% Desc.',
  'Nro Confirmação',
  'Nro Nota Fiscal',
  'Forma de Pgto',
  'Mapa do Orçamento'  // Adicionada para filtro
];