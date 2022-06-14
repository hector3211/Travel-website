import {
  Container,
  Flex,
  Text,
  Image,
  Box,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { StyledBox } from "../layouts/motion";
export default function about() {
  return (
    <StyledBox delay={0.3}>
      <Flex
        id="about"
        p={{ base: 2, md: 5 }}
        position={"relative"}
        direction={"column"}
        justify="center"
      >
        <Center>
          <Text py={3} fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
            About
          </Text>
        </Center>
        <Center>
          <SimpleGrid
            w="100%"
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 5, md: 3 }}
            py={3}
          >
            <Image
              src="/images/teamspirit.svg"
              alt="office one"
              objectFit="contain"
              objectPosition="center"
              w="100%"
              h="300px"
            />
            <Container maxW={"100%"}>
              <Flex
                mt={20}
                justify="center"
                align="center"
                direction={"column"}
              >
                <Text fontSize={"3xl"}>Our team</Text>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  style={{ textIndent: "1rem" }}
                >
                  At Travel we hand select the best of the best to join our
                  company to be able to provide the best experience to our
                  customers
                </Text>
              </Flex>
            </Container>
            <Container maxW={"100%"}>
              <Flex mt={20} justify="start" align="center" direction={"column"}>
                <Text fontSize={"3xl"}>Our offices</Text>
                <Text
                  mt={5}
                  fontSize={{ base: "xl", md: "2xl" }}
                  style={{ textIndent: "1rem" }}
                >
                  With multiple offices all over the US and some internationaly
                  we got you covered from where ever you may be.
                </Text>
              </Flex>
            </Container>
            <Image
              src="/images/officeglobal.svg"
              alt="office one"
              objectFit="contain"
              objectPosition="center"
              w="100%"
              h="300px"
            />
          </SimpleGrid>
        </Center>
      </Flex>
    </StyledBox>
  );
}
