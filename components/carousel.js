import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import CarouselList from "../components/carouselList";

export default function Carousel() {
  return (
    <Box
      id="partners"
      px={2}
      py={3}
      maxW={"100%"}
      display={{ base: "none", md: "block" }}
      position={"relative"}
    >
      <Center>
        <Text py={3} fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
          Our Partners
        </Text>
      </Center>
      <Swiper
        direction={"horizontal"}
        slidesPerView={4.2}
        spaceBetween={10}
        slidesPerGroup={4}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {CarouselList.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              src={img.image}
              alt={`photo ${img.id}`}
              objectFit={"coontain"}
              objectPosition={"bottom"}
              w="100%"
              h="200px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
