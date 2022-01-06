import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Section from "./Section";

interface ErrorProps {
  title: string;
  subtitle: string;
  errorType?: string;
}

const Error = ({ title, subtitle, errorType = "" }: ErrorProps) => {
  return (
    <Container maxW="container.md" mt={10}>
      <Section delay={0.1}>
        <Center direction="column" alignItems="center">
          <Box borderRadius="full" overflow="hidden" width={128} height={128}>
            <Image
              width={256}
              height={256}
              objectFit="cover"
              alt="test"
              src={
                errorType === "server"
                  ? "/assets/images/500.jpg"
                  : "/assets/images/404.jpg"
              }
            />
          </Box>
        </Center>
        <Heading as="h1" my={3}>
          {title}
        </Heading>
        <Text>{subtitle}</Text>
      </Section>

      <Divider my={6} />

      <Section delay={0.2}>
        <Box my={6} align="center">
          <NextLink href="/">
            <Button colorScheme="teal">Go back to home</Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  );
};

export default Error;
