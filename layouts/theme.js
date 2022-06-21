// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
const colors = {
  dark: "#4B6587",
  light: "#F9F9F9",
  mainPurple: "#6C63FF",
  mainYellow: "#FFC655",
};
const shadows = {
  first: "1px  1px 30px 1px black",
};
// 3. extend the theme
const theme = extendTheme({ config, colors, shadows });

export default theme;
