export interface Product {
  slug: string;
  name: string;
  description: string;
  price: string;
  status: "available" | "sold-out";
}

