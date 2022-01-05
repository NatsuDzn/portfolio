import useSWR from "swr";
import {
  Box,
  Image,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { usePalette } from "react-palette";
import { SiSpotify } from "react-icons/si";

const Nowplaying = () => {
  const { colorMode } = useColorMode()
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/spotify", fetcher);

  const palette = usePalette(data?.albumImageUrl).data;

  const borderColor = {
    base: useColorModeValue("gray.300", "gray.700"),
    hover: colorMode !== "light" ? palette.darkVibrant : palette.lightVibrant,
  };

  const paletteColor = {
    background: colorMode === "light" ? palette.darkVibrant : palette.lightVibrant,
    text: colorMode === "light" ? palette.lightVibrant :  palette.darkVibrant
  }
  

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
        bg={paletteColor.background}
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
            rounded="md"
            src={data?.albumImageUrl}
            alt={data?.album}
          />
        </Box>

        <VStack align="start" gap={0} w="100%">
          <Text as="p" fontWeight="bold" noOfLines={1} color={paletteColor.text}>
            {data.title}
          </Text>
          <Text as="span" fontSize="xs" m="0 !important" noOfLines={1} color={paletteColor.text}>
            {data.artist}
          </Text>
        </VStack>

        <Box position="absolute" bottom={1.5} right={1.5}>
          <SiSpotify size={16} color={paletteColor.text} />
        </Box>
      </Link>
    );
  } else {
    return null;
  }
};

export default Nowplaying;
