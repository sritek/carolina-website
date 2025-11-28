import { getProductBySlug, products } from "@/lib/data";
import { notFound } from "next/navigation";

type ProductPageParams = {
  "product-slug": string;
};

export function generateStaticParams(): ProductPageParams[] {
  return products.map((product) => ({
    "product-slug": product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: ProductPageParams }) {
  const product = getProductBySlug(params["product-slug"]);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{product.name}</h1>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> {product.price}
      </p>
      <p>
        <strong>Status:</strong> {product.status}
      </p>
      <p>
        Expand this template with product galleries, fulfillment details, and add-to-cart
        actions once commerce tooling is attached.
      </p>
    </div>
  );
}

