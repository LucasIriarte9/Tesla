import { titleFont } from "@/config/fonts";
import React from "react";
interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`${className} mt-3`}>
      <h1
        className={`${titleFont.className} antialiased text-4xl font-semibold my-6`}
      >
        {title}
      </h1>
      {subtitle && <h3 className="text-xl mb-5 ">{subtitle}</h3>}
    </div>
  );
};

export default Title;
