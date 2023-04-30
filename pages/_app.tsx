import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Layout from "../components/Layout/index";
import { AnimatePresence } from "framer-motion";
import '@fontsource/inter';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
