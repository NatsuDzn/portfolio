import Navbar from "./Navbar";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../../styles/prism";
import { useColorMode } from "@chakra-ui/react";

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
