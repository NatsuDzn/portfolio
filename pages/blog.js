import Head from "next/head";
import { Box, Container, Grid, Heading, SlideFade } from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import { getTable } from "../lib/airtable";
import Blogcard from "../components/Blogcard";
import sorter from "sort-isostring";

const Blog = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Blog | Nathanael Louzoun</title>
        <meta name="description" content="Blog | Nathanael Louzoun" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="Blog | Nathanael Louzoun" />
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
                Blog
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                Blog list
              </Paragraph>
            </Box>
          </SlideFade>

          {!articles.length && "No article found."}
          <Grid
            mt={10}
            alignItems="center"
            templateColumns={["repeat(2, 1fr)"]}
            gap={5}
          >
            {articles
              .filter((article) => article.fields.status === "Published")
              .sort((x, y) =>
                sorter(y.fields.publishDate, x.fields.publishDate)
              )
              .map((article) => {
                return (
                  <Blogcard article={article} key={article.id} />
                );
              })}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const articles = await getTable("Blog");

  return {
    props: {
      articles,
    },
    revalidate: 10,
  };
}

export default Blog;
