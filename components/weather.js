import { Box, Center, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Axios from "../components/axios";
import axios from "axios";
import requests from "../components/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
export default function weather() {
  const [data, setData] = useState(null);
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    const getData = async () =>
      await axios
        .all(requests.map((request) => Axios.get(request)))
        .then((response) => {
          setData(response.map((res) => res.data));
          setWeather(true);
        })

        .catch((error) => console.log(error));
    getData();
  }, []);
  console.log(data);

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
        {weather &&
          data.map((city, index) => (
            <SwiperSlide key={index}>
              <Center>
                <Flex justify={"space-between"}>
                  <Text
                    mt={{ base: 4, md: 2 }}
                    fontSize={{ base: "xl", md: "5xl" }}
                    mx={1}
                  >
                    {city.name}
                  </Text>
                  <Text
                    mt={{ base: 4, md: 2 }}
                    fontSize={{ base: "xl", md: "5xl" }}
                    mx={1}
                  >
                    {Math.round(Math.round(city.main.temp - 273.15) * 1.8 + 32)}
                    🌡
                  </Text>
                  <Text
                    mt={{ base: 4, md: 2 }}
                    fontSize={{ base: "xl", md: "5xl" }}
                    mx={1}
                  >
                    {city.weather[0].description}
                    {(city.weather[0].description === "clear sky") | "clear"
                      ? "☀️"
                      : "🌥"}
                  </Text>
                </Flex>
              </Center>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
}
