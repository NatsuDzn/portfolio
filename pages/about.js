import Head from "next/head";
import {
  Box,
  Container,
  Divider,
  Heading,
  SlideFade,
  Tag,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import { useState } from "react";

const About = () => {
  const [coolStuff, setCoolStuff] = useState([
    "React",
    "Angular",
    "Typescript",
    "iOS",
    "Space",
    "Anime",
    "Manga",
  ]);

  const [mehStuff, setMehStuff] = useState([
    "jQuery",
    "Coffee",
    "Alcohol",
    "Backend",
  ]);

  return (
    <div>
      <Head>
        <title>About | Nathanael Louzoun</title>
        <meta name="description" content="About | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="About | Nathanael Louzoun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.md" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                mb={4}
              >
                About Me
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                After high school, I studied at Hetic in Montreuil, where I
                started front-end development, and ui/ux design and back-end. In
                my free time I like to learn new things. During the weekend I
                like to read manga, code new things and hang out with friends.
              </Paragraph>
            </Box>
          </SlideFade>

          <Divider my={10} />

          <SlideFade in={true} offsetY={80} delay={0.2}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                mb={4}
              >
                Work
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                While I was at Hetic I had the chance to work after the end of
                my 1st year. I have started to work for ThingType where I
                learned about Angular. During my second and last year I worked
                at DessIA where I really dived in Angular.
              </Paragraph>
            </Box>
          </SlideFade>

          <Divider my={10} />

          <SlideFade in={true} offsetY={80} delay={0.4}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                mb={4}
              >
                Thing I like
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                {coolStuff.map((item) => (
                  <Tag
                    size="lg"
                    colorScheme="green"
                    key={item}
                    marginY={2}
                    marginRight={2}
                  >
                    {item}
                  </Tag>
                ))}
              </Paragraph>
            </Box>
          </SlideFade>

          <Divider my={10} />

          <SlideFade in={true} offsetY={80} delay={0.6}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                mb={4}
              >
                Thing I don’t like
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                {mehStuff.map((item) => (
                  <Tag
                    size="lg"
                    colorScheme="red"
                    key={item}
                    marginY={2}
                    marginRight={2}
                  >
                    {item}
                  </Tag>
                ))}
              </Paragraph>
            </Box>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default About;
