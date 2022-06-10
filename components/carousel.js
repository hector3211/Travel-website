import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import { Box, Center, Image, Text } from "@chakra-ui/react";
export default function carousel() {
  return (
    <Box maxW={"100%"} py={5} display={{ base: "none", md: "block" }}>
      <Center>
        <Text py={3} fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
          Featured places
        </Text>
      </Center>
      <Swiper
        direction={"horizontal"}
        slidesPerView={3.3}
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
            rounded={3}
            src="/images/gridsix.jpg"
            alt="grid one photo"
            objectFit={"cover"}
            objectPosition={"bottom"}
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
        <SwiperSlide>
          <Image
            my={5}
            rounded={3}
            src="/images/gridfive.jpg"
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
            src="/images/gridthree.jpg"
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
