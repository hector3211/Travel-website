import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import { Box, Image } from "@chakra-ui/react";
export default function carousel() {
  return (
    <Box
      maxW={{ base: "100%", md: "100%" }}
      bgGradient="linear(to-b, #E8E9E9, #CBF4F7)"
      pt={5}
      display={{ base: "block", md: "none" }}
    >
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={2}
        slidesPerGroup={1}
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
            rounded={3}
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
            rounded={3}
            src="/images/gridtwo.jpg"
            alt="grid one photo"
            objectFit={"cover"}
            w="100%"
            h="300px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            my={5}
            rounded={3}
            src="/images/gridseven.jpg"
            alt="grid one photo"
            objectFit={"cover"}
            objectPosition="top"
            w="100%"
            h="300px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            my={5}
            rounded={3}
            src="/images/gridfour.jpg"
            alt="grid one photo"
            objectFit={"cover"}
            w="100%"
            h="300px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            my={5}
            rounded={3}
            src="/images/gridsix.jpg"
            alt="grid one photo"
            objectFit={"cover"}
            objectPosition="bottom"
            w="100%"
            h="300px"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
