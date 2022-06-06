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
        src="/videos/travel.mp4"
        objectFit="cover"
        sx={{ aspectRatio: "16/9" }}
      />
      <Flex
        flexShrink={1}
        minWidth={{ base: "100%", md: "45%", lg: "30%" }}
        position="absolute"
        direction="column"
        align="center"
        left={{ base: 0, md: "25%", lg: "5%" }}
        top="15rem"
        maxHeight={"25rem"}
        p={{ md: 5 }}
        backdropFilter="auto"
        backdropBlur="8px"
        border="1px solid white"
        rounded={20}
      >
        <Button p={7} mt={3} colorScheme={"blackAlpha"}>
          <Icon boxSize={9} as={FcGoogle} mr={5} />
          Connect with Google
        </Button>
        <Flex justify={"space-evenly"} align={"center"}>
          <Divider pt={5} width={{ base: "9rem", md: "11rem" }} />
          <Text color="white" mt={2} px={2}>
            Or
          </Text>
          <Divider pt={5} width={{ base: "9rem", md: "11rem" }} />
        </Flex>

        <FormControl p={7} minHeight={"30rem"}>
          <FormLabel color="white" mt={"5rem"} htmlFor="email">
            Email address
          </FormLabel>
          <Input id="email" type="email" />

          <Center>
            <Button size="lg" mt={5}>
              Submit
            </Button>
          </Center>
        </FormControl>
      </Flex>
    </Box>
  );
}
