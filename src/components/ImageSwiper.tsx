import {
  type Swiper as SwiperRef,
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Image } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useRef, useState } from "react";

interface sliderProps {
  images: string[];
}

export default function ProductImagesSlider({ images }: sliderProps) {
  //   const swiperRef = useRef<SwiperRef>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperRef | null>(null);

  type SwiperStyleProps = React.CSSProperties & {
    "--swiper-navigation-color"?: string;
  };

  if (images.length === 1) {
    return (
      <Image
        src={images[0]}
        borderRadius="xl"
        objectFit={"cover"}
        alt={images[0].slice(-20)}
      />
    );
  }
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        style={{ "--swiper-navigation-color": "#1A202C" } as SwiperStyleProps}
        centeredSlides={true}
      >
        {images.map((url) => (
          <SwiperSlide key={url.slice(-10)}>
            <img src={url} alt={url.slice(-10)} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((url) => (
          <SwiperSlide key={url.slice(-10)}>
            <img src={url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
