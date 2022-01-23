import {
  Container,
  Grid,
  HStack,
  Tab,
  TabList,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { HiBookOpen, HiCollection, HiFilm } from "react-icons/hi";
import Favcard from "../components/Favcard";
import Section from "../components/Layout/Section";
import Paragraph from "../components/Paragraph";

export default function Favorites({ favs }) {
  const [tab, setSelectedTab] = useState(null);

  return (
    <div>
      <Head>
        <title>Favorites | Nathanael Louzoun</title>
        <meta name="description" content="Favorites | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="Favorites | Nathanael Louzoun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.md" mt={10}>
          <Section delay={0.1}>
            <Text
              as="h1"
              fontSize="custom"
              fontWeight="bold"
              textAlign="center"
              mb={2}
            >
              Favorites
            </Text>
            <Paragraph fontSize="lg" lineHeight={1.6} textAlign="center">
              My manga and anime recommendations
            </Paragraph>
          </Section>

          <Section delay={0.2}>
            <Tabs
              variant="soft-rounded"
              colorScheme={useColorModeValue("gray", "green")}
              align="center"
              mt={4}
            >
              <TabList flexWrap="wrap">
                <Tab onClick={() => setSelectedTab(null)}>
                  <HStack spacing={1}>
                    <HiCollection fontSize="xl" />
                    <Text>All ({favs.total.all})</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => setSelectedTab("anime")}>
                  <HStack spacing={1}>
                    <HiFilm fontSize="xl" />
                    <Text>Anime ({favs.total.anime})</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => setSelectedTab("manga")}>
                  <HStack spacing={1}>
                    <HiBookOpen fontSize="xl" />
                    <Text>Manga ({favs.total.manga})</Text>
                  </HStack>
                </Tab>
              </TabList>
            </Tabs>
          </Section>

          <Section delay={0.3}>
            <Grid
              mt={10}
              alignItems="center"
              templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
              rowGap={12}
              columnGap={4}
            >
              <AnimatePresence>
                {favs.results
                  ?.filter((favorite) =>
                    tab ? favorite.type === tab?.toUpperCase() : favorite
                  )
                  .map((fav, i) => (
                    <Favcard media={fav} key={fav.id} />
                  ))}
              </AnimatePresence>
            </Grid>
          </Section>
        </Container>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://nathanael-louzoun.vercel.app/api/anilist/favorites");
  const favs = await res.json();

  return {
    props: {
      favs,
    },
    revalidate: 10,
  };
};
