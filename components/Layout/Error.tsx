import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
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
        <Center alignItems="center">
          <Box borderRadius="full" overflow="hidden" width={128} height={128}>
            <Image
              boxSize="128px"
              objectFit="contain"
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
        <Center my={6}>
          <NextLink href="/">
            <Button colorScheme="green">Go back to home</Button>
          </NextLink>
        </Center>
      </Section>
    </Container>
  );
};

export default Error;
