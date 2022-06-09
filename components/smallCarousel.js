import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Box, Image, Center, Text } from "@chakra-ui/react";
export default function carousel() {
  return (
    <Box
      maxW={{ base: "100%", md: "100%" }}
      bgGradient="linear(to-b, #E8E9E9, #CBF4F7)"
      pt={5}
      display={{ base: "block", md: "none" }}
    >
      <Center>
        <Text fontSize={"4xl"} fontWeight="bold">
          Featured places
        </Text>
      </Center>
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            my={5}
            rounded={3}
            src="/images/gridsix.jpg"
            alt="grid one photo"
            objectFit={"cover"}
            objectPosition="bottom"
            w="100%"
            h="400px"
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
            h="400px"
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
            h="400px"
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
            h="400px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            my={5}
            rounded={3}
            src="/images/gridone.jpg"
            alt="grid one photo"
            objectFit={"cover"}
            objectPosition="bottom"
            w="100%"
            h="400px"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
