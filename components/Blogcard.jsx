import {
  AspectRatio,
  Box,
  Heading,
  Image,
  ScaleFade,
  Tag,
  TagLeftIcon,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Paragraph from "./Paragraph";
import { format } from "timeago.js";
import { FaRegClock } from "react-icons/fa";

const Blogcard = ({ article }) => {
  return (
    <ScaleFade in={true} offsetY={80} delay={0.2}>
      <VStack
        p={4}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius="lg"
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
        <AspectRatio
          ratio={16 / 9}
          w="100%"
          rounded="lg"
          overflow="hidden"
          borderWidth="1px"
          bg={useColorModeValue("gray.300", "gray.700")}
          borderColor={useColorModeValue("gray.300", "gray.700")}
        >
          <Image
            src={article?.fields.thumbnail[0].url}
            objectFit="cover"
            alt={article?.fields.title}
          />
        </AspectRatio>

        <Box ml={4}>
          <Heading as="h1" size="md">
            {article?.fields.title}
          </Heading>
          <Paragraph mt={1} fontSize="sm" noOfLines={1}>
            {article?.fields.summary}
          </Paragraph>
          <Tag mt={2} size="sm">
            <TagLeftIcon boxSize="12px" as={FaRegClock} />
            {format(article?.fields.publishDate)}
          </Tag>
        </Box>
      </VStack>
    </ScaleFade>
  );
};

export default Blogcard;
