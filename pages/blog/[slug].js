import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Container, Heading } from "@chakra-ui/react";
import { getAllPostsPaths, getPostData } from "../../lib/airtable";
import MDXComponents from "../../components/MDX";
import Head from "next/head";

export default function Blog({ source, post }) {
  return (
    <div>
      <Head>
        <title>{post.fields.title}</title>
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content={post.fields.title} />
        <meta name="og:description" content={post.fields.summary} />
        <meta name="description" content={post.fields.summary} />
        <meta name="og:image" content={post.fields.thumbnail[0].url} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.md" mt={10}>
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "32px", lg: "36px" }}
          mb={4}
        >
          <MDXRemote {...source} components={MDXComponents} />
        </Heading>
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostsPaths();

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);

  const mdxSource = await serialize(postData.post[0].fields.mdx);

  return {
    props: {
      source: mdxSource,
      post: postData.post[0]
    },
    revalidate: 10,
  };
}
