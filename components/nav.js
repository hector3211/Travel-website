import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
export default function nav() {
  return (
    <Flex
      zIndex={2}
      justify={"space-between"}
      position="fixed"
      width="100%"
      minHeight="3rem"
      pt={10}
      px={20}
    >
      <Heading>Travel</Heading>
      <Flex>
        <Menu>
          <MenuButton
            bgColor="whiteAlpha.100"
            _hover={{ bgColor: "whiteAlpa.100" }}
            as={IconButton}
          >
            <Icon boxSize={6} as={BiMenu} />
          </MenuButton>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Packages</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
