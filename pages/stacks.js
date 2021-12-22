import Head from "next/head";
import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  ScaleFade,
  Tab,
  TabList,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaBrush,
  FaCloud,
  FaCode,
  FaDesktop,
  FaLayerGroup,
} from "react-icons/fa";
import Paragraph from "../components/Paragraph";
import { getTable } from "../lib/airtable";
import { useCallback, useState } from "react";
import Stackcard from "../components/Stackcard";

const Stacks = ({ stacks }) => {
  const [stacksList, setStacksList] = useState(stacks);

  const filterStacks = useCallback(
    (tab) => {
      if (tab !== null) {
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

          <Tabs
            variant="soft-rounded"
            colorScheme={useColorModeValue("gray", "teal")}
            align="center"
            mt={4}
          >
            <TabList flexWrap="wrap">
              <Tab onClick={() => filterStacks(null)}>
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

          {!stacksList.length && "No stacks found."}
          <Grid
            mt={10}
            alignItems="center"
            templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
            gap={5}
          >
            {stacksList
              .sort((a, b) => (a.fields.ID > b.fields.ID ? 1 : -1))
              .map((stack, index) => (
                <Stackcard stack={stack} key={index} />
              ))}
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
