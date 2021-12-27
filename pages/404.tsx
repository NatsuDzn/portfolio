import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import Error from "../components/Layout/Error";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 | Not Found</title>
        <meta name="description" content="404 | Not Found" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="404 | Not Found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Error
          title="Not found"
          subtitle="The page you're looking for wasn't found."
        />
      </main>
    </div>
  );
}
