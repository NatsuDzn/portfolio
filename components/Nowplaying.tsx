import useSWR from "swr";
import {
  Box,
  HStack,
  Image,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { usePalette } from "react-palette";
import { SiSpotify } from "react-icons/si";
import { IoHeadset } from "react-icons/io5";
import Section from "./Layout/Section";
import { AnimatePresence } from "framer-motion";

const Nowplaying = () => {
  const { colorMode } = useColorMode();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/spotify", fetcher);

  const palette = usePalette(data?.albumImageUrl).data;

  const borderColor = {
    base: useColorModeValue("gray.300", "gray.700"),
    hover: colorMode !== "light" ? palette.darkVibrant : palette.lightVibrant,
  };

  const paletteColor = {
    background:
      colorMode === "light" ? palette.darkVibrant : palette.lightVibrant,
    text: colorMode === "light" ? palette.lightVibrant : palette.darkVibrant,
  };

  return (
    <AnimatePresence>
      {data?.isPlaying ? (
        <Section delay={0.1}>
          <HStack fontSize="xs" mb={2}>
            <IoHeadset size="14px" />
            <Text>Currently listening to:</Text>
          </HStack>
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
            gap={4}
            px={4}
            py={3}
            bg={paletteColor.background}
            rounded="md"
            outline="4px solid"
            outlineColor="transparent"
            transition=".25s"
            _hover={{ outlineColor: borderColor["hover"], shadow: "lg" }}
            _focus={{ outlineColor: borderColor["hover"] }}
          >
            <Image
              w={16}
              h={16}
              objectFit="cover"
              shadow="md"
              rounded="md"
              src={data?.albumImageUrl}
              alt={data?.album}
            />

            <VStack align="start" gap={0} w="100%">
              <Text
                as="p"
                fontWeight="bold"
                noOfLines={1}
                color={paletteColor.text}
              >
                {data?.title}
              </Text>
              <Text
                as="span"
                fontSize="xs"
                m="0 !important"
                noOfLines={1}
                color={paletteColor.text}
              >
                {data?.artist}
              </Text>
            </VStack>

            <Box position="absolute" bottom={1.5} right={1.5}>
              <SiSpotify size={16} color={paletteColor.text} />
            </Box>
          </Link>
        </Section>
      ) : null}
    </AnimatePresence>
  );
};

export default Nowplaying;
