import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Box, Image, Center, Text } from "@chakra-ui/react";
import CarouselList from "../components/carouselList";
export default function Carousel() {
  return (
    <Box
      id="places"
      maxW={"100%"}
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
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {CarouselList.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              my={5}
              rounded={3}
              src={img.image}
              alt={`photo ${img.id}`}
              objectFit={"cover"}
              objectPosition="bottom"
              w="100%"
              h="400px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
