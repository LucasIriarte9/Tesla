import { Size } from "@/interfaces";
import clsx from "clsx";
import React from "react";
interface Props {
  selectedSize: Size | undefined;
  avalibleSizes: Size[] | undefined;
}
export const SizeSelector = ({ selectedSize, avalibleSizes }: Props) => {
  return (
    <div className="my-5 ">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex">
        {avalibleSizes?.map((size) => (
          <button
            key={size}
            className={clsx("mx-2 hover:underline text-lg", {
              underline: size === selectedSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
