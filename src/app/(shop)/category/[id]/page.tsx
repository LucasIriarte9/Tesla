import { ProductGrid } from "@/components";
import Title from "@/components/ui/title/Title";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

interface Props {
  params: {
    id: Category;
  };
}
const seedProducts = initialData.products;

export default function categoryId({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);
  const labels: Record<Category, string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "Unisex",
  };
  return (
    <>
      <Title
        title={`Articulos de ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
