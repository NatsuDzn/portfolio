import useSWR from "swr";
import {
  Box,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { SiSpotify } from "react-icons/si";

const Nowplaying = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  const borderColor = {
    base: useColorModeValue("gray.300", "gray.700"),
    hover: useColorModeValue("black", "teal.500"),
  };

  if (data?.isPlaying) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        href={
          data?.isPlaying
            ? data.songUrl
            : "https://open.spotify.com/user/natsuxgraph"
        }
        rel="noopener"
        isExternal
        w={72}
        position="relative"
        display="flex"
        alignItems="center"
        px={4}
        py={3}
        mx={4}
        rounded="md"
        borderWidth="1px"
        borderColor={borderColor.base}
        transition=".25s"
        _hover={{ borderColor: borderColor["hover"], shadow: "lg" }}
        _focus={{
          outline: "none",
        }}
      >
        <Box w={32}>
          <Image
            width={16}
            shadow="md"
            src={data?.albumImageUrl}
            alt={data?.album}
          />
        </Box>

        <VStack align="start" gap={0} w="100%">
          <Text as="p" fontWeight="bold" noOfLines={1}>
            {data.title}
          </Text>
          <Text as="span" fontSize="xs" m="0 !important" noOfLines={1}>
            {data.artist}
          </Text>
        </VStack>

        <Box position="absolute" bottom={1.5} right={1.5}>
          <SiSpotify size={20} color={"#1ED760"} />
        </Box>
      </Link>
    );
  } else {
    return null;
  }
};

export default Nowplaying;
