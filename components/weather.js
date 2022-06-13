import { Box, Center, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Axios from "../components/axios";
import axios from "axios";
import requests from "../components/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
export default function weather() {
  const [city, setCity] = useState(null);

  useEffect(() => {
    const getData = async () =>
      await axios
        .all(requests.map((request) => Axios.get(request)))
        .then((response) => {
          setCity(response.map((res) => res.data));
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
        {city.map((city, index) => (
          <SwiperSlide key={index}>
            <Center>
              <Flex justify={"space-around"}>
                <Text
                  mt={{ base: 4, md: 2 }}
                  fontSize={{ base: "xl", md: "4xl" }}
                >
                  {city.name}
                </Text>
                <Text
                  mt={{ base: 4, md: 2 }}
                  fontSize={{ base: "xl", md: "4xl" }}
                >
                  {city.main.temp}
                </Text>
                <Text
                  mt={{ base: 4, md: 2 }}
                  fontSize={{ base: "xl", md: "4xl" }}
                >
                  {city.weather[0].description}
                </Text>
              </Flex>
            </Center>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
