import { Box, Divider, Heading, ScaleFade } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Blogauthor from "../Blogauthor";
import Blogfooter from "../Blogfooter";

interface Bloglayout {
  frontMatter: any;
}

const Bloglayout = ({
  children,
  frontMatter,
}: PropsWithChildren<Bloglayout>) => {
  return (
    <div>
      <ScaleFade in={true}>
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
            url={
              "https://nathanael-louzoun.vercel.app/blog/" + frontMatter.slug
            }
            mb={8}
          />
        </Box>
      </ScaleFade>

      <ScaleFade in={true} delay={0.2}>
        {children}
      </ScaleFade>

      <ScaleFade in={true} delay={0.4}>
        <Blogfooter
          url={"https://nathanael-louzoun.vercel.app/blog/" + frontMatter.slug}
          mt={8}
        />
      </ScaleFade>
    </div>
  );
};

export default Bloglayout;
