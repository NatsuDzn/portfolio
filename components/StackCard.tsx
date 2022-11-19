import {
  Box,
  Heading,
  useColorModeValue,
  Tag,
  Stack,
  Link,
  HStack,
  Image,
} from "@chakra-ui/react";

const StackCard = ({ stack }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      href={stack?.fields.url}
      rel="noopener"
      isExternal
    >
      <HStack
        p={4}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius={5}
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
        <Box
          p={2}
          borderColor={useColorModeValue("gray.300", "gray.700")}
          borderRadius="lg"
          borderWidth="1px"
          transition=".5s"
          display="flex"
          mr={2}
        >
          <Image
            boxSize="36px"
            alt={stack?.fields.name}
            src={stack?.fields.image_path}
          />
        </Box>

        <Box ml={4}>
          <Heading as="h2" fontSize="sm">
            {stack?.fields.name}
          </Heading>
          <Stack mt={2} direction="row" spacing="1rem">
            {stack.fields.type.map((type, index) => (
              <Tag key={index} size="sm">
                {type}
              </Tag>
            ))}
          </Stack>
        </Box>
      </HStack>
    </Link>
  );
};

export default StackCard;
