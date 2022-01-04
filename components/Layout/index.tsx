import Navbar from "./Navbar";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../../styles/prism";
import { useColorMode } from "@chakra-ui/react";

const index = ({ children }: PropsWithChildren<{}>) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
        `}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default index;
