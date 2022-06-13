import {
  Box,
  Text,
  Icon,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Input,
  Center,
  Divider,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { ScaleBox } from "../layouts/motion";
export default function hero() {
  return (
    <Box position="relative">
      <Box
        minWidth="100%"
        minHeight="100vh"
        as="video"
        autoPlay={true}
        muted={true}
        loop={true}
        src="/videos/traveltwo.mp4"
        objectFit="cover"
        sx={{ aspectRatio: "16/9" }}
      />
      <Flex
        minWidth={{ base: "80%", md: "75%", lg: "30%" }}
        position="absolute"
        direction="column"
        align="center"
        right={{ base: "2.5%", md: "12%", lg: "10%" }}
        top="13rem"
        maxH={{ base: "25rem", md: "30rem" }}
        p={5}
        backdropFilter="auto"
        backdropBlur="8px"
        border="1px solid white"
        rounded={20}
      >
        <ScaleBox>
          <Button p={7} mt={3} colorScheme={"blackAlpha"}>
            <Icon boxSize={9} as={FcGoogle} mr={5} />
            <Text fontSize={"xl"}>Connect with Google</Text>
          </Button>
        </ScaleBox>
        <Flex justify={"space-evenly"} align={"center"}>
          <Divider pt={5} width={{ base: "9rem", md: "11rem" }} />
          <Text color="white" mt={2} px={2}>
            Or
          </Text>
          <Divider pt={5} width={{ base: "9rem", md: "11rem" }} />
        </Flex>

        <FormControl maxW={{ md: "80%", lg: "100%" }} minHeight={"30rem"}>
          <FormLabel
            fontSize={{ md: "xl" }}
            color="white"
            mt={{ base: 10, md: 20 }}
            htmlFor="email"
          >
            Email address
          </FormLabel>
          <Input size="lg" id="email" type="email" />
          <FormLabel fontSize={{ md: "xl" }} color="white" htmlFor="password">
            Password
          </FormLabel>
          <Input size="lg" id="password" type="password" />
          <Center>
            <Flex
              justify={{ base: "space-between", md: "space-around" }}
              w="100%"
            >
              <ScaleBox>
                <Button
                  width={"10rem"}
                  color="white"
                  bgColor={"#6C63FF"}
                  _hover={{ bgColor: "#5F57BD" }}
                  size="lg"
                  mt={{ base: 3, md: 6 }}
                >
                  Sign Up
                </Button>
              </ScaleBox>
              <ScaleBox>
                <Button
                  width={"10rem"}
                  color="white"
                  bgColor={"#6C63FF"}
                  _hover={{ bgColor: "#5F57BD" }}
                  size="lg"
                  mt={{ base: 3, md: 6 }}
                >
                  Login
                </Button>
              </ScaleBox>
            </Flex>
          </Center>
        </FormControl>
      </Flex>
    </Box>
  );
}
