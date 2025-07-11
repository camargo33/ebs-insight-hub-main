export interface CSVData {
  name: string;
  originalSheetName: string;
  data: string;
  rows: number;
  columns: number;
  blob: Blob;
  tipo?: 'fabrica' | 'outros';
  categoria?: 'fechados' | 'todos';
}

export interface SplitResult {
  csvFiles: CSVData[];
  success: boolean;
  error?: string;
  estatisticas?: {
    fechados_fabrica: number;
    fechados_outros: number;
    todos_fabrica: number;
    todos_outros: number;
    taxa_fechamento_fabrica: number;
    taxa_fechamento_outros: number;
    taxa_fechamento_geral: number;
  };
}