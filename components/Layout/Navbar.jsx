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
} from "@chakra-ui/react";
import Link from "./extraNavOptions/Link";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import DropdownMenu from "./extraNavOptions/Menu";
import Logo from "../Logo";
import { useRouter } from "next/router";
import { FaBolt, FaBook, FaBookOpen, FaTools } from "react-icons/fa";

const Links = [
  {
    name: "About",
    route: "/about",
  },
];

const extraLinks = [
    {
    name: "Stacks",
    route: "/stacks",
    icon: <FaBolt />,
  },
  {
    name: "Tools",
    route: "/tools",
    icon: <FaTools />,
  },
  {
    name: "Blog",
    route: "/blog",
    icon: <FaBook />,
  },
    {
    name: "Bookmarks",
    route: "/bookmarks",
    icon: <FaBookOpen />,
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  let router = useRouter();
  let { asPath } = router;

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
      <Box py={[2,5 ]} borderTop="2px" borderTopColor="teal.500" position="sticky" top={0} zIndex={1} backdropFilter="blur(10px)">
        <Container maxW="container.md">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: !isOpen ? "none" : "inherit" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Link href="/" key="Home" p={2} rounded={"md"}>
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
                onClick={toggleColorMode}
                color={colorMode === "light" ? "purple.400" : "yellow.400"}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
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
