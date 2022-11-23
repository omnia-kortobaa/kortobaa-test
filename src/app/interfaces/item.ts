export interface Item {
  add_date: number;
  api_url: string;
  attachments: [
    {
      order: number;
      size: string;
      url: string;
      extension_type: string;
      description: string;
    }
  ];
  description: string;
  full_description?: string;
  id: number;
  image?: string;
  importance_level: string;
  locales: [];
  num_attachments: number;
  prepared_by: [
    {
      api_url: string;
      description?: string;
      id: number;
      kind: string;
      source_id: number;
      title: string;
      type: string;
    }
  ];
  source_id: number;
  title: string;
  source_language: string;
  translated_language: string;
  type: string;
}
