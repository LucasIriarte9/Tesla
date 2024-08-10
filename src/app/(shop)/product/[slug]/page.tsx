import { ProductMobileSlides, ProductSlides } from "@/components";
import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import SizeSelector from "@/components/product/size-selector/SizeSelector";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import { availableMemory } from "process";

interface Props {
  params: {
    slug: string;
  };
}
export default function Product({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 ">
      <div className="col-span-1 md:col-span-2 ">
        <ProductMobileSlides
          className="block md:hidden"
          title={product?.title}
          images={product?.images}
        />
        <ProductSlides
          className="md:block hidden"
          title={product?.title}
          images={product?.images}
        />
      </div>

      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product?.title}
        </h1>
        <p className="text-lg mb-5">{product?.price}</p>
        <SizeSelector
          selectedSize={product?.sizes[1]}
          avalibleSizes={product?.sizes}
        />
        <QuantitySelector quantity={1} />
        <button className="btn-primary my-5 ">Agregar al carrito</button>
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">{product?.description}</p>
      </div>
    </div>
  );
}
