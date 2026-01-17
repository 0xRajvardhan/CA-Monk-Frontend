export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  coverImage: string;
  category: string[];
  tags?: string[];
}
