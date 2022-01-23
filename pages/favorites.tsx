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
import { GetStaticProps } from "next";
import Head from "next/head";
import { useCallback, useState } from "react";
import { HiBookOpen, HiCollection, HiFilm } from "react-icons/hi";
import Favcard from "../components/Favcard";
import Section from "../components/Layout/Section";
import Paragraph from "../components/Paragraph";

export default function Favorites({ favs }) {
  const [favorites, setFavorites] = useState(favs.results);

  const filterStacks = useCallback(
    (tab: string) => {
      if (tab !== null) {
        setFavorites(
          favs.results.filter((favorite) => {
            return favorite.type === tab.toUpperCase() ? favorite : null;
          })
        );
      } else {
        setFavorites(favs.results);
      }
    },
    [favs.results]
  );

  return (
    <div>
      <Head>
        <title>Favorites</title>
        <meta name="description" content="Favorites" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="Favorites" />
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
                <Tab onClick={() => filterStacks(null)}>
                  <HStack spacing={1}>
                    <HiCollection fontSize="20px" />
                    <Text>All ({favs.total.all})</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => filterStacks("manga")}>
                  <HStack spacing={1}>
                    <HiBookOpen fontSize="20px" />
                    <Text>Manga ({favs.total.manga})</Text>
                  </HStack>
                </Tab>

                <Tab onClick={() => filterStacks("anime")}>
                  <HStack spacing={1}>
                    <HiFilm fontSize="20px" />
                    <Text>Anime ({favs.total.anime})</Text>
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
              {favorites?.map((fav, index) => (
                <Favcard media={fav} key={index} />
              ))}
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
