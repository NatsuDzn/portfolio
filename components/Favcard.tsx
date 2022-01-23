import {
  HStack,
  Image,
  Link,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const Favcard = ({ media }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      href={`https://anilist.co/${media.type.toLowerCase()}/${media.id}`}
      rel="noopener"
      isExternal
      _focus={{
        outline: "none",
      }}
    >
      <HStack
        position="relative"
        p={4}
        h={36}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius="lg"
        borderWidth="1px"
        transition=".25s"
        cursor="pointer"
        d="flex"
        alignItems="flex-start"
        role="group"
        _hover={{
          borderColor: useColorModeValue("black", "green.500"),
          shadow: "lg",
          transform: "translateY(-4px)",
        }}
      >
        <Image
          w="106px"
          h="144px"
          borderRadius="md"
          boxShadow="lg"
          alt={media.title.userPreferred}
          src={media.coverImage.large}
          position="absolute"
          bottom={4}
          objectFit="cover"
        />

        <VStack ml={4} alignItems="start" pl={32} h="100%">
          <Text as="h1" fontSize="md" fontWeight="bold" noOfLines={1}>
            {media.title.userPreferred}
          </Text>
          <Text style={{ margin: "0" }} fontSize="sm" noOfLines={1}>
            {media.staff.nodes[0].name.full}
          </Text>
          <Tag size="sm">{media.startDate.year}</Tag>
        </VStack>
      </HStack>
    </Link>
  );
};

export default Favcard;
