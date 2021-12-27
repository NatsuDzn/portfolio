import {
  Box,
  Heading,
  useColorModeValue,
  Tag,
  Stack,
  Link,
  ScaleFade,
} from "@chakra-ui/react";
import Image from "next/image";

const Stackcard = ({ stack }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      href={stack?.fields.url}
      rel="noopener"
      isExternal
    >
      <ScaleFade in={true} delay={0.2}>
        <Box
          p={4}
          borderColor={useColorModeValue("gray.300", "gray.700")}
          borderRadius={5}
          borderWidth="1px"
          transition=".25s"
          cursor="pointer"
          d="flex"
          alignItems="flex-start"
          role="group"
          _hover={{
            borderColor: useColorModeValue("black", "teal.500"),
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
          >
            <Image
              height={36}
              width={36}
              alt={stack?.fields.name}
              src={stack?.fields.image[0].url}
            />
          </Box>

          <Box ml={4}>
            <Heading as="h2" size="sm">
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
        </Box>
      </ScaleFade>
    </Link>
  );
};

export default Stackcard;
