import { Box, styled, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const listBaking = [
  {
    name: "Baking Demo Surabaya, Came & Join us?",
    image: "./baking-assets/baking-1.png",
    date: "14 Januari 2023",
  },
  {
    name: "Baking Demo Surabaya, Came & Join us?",
    image: "./baking-assets/baking-2.png",
    date: "14 Januari 2023",
  },
  {
    name: "Baking Demo Surabaya, Came & Join us?",
    image: "./baking-assets/baking-3.png",
    date: "14 Januari 2023",
  },
  {
    name: "Baking Demo Surabaya, Came & Join us?",
    image: "./baking-assets/baking-4.png",
    date: "14 Januari 2023",
  },
  {
    name: "Baking Demo Surabaya, Came & Join us?",
    image: "./baking-assets/baking-5.jpg",
    date: "14 Januari 2023",
  },
  {
    name: "Baking Demo Surabaya, Came & Join us?",
    image: "./baking-assets/baking-1.png",
    date: "14 Januari 2023",
  },
  {
    name: "Baking Demo Surabaya, Came & Join us?",
    image: "./baking-assets/baking-2.png",
    date: "14 Januari 2023",
  },
  {
    name: "Baking Demo Surabaya, Came & Join us?",
    image: "./baking-assets/baking-3.png",
    date: "14 Januari 2023",
  },
  {
    name: "Baking Demo Surabaya, Came & Join us?",
    image: "./baking-assets/baking-4.png",
    date: "14 Januari 2023",
  },
  {
    name: "Baking Demo Surabaya, Came & Join us?",
    image: "./baking-assets/baking-5.jpg",
    date: "14 Januari 2023",
  },
];

const Wrapper = styled(Box)(({ theme }) => ({
  width: "75vw",
  margin: "auto",
  paddingTop: "64px",
  paddingBottom: "32px",
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
}));

const BakingImage = styled("img")({
  borderRadius: "12px",
  width: "300px !important",
  height: "300px !important",
});

const CustomNextButton = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  position: "unset !important",
  "&::after": {
    fontSize: "16px !important",
    fontWeight: "700 !important",
  },
});

const CustomPrevButton = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  position: "unset !important",
  "&::after": {
    fontSize: "16px !important",
    fontWeight: "700 !important",
  },
});

export default function UpcomingClass() {
  return (
    <Box position="relative">
      <Wrapper>
        <Typography variant="h4">Our Baking Class & Demo</Typography>
      </Wrapper>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        style={{ paddingLeft: "calc((100vw - 75vw)/2)" }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {listBaking.map((baking, index) => (
          <SwiperSlide key={index}>
            <BakingImage src={baking.image} style={{}} alt="baking-images" />
            <Typography
              sx={{
                textAlign: "left",
                marginTop: "32px",
                fontSize: "20px",
                width: "70%",
              }}
            >
              {baking.name}
            </Typography>
            <Typography sx={{ textAlign: "left", marginTop: "32px" }}>
              {baking.date}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginTop: "48px",
          marginLeft: "calc((100vw - 75vw)/2)",
        }}
      >
        <CustomPrevButton className="swiper-button-prev"></CustomPrevButton>
        <CustomNextButton className="swiper-button-next"></CustomNextButton>
      </Box>
      <img
        src="./pizza.png"
        alt="pizza"
        style={{ position: "absolute", top: 300 }}
      />
      <img
        src="./cheese.png"
        alt="cheese"
        style={{ position: "absolute", top: 600, right: -10 }}
      />
    </Box>
  );
}
