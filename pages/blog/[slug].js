import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Container, Heading } from "@chakra-ui/react";
import { getAllPostsPaths, getPostData } from "../../lib/airtable";
import MDXComponents from "../../components/MDX";

export default function Blog({source}) {
  
  return (
    <Container maxW="container.md" mt={10}>
      <Heading
        as="h1"
        fontSize={{ base: "28px", md: "32px", lg: "36px" }}
        mb={4}
      >
        <MDXRemote {...source} components={MDXComponents} />
      </Heading>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostsPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);

  const mdxSource = await serialize(postData.post[0].fields.mdx);

  return {
    props: {
      source: mdxSource,
    },
    revalidate: 30,
  };
}
