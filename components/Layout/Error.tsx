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
import Image from "next/image";
import NextLink from "next/link";

interface ErrorProps {
  title: string;
  subtitle: string;
  errorType?: string;
}

const Error = ({ title, subtitle, errorType="" }: ErrorProps) => {
  return (
    <Container maxW="container.md" mt={10}>
      <SlideFade in={true}>
        <Box>
          <Center direction="column" alignItems="center">
            <Box borderRadius="full" overflow="hidden" width={128} height={128}>
              <Image
                width={256}
                height={256}
                objectFit="cover"
                alt="test"
                src={errorType === "server" ? "/assets/images/500.jpg" : "/assets/images/404.jpg"}
              />
            </Box>
          </Center>
          <Heading as="h1" my={3}>
            {title}
          </Heading>
          <Text>{subtitle}</Text>
        </Box>

        <Divider my={6} />

        <Box my={6} align="center">
          <NextLink href="/">
            <Button colorScheme="teal">Go back to home</Button>
          </NextLink>
        </Box>
      </SlideFade>
    </Container>
  );
};

export default Error;
