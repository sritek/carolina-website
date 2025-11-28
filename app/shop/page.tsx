import NeonButton from "@/components/NeonButton";
import { products } from "@/lib/data";

export default function ShopPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Shop</h1>
      <p>List packaged goods, merchandise, or gift experiences for Carolina guests.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <article className="space-y-2 rounded-md border p-4" key={product.slug}>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Price:</strong> {product.price}
            </p>
            <NeonButton href={`/shop/${product.slug}`}>View product</NeonButton>
          </article>
        ))}
      </div>
    </div>
  );
}

