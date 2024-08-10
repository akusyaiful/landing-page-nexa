import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  "./poster-assets/poster-1.png",
  "./poster-assets/poster-2.jpg",
  "./poster-assets/poster-3.jpg",
  "./poster-assets/poster-4.jpg",
  "./poster-assets/poster-5.jpg",
];

export default function Carousel() {
  return (
    <Box position="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="banner-images" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
