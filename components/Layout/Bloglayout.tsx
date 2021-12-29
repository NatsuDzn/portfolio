import { Box, Divider, Heading, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Blogauthor from "../Blogauthor";

interface Bloglayout {
  frontMatter: any;
}

const Bloglayout = ({
  children,
  frontMatter,
}: PropsWithChildren<Bloglayout>) => {
  return (
    <div>
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "32px", lg: "36px" }}
          mb={4}
        >
          {frontMatter.title}
        </Heading>

        <Divider my={4} />

        <Blogauthor
          readingTime={frontMatter.readingTime.text}
          publishedAt={frontMatter.publishDate}
          url={"https://nathanael-louzoun.vercel.app/blog/" + frontMatter.slug}
          mb={8}
        />
      </Box>

      {children}
    </div>
  );
};

export default Bloglayout;
