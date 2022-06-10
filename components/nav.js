import {
  Image,
  Box,
  Flex,
  Text,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
export default function nav() {
  const [navbar, setNavBar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <Flex
      bgColor={navbar ? "#6C63FF" : "transparent"}
      backdropFilter={navbar && "auto"}
      backdropBlur={navbar && "20px"}
      zIndex={10}
      justify={"space-between"}
      align="center"
      position="fixed"
      width="100%"
      minHeight="0.5rem"
      py={navbar ? 1 : 5}
      px={{ base: 30, md: 20 }}
    >
      <Text fontSize={navbar ? "3xl" : "5xl"}>Travel</Text>
      <Flex>
        <Menu>
          <MenuButton
            bgColor={"transparent"}
            _hover={{ bgColor: "whiteAlpa.100", border: "1px solid white" }}
            as={IconButton}
          >
            <Icon boxSize={6} as={BiMenu} />
          </MenuButton>
          <MenuList bgColor={"whiteAlpha.2000"}>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Featured places</MenuItem>
            <MenuItem>Testimonials</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
