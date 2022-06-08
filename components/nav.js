import {
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
      bgColor={navbar ? "gray.500" : "transparent"}
      zIndex={1}
      justify={"space-between"}
      align="center"
      position="fixed"
      width="100%"
      minHeight="0.5rem"
      py={1}
      px={{ base: 30, md: 20 }}
    >
      <Text fontSize={"3xl"}>Travel</Text>
      <Flex>
        <Menu>
          <MenuButton
            bgColor={"whiteAlpha.50"}
            _hover={{ bgColor: "whiteAlpa.100" }}
            as={IconButton}
          >
            <Icon boxSize={6} as={BiMenu} />
          </MenuButton>
          <MenuList bgColor={"whiteAlpha.2000"}>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Packages</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
