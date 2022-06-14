import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import CarouselList from "../components/carouselList";
export default function carousel() {
  return (
    <Box
      id="places"
      px={1}
      maxW={"100%"}
      display={{ base: "none", md: "block" }}
    >
      <Swiper
        direction={"horizontal"}
        slidesPerView={3.3}
        spaceBetween={10}
        slidesPerGroup={3}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {CarouselList.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              rounded={5}
              src={img.image}
              alt="grid one photo"
              objectFit={"cover"}
              objectPosition={"bottom"}
              w="100%"
              h="300px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
