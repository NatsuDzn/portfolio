import { ChakraTheme, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ChakraTheme["config"] = {
  initialColorMode: "system",
};

const styles = {
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  fontSizes: {
    custom: "28px",
  },
  colors: {
    active: "#ffffff15",
    darkBackground: "#0E1117",
  },
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("#fff", "darkBackground")(props),
      },
      "body::-webkit-scrollbar": { width: "0.4rem" },
      "body::-webkit-scrollbar-track": {
        background: mode("gray.200", "gray.900")(props),
      },
      "body::-webkit-scrollbar-thumb": {
        backgroundColor: mode("black", "green.500")(props),
      },
      "::selection": {
        backgroundColor: mode("black", "green.500")(props),
        color: "white",
      },
    }),
  },
};

export default extendTheme(styles);
