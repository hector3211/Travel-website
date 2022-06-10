import { Box, Center, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
export default function weather() {
  const [city, setCity] = useState(null);

  useEffect(() => {
    const getData = async () =>
      await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=27.7&lon=-82.6&appid=${process.env.NEXT_PUBLIC_SECRET_KEY}`
      )
        .then((response) => {
          setCity(
            `${response.data.name} ${Math.round(
              Math.round(response.data.main.temp - 273.15) * 1.8 + 32
            )}🌡 ${response.data.weather[0].description}`
          );
        })
        .catch((error) => console.log(error));
    getData();
  }, []);
  console.log(city);
  return (
    <Box color="white" minH="4rem" bgColor="#6C63FF">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Center>
            <Text mt={{ base: 4, md: 2 }} fontSize={{ base: "xl", md: "4xl" }}>
              {city}
            </Text>
          </Center>
        </SwiperSlide>
        <SwiperSlide>
          <Center>
            <Text mt={{ base: 4, md: 2 }} fontSize={{ base: "xl", md: "4xl" }}>
              {city}
            </Text>
          </Center>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
