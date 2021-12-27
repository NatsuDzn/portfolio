import NextLink from "next/link";
import { Link as ChakraLink, LinkProps, useColorModeValue } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface CustomLinkProps extends LinkProps {
  href: string;
  currentPath: string;
}

const Link = ({ children, href, currentPath, ...props }: PropsWithChildren<CustomLinkProps>) => (
  <NextLink href={href} passHref>
    <ChakraLink
      bg={href === currentPath && useColorModeValue("gray.100", "gray.700")}
      _hover={{
        textDecoration: "none",
      }}
      {...props}
    >
      {children}
    </ChakraLink>
  </NextLink>
);

export default Link;