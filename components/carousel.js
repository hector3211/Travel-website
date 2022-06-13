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
      bgColor={"gray.800"}
      color="white"
      maxW={"100%"}
      py={5}
      display={{ base: "none", md: "block" }}
    >
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
        {CarouselList.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              my={5}
              rounded={3}
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
