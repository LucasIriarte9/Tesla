"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./slideshow.css";
import Image from "next/image";

interface Props {
  images: string[] | undefined;
  title?: string | undefined;
  className?: string;
}

export const ProductMobileSlides = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: "100vw",
          height: "500px",
        }}
        pagination
        navigation={true}
        autoplay={{
          delay: 2000,
        }}
        modules={[FreeMode, Navigation, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images?.map((image) => (
          <SwiperSlide key={image}>
            <Image
              id="imgen"
              src={`/products/${image}`}
              alt={`${title}`}
              width={600}
              height={500}
              className="object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
