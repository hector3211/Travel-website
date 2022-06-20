// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const colors = {
  dark: "#4B6587",
  light: "#F9F9F9",
};
// 3. extend the theme
const theme = extendTheme({ config, colors });

export default theme;
