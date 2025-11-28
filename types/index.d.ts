export interface JournalPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

