import {
  AspectRatio,
  Box,
  Heading,
  Tag,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Paragraph from "./Paragraph";
import Image from "next/image";
import Stacklist from "./Stacklist";
import Link from "./Layout/nav/Link";

const Projectcard = ({ project }) => {
  return (
    <Link
      href={
        project?.fields.link ? project?.fields.link : project?.fields.github
      }
      currentPath={null}
      isExternal
    >
      <VStack
        p={4}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius="lg"
        borderWidth="1px"
        transition=".25s"
        cursor="pointer"
        alignItems="flex-start"
        role="group"
        _hover={{
          borderColor: useColorModeValue("black", "green.500"),
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
          position="relative"
        >
          <Image
            alt={project?.fields.title}
            src={project?.fields.thumbnail[0].url}
            layout="fill"
            objectFit="cover"
          />
        </AspectRatio>

        <Box>
          <Heading as="h1" size="md" noOfLines={1}>
            {project?.fields.title}
          </Heading>
          <Paragraph mt={1} fontSize="sm" noOfLines={2}>
            {project?.fields.summary}
          </Paragraph>
          <Tag mt={2} size="sm">
            {new Date(project.fields.year).getFullYear()}
          </Tag>
          <Stacklist stacks={project.fields.stacks} />
        </Box>
      </VStack>
    </Link>
  );
};

export default Projectcard;
