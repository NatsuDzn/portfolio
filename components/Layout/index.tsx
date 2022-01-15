import Navbar from "./Navbar";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import { css, Global } from "@emotion/react";
import { useColorMode } from "@chakra-ui/react";
import { prismLightTheme, prismDarkTheme } from "../../styles/prism";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const { colorMode } = useColorMode();

  const prismTheme = {
    light: prismLightTheme,
    dark: prismDarkTheme,
  };

  return (
    <>
      <Global
        styles={css`
          ${prismTheme[colorMode]};
        `}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
