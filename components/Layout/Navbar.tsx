import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  Button,
  useDisclosure,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "./nav/Link";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import DropdownMenu from "./nav/Menu";
import Logo from "../Logo";
import { useRouter } from "next/router";
import {
  HiBeaker,
  HiBookOpen,
  HiChartSquareBar,
  HiLightningBolt,
  HiStar,
} from "react-icons/hi";
import useSound from "use-sound";
import { useCallback } from "react";

const Links = [
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Projects",
    route: "/projects",
  },
];

const extraLinks = [
  {
    name: "Stacks",
    route: "/stacks",
    icon: <HiLightningBolt />,
  },
  {
    name: "Tools",
    route: "/tools",
    icon: <HiBeaker />,
  },
  // {
  //   name: "Blog",
  //   route: "/blog",
  //   icon: <HiBookOpen />,
  // },
  // {
  //   name: "Favorites",
  //   route: "/favorites",
  //   icon: <HiStar />,
  // },
  {
    name: "Stats",
    route: "/stats",
    icon: <HiChartSquareBar />,
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  let router = useRouter();
  let { asPath } = router;

  const [play] = useSound("/assets/audios/lightswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 100],
    },
  });

  const switchTheme = useCallback(() => {
    toggleColorMode();
    play({ id: "on" });
  }, [toggleColorMode, play]);

  const navigationItem = (
    <>
      {Links.map((link) => (
        <Link
          href={link.route}
          key={link.name}
          p={2}
          rounded={"md"}
          currentPath={asPath}
        >
          {link.name}
        </Link>
      ))}
      <DropdownMenu currentPath={asPath} extraLinks={extraLinks} />
    </>
  );

  return (
    <>
      <Box
        as="nav"
        py={2}
        borderTop="2px"
        borderTopColor={useColorModeValue("black", "green.500")}
        bg={useColorModeValue("#FFFFFF40", "#0E111780")}
        css={{ backdropFilter: "blur(10px)" }}
        position="sticky"
        top={0}
        zIndex={1}
        filter="auto"
      >
        <Container maxW="container.md">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon boxSize="12px" /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: !isOpen ? "none" : "inherit" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Link
                href="/"
                key="Home"
                p={2}
                rounded={"md"}
                currentPath={asPath}
              >
                <Box>
                  <Logo />
                </Box>
              </Link>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {navigationItem}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Button
                aria-label="Switch Theme"
                onClick={() => switchTheme()}
                color={useColorModeValue("purple.400", "yellow.400")}
              >
                {useColorModeValue(<MoonIcon />, <SunIcon />)}
              </Button>
            </Flex>
          </Flex>
          {isOpen ? (
            <Box pb={4} mt={3}>
              <Stack as={"nav"} spacing={4}>
                {navigationItem}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
