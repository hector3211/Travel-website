import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import { Box, Image } from "@chakra-ui/react";
export default function carousel() {
  return (
    <Box maxW={{ base: "100%", md: "100%" }}>
      <Swiper
        styles={{ padding: "5px" }}
        direction={"horizontal"}
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={3}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            my={5}
            rounded={20}
            src="/images/gridone.jpg"
            alt="grid one photo"
            objectFit={"cover"}
            w="100%"
            h="300px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            my={5}
            rounded={20}
            src="/images/gridone.jpg"
            alt="grid one photo"
            objectFit={"cover"}
            w="100%"
            h="300px"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
