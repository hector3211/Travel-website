import { Box, Flex, Button, Center, Link, Text } from "@chakra-ui/react";
import { ScaleButton } from "../layouts/motion";
import { useUser } from "@auth0/nextjs-auth0";
export default function hero() {
  const { user } = useUser();
  if (user) {
    localStorage.setItem("user", user.nickname);
  }
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
        direction={"column"}
        minWidth={"100%"}
        minH="15rem"
        position="absolute"
        align="center"
        justify="center"
        right={0}
        top="35%"
        p={5}
        rounded={10}
      >
        {user && (
          <Flex align="center" w="100%" justify={"center"}>
            <Text fontSize={"2xl"} color="white">
              Welcome
            </Text>
            <Text ml={5} fontSize={{ base: "xl", md: "4xl" }} color="white">
              {user.nickname}
            </Text>
          </Flex>
        )}
        <Center>
          {user ? (
            <Link textDecoration={"none"} href="/api/auth/logout">
              <ScaleButton>
                <Button
                  width={"12rem"}
                  height="4rem"
                  color="white"
                  bgColor={"#6C63FF"}
                  _hover={{ bgColor: "#5F57BD", textDecoration: "none" }}
                  size="lg"
                  mt={{ base: 3, md: 1 }}
                >
                  Logout
                </Button>
              </ScaleButton>
            </Link>
          ) : (
            <Link textDecoration={"none"} href="/api/auth/login">
              <ScaleButton>
                <Button
                  width={"12rem"}
                  height="4rem"
                  color="white"
                  bgColor={"#6C63FF"}
                  _hover={{ bgColor: "#5F57BD" }}
                  size="lg"
                  mt={{ base: 3, md: 1 }}
                >
                  Login
                </Button>
              </ScaleButton>
            </Link>
          )}
        </Center>
      </Flex>
    </Box>
  );
}
