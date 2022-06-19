import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Box, Image, Center, Text } from "@chakra-ui/react";
import CarouselList from "../components/carouselList";
// SmallCarousel is a component that display when is mobile view compared to its big brother that only appears in meduim view and larger
export default function Carousel() {
  return (
    <Box
      id="partners"
      maxW={"100%"}
      py={10}
      display={{ base: "block", md: "none" }}
    >
      <Center>
        <Text fontSize={"4xl"} fontWeight="bold">
          Our Partners
        </Text>
      </Center>
      <Swiper
        direction={"horizontal"}
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={1}
        autoplay={{
          delay: 500,
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
              objectFit={"contain"}
              objectPosition="bottom"
              w="100%"
              h="150px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
