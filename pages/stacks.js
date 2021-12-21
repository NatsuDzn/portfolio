import Head from "next/head";
import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  ScaleFade,
  Stack,
  Tab,
  TabList,
  Tabs,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBrush, FaCloud, FaCode, FaDesktop, FaLayerGroup } from "react-icons/fa";
import Paragraph from "../components/Paragraph";
import { getTable } from "../lib/airtable";
import { useCallback, useState } from "react";

const Stacks = ({ stacks }) => {
  const [stacksList, setStacksList] = useState(stacks);

  const filterStacks = useCallback(
    (tab) => {
      if (tab !== "") {        
        setStacksList(
          stacks.filter((skill) => {
            return skill.fields.type.includes(tab);
          })
        );
      } else {
        setStacksList(stacks);
      }
    },
    [stacks]
  );

  return (
    <div>
      <Head>
        <title>Stacks | Nathanael Louzoun</title>
        <meta name="description" content="Stacks | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="Stacks | Nathanael Louzoun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.md" mt={10}>
          <ScaleFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                textAlign="center"
                mb={4}
              >
                Stacks
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6} textAlign="center">
                Stacks list
              </Paragraph>
            </Box>
          </ScaleFade>

          <Tabs variant="soft-rounded" colorScheme="teal" align="center" mt={4}>
            <TabList flexWrap="wrap">
              <Tab onClick={() => filterStacks("")}>
                <HStack spacing={1}>
                  <FaLayerGroup />
                  <Text>All</Text>
                </HStack>
              </Tab>

              <Tab onClick={() => filterStacks("Web development")}>
                <HStack spacing={1}>
                  <FaDesktop />
                  <Text>Development</Text>
                </HStack>
              </Tab>

              <Tab onClick={() => filterStacks("Scripting")}>
                <HStack spacing={1}>
                  <FaCode />
                  <Text>Scripting</Text>
                </HStack>
              </Tab>

              <Tab onClick={() => filterStacks("Devops")}>
                <HStack spacing={1}>
                  <FaCloud />
                  <Text>Devops</Text>
                </HStack>
              </Tab>

              <Tab onClick={() => filterStacks("Design")}>
                <HStack spacing={1}>
                  <FaBrush />
                  <Text>Design</Text>
                </HStack>
              </Tab>
            </TabList>
          </Tabs>

          {/* Should be a component */}
          <Grid
            mt={10}
            alignItems="center"
            templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
            gap={5}
          >
            {stacksList
              ?.sort((a, b) => (a.fields.ID > b.fields.ID ? 1 : -1))
              .map((stack, index) =>
                stack.fields.name ? (
                  <Link
                    style={{ textDecoration: "none" }}
                    href={stack?.fields.url}
                    rel="noopener"
                    isExternal
                    key={index}
                  >
                    <ScaleFade in={true} offsetY={80} delay={0.2}>
                      <Box
                        p={4}
                        borderColor={useColorModeValue("gray.300", "gray.700")}
                        borderRadius={5}
                        borderWidth="1px"
                        transition=".25s"
                        cursor="pointer"
                        d="flex"
                        alignItems="flex-start"
                        role="group"
                        _hover={{
                          borderColor: "teal.500",
                          shadow: "lg",
                          transform: "translateY(-4px)",
                        }}
                      >
                        <Box
                          p={2}
                          borderColor={useColorModeValue(
                            "gray.300",
                            "gray.700"
                          )}
                          borderRadius="lg"
                          borderWidth="1px"
                          transition=".5s"
                        >
                          <Image
                            height="36px"
                            width="36px"
                            objectFit="contain"
                            rounded="md"
                            alt={stack?.fields.name}
                            src={stack?.fields.image[0].thumbnails.small.url}
                          />
                        </Box>

                        <Box ml={4}>
                          <Heading as="h2" size="sm">
                            {stack?.fields.name}
                          </Heading>
                          <Stack mt={2} direction="row" spacing="1rem">
                            {stack.fields.type.map((type, index) => (
                              <Tag key={index} size="sm">
                                {type}
                              </Tag>
                            ))}
                          </Stack>
                        </Box>
                      </Box>
                    </ScaleFade>
                  </Link>
                ) : (
                  ""
                )
              )}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const stacks = await getTable("Stacks");

  return {
    props: {
      stacks,
    },
    revalidate: 600,
  };
}

export default Stacks;
