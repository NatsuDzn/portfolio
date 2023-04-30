import {
  AspectRatio,
  Box,
  Heading,
  Image,
  Tag,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Paragraph from "./Paragraph";
import StackList from "./StackList";
import CustomLink from "./Layout/nav/CustomLink";

const ProjectCard = ({ project }) => {
  return (
    <CustomLink
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
            src={project?.fields.thumbnail_url}
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
          <StackList stacks={project.fields.stacks} />
        </Box>
      </VStack>
    </CustomLink>
  );
};

export default ProjectCard;
