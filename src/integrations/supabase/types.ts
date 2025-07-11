export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      analises_mensais: {
        Row: {
          created_at: string
          data_upload: string
          id: string
          mes_referencia: string
          nome_arquivo: string
          segmento: string | null
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data_upload?: string
          id?: string
          mes_referencia: string
          nome_arquivo: string
          segmento?: string | null
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          data_upload?: string
          id?: string
          mes_referencia?: string
          nome_arquivo?: string
          segmento?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      // Outras tabelas definidas no schema original...
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Tipos auxiliares exportados
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type TablesInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']
