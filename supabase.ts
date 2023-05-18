export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      quick_scan: {
        Row: {
          concept: string | null
          content: string | null
          created_at: string | null
          id: number
          industry: string | null
          is_sub_concept: boolean | null
          level: number | null
          parent_concept: string | null
          topic: string | null
        }
        Insert: {
          concept?: string | null
          content?: string | null
          created_at?: string | null
          id?: number
          industry?: string | null
          is_sub_concept?: boolean | null
          level?: number | null
          parent_concept?: string | null
          topic?: string | null
        }
        Update: {
          concept?: string | null
          content?: string | null
          created_at?: string | null
          id?: number
          industry?: string | null
          is_sub_concept?: boolean | null
          level?: number | null
          parent_concept?: string | null
          topic?: string | null
        }
      }
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
