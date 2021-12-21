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
  TagLeftIcon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import { getTable } from "../lib/airtable";
import { FaApple, FaAppStoreIos, FaLayerGroup, FaWindows } from "react-icons/fa";
import { useCallback, useState } from "react";

const handlePlatform = (platform) => {
  switch (platform) {
    case "mac":
      return FaApple;
    case "windows":
      return FaWindows;
    case "ios":
      return FaAppStoreIos;
  }
};

const Tools = ({ tools }) => {

    const [toolsList, setToolsList] = useState(tools);

    const filterTools = useCallback(
      (tab) => {
        if (tab !== null) {
          setToolsList(
            tools.filter((tool) => {
              return tool.fields.platform.includes(tab);
            })
          );
        } else {
          setToolsList(tools);
        }
      },
      [tools]
    );

  return (
    <div>
      <Head>
        <title>Tools | Nathanael Louzoun</title>
        <meta name="description" content="Tools | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="Tools | Nathanael Louzoun" />
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
                Tools
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6} textAlign="center">
                List all tools
              </Paragraph>
            </Box>
          </ScaleFade>

          <Tabs
            variant="soft-rounded"
            colorScheme={useColorModeValue("gray", "teal")}
            align="center"
            mt={4}
          >
            <TabList flexWrap="wrap">
              <Tab onClick={() => filterTools(null)}>
                <HStack spacing={1}>
                  <FaLayerGroup />
                  <Text>All</Text>
                </HStack>
              </Tab>

              <Tab onClick={() => filterTools("mac")}>
                <HStack spacing={1}>
                  <FaApple />
                  <Text>Mac</Text>
                </HStack>
              </Tab>

              <Tab onClick={() => filterTools("windows")}>
                <HStack spacing={1}>
                  <FaWindows />
                  <Text>Windows</Text>
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
            {toolsList
              ?.sort((a, b) => (a.fields.ID > b.fields.ID ? 1 : -1))
              .map((tool, index) =>
                tool.fields.name ? (
                  <Link
                    style={{ textDecoration: "none" }}
                    href={tool?.fields.url}
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
                            layout="fixed"
                            rounded="md"
                            alt={tool?.fields.name}
                            src={tool?.fields.image}
                          />
                        </Box>

                        <Box ml={4}>
                          <Heading as="h2" size="sm">
                            {tool?.fields.name}
                          </Heading>
                          <Paragraph mt={1} fontSize="sm">
                            {tool?.fields.description}
                          </Paragraph>
                          <Stack mt={2} direction="row" spacing="1rem">
                            {tool.fields.platform.map((platform, index) => (
                              <Tag key={index} size="sm">
                                <TagLeftIcon as={handlePlatform(platform)} />
                                {platform}
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
  const tools = await getTable("Tools");

  return {
    props: {
      tools,
    },
    revalidate: 600,
  };
}

export default Tools;
