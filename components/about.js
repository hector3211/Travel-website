import {
  Container,
  Flex,
  Text,
  Image,
  Box,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";

export default function about() {
  return (
    <Flex
      direction={"column"}
      justify="center"
      bgGradient="linear(to-b, blue.50,gray.200 )"
    >
      <Center>
        <Text py={3} fontSize={"5xl"}>
          About
        </Text>
      </Center>
      <Center>
        <SimpleGrid maxW="80%" columns={{ base: 1, md: 2 }} spacing={3} py={3}>
          <Image
            src="/images/teamspirit.svg"
            alt="office one"
            objectFit="contain"
            objectPosition="center"
            w="100%"
            h="400px"
          />
          <Container maxW={"100%"}>
            <Flex justify="start" direction={"column"}>
              <Text fontSize={"3xl"}>Our team</Text>
              <Text fontSize={"xl"}>Lorem text</Text>
            </Flex>
          </Container>
          <Container maxW={"100%"}>
            <Flex justify="start" direction={"column"}>
              <Text fontSize={"3xl"}>Our offices</Text>
              <Text fontSize={"xl"} style={{ textIndent: "1rem" }}>
                With multiple offices all over the US and some internationaly we
                got you covered from where ever you may be.
              </Text>
            </Flex>
          </Container>
          <Image
            src="/images/officeglobal.svg"
            alt="office one"
            objectFit="contain"
            objectPosition="center"
            w="100%"
            h="400px"
          />
        </SimpleGrid>
      </Center>
    </Flex>
  );
}
