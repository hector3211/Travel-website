import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Input,
  Center,
} from "@chakra-ui/react";

export default function hero() {
  return (
    <Box bgColor="red" position="relative">
      <Box
        position="absolute"
        top={0}
        right={0}
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
        justify="space-evenly"
        left={{ base: 0, md: "25%", lg: "5%" }}
        top="10rem"
      >
        <Box
          minHeight={"10rem"}
          p={5}
          backdropFilter="auto"
          backdropBlur="8px"
          border="1px solid white"
          rounded={5}
        >
          <FormControl minHeight={"30rem"} p={5}>
            <FormLabel mt={"13rem"} htmlFor="email">
              Email address
            </FormLabel>
            <Input id="email" type="email" />
            <FormLabel mt={3} htmlFor="password">
              Password
            </FormLabel>
            <Input id="password" type="password" />
            <Center>
              <Button size="lg" mt={5}>
                Submit
              </Button>
            </Center>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
}
