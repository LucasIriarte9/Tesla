import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
export default function Cart() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px0">
      <div className="flex flex-col w-[1000px] ">
        <Title title="Verificar Orden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar Elementos</span>
            <Link href="/cart" className="underline mb-5">
              Editar Carrito
            </Link>

            <div>
              {productsInCart.map((product) => (
                <div key={product.slug} className="flex mb-5">
                  <Image
                    src={`/products/${product.images[0]}`}
                    alt={product.title}
                    width={100}
                    height={100}
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    className="mr-5 rounded"
                  />
                  <div>
                    <p>{product.title}</p>
                    <p>{product.price} x 3</p>
                    <p className="font-bold">Subtotal: {product.price * 3}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">Direccion de entrega</h2>
            <div className="mb-5">
              <p className="text-xl">Lucas Iriarte</p>
              <p className="font-semibold">Ayolas 12345</p>
              <p>Mar del Plata</p>
              <p>Buenos Aires</p>
              <p>7600</p>
            </div>
            <div className="w-full h-0.5 rounded bg-gray-200 mb-5"></div>
            <h2 className="text-2xl mb-2">Resumen</h2>
            <div className="grid grid-cols-2">
              <span>Nr. Productos</span>
              <span className="text-right ">3 Articulos</span>
              <span className="mt-1">Subtotal</span>
              <span className="text-right mt-1">$ 100 </span>
              <span className="mt-1">Iva (15%)</span>
              <span className="text-right mt-1">$115</span>
              <span className="mt-5 text-2xl">Total</span>
              <span className="text-right mt-5 text-2xl">$115</span>
            </div>

            <div>
              <Link
                href="/orders/123"
                className="flex btn-primary justify-center mt-5"
              >
                Colocar Orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}