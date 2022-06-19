import {
  Box,
  Flex,
  Button,
  Center,
  Text,
  Icon,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { ScaleButton } from "../layouts/motion";
import { signInWithGoogle, signOutUser, auth } from "../firebase";
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { EmailIcon } from "@chakra-ui/icons";
// Start of Hero component
export default function Hero() {
  // states
  const [signIn, setSignIn] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  // Chakra modal states
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  // Chrakra toast
  const toast = useToast();
  // useEffect will run when the component is rendered and check the email link for firebase authorization
  useEffect(() => {
    let savedEmail = window.localStorage.getItem("emailForSignIn");
    if (isSignInWithEmailLink(auth, window.location.href) && savedEmail) {
      // if savedEmail not defined, window will pop for user to entere theyre email
      if (!savedEmail) {
        savedEmail = window.prompt(
          "Please enter your email address for confirmation"
        );
      }
      // if savedEmail is defined, sign in with email link
      signInWithEmailLink(auth, savedEmail, window.location.href)
        .then((result) => {
          localStorage.removeItem("emailForSignIn");
          const user = result.user;
          console.log(user);
          const name = user.displayName;
          const email = user.email;
          localStorage.setItem("user", name.split(" ")[0]);
          setUser(localStorage.getItem("user"));
          setSignIn(true);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);
  //Google authentication
  const handleGoogle = async () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        localStorage.setItem("user", user.displayName.split(" ")[0]);
        setUser(localStorage.getItem("user", user.displayName.split(" ")[0]));
        setSignIn(true);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // sign out user
  const handleSignOut = async () => {
    signOutUser()
      .then(() => {
        localStorage.removeItem("user");
        setSignIn(false);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // where we want to send the user to after they click the link in the email
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://travel-hector3211.vercel.app",
    // This must be true.
    handleCodeInApp: true,
  };
  // send email link to user function
  const sendEmailLink = async () => {
    if (isSignInWithEmailLink(auth, window.location.href) && email) {
      setSignIn(true);
    } else {
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          localStorage.setItem("emailForSignIn", email);
          // Chrak toast to display that the email link was sent
          toast({
            title: `Link sent to ${email}, please check your email`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          onClose();
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          toast({
            title: "Cant't sign in at this time, try again later",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          // ...
        });
    }
  };
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
        minH="20rem"
        position="absolute"
        align="center"
        justify="center"
        right={{ base: "6%", md: "10%" }}
        top="35%"
        p={5}
        rounded={10}
      >
        <Text fontSize={"3xl"} color="white">
          Welcome {signIn && user}
        </Text>
        <Center>
          {signIn ? (
            <ScaleButton>
              <Button
                width={"15rem"}
                height="4rem"
                color="white"
                bgColor={"#6C63FF"}
                _hover={{ bgColor: "#5F57BD", textDecoration: "none" }}
                size="lg"
                mt={{ base: 3, md: 1 }}
                onClick={handleSignOut}
              >
                Logout
              </Button>
            </ScaleButton>
          ) : (
            <Flex direction={"column"}>
              <ScaleButton>
                <Button
                  my={3}
                  width={"18rem"}
                  height="4rem"
                  color="white"
                  bgColor={"#6C63FF"}
                  _hover={{ bgColor: "#5F57BD" }}
                  size="lg"
                  mt={{ base: 3, md: 1 }}
                  onClick={handleGoogle}
                >
                  <Icon boxSize={10} as={FcGoogle} />
                  <Text fontSize={"2xl"}>Login with Google</Text>
                </Button>
              </ScaleButton>
              <ScaleButton>
                <Button
                  width={"18rem"}
                  height="4rem"
                  color="white"
                  bgColor={"#6C63FF"}
                  _hover={{ bgColor: "#5F57BD" }}
                  size="lg"
                  mt={{ base: 3, md: 1 }}
                  onClick={onOpen}
                >
                  <Icon boxSize={10} as={EmailIcon} pr={3} />
                  <Text fontSize={"2xl"}>Log in with email</Text>
                </Button>
              </ScaleButton>
            </Flex>
          )}
        </Center>
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter email to recieve a link</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  ref={initialRef}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                mx={1}
                color="white"
                bgColor={"#6C63FF"}
                _hover={{ bgColor: "#5F57BD" }}
                size="lg"
                onClick={sendEmailLink}
              >
                Send
              </Button>
              <Button
                mx={1}
                color="white"
                bgColor={"#6C63FF"}
                _hover={{ bgColor: "#5F57BD" }}
                size="lg"
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
}
