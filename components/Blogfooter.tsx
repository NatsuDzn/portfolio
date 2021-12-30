import { EmailIcon } from "@chakra-ui/icons";
import {
  Divider,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Blogfooter = ({ url, ...props }) => {
  const shares = [
    {
      name: "Twitter",
      brandBackground: "#1DA1F2",
      icon: <FaTwitter />,
      url: "https://twitter.com/intent/tweet?url=" + url,
    },
    {
      name: "Facebook",
      brandBackground: "#4267B2",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/sharer.php?u=" + url,
    },
    {
      name: "Linkedin",
      brandBackground: "#2867B2",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/sharing/share-offsite/?url=" + url,
    },
    {
      name: "Email",
      icon: <EmailIcon />,
      brandBackground: "gray.600",
      url: "mailto:?body=" + url,
    },
  ];

  return (
    <>
      <Divider {...props} />

      <Stack direction="row" display="flex" justifyContent="flex-end" mt={4}>
        <HStack>
          <Text fontSize="xs">Share:</Text>
          {shares.map((share, index) => (
            <Tooltip
              key={index}
              label={share.name ? "Share via " + share.name : null}
              placement="top"
            >
              <Link href={share.url} isExternal>
                <IconButton
                  aria-label="Share this post"
                  variant="solid"
                  color="white"
                  _hover={{
                    color: null,
                  }}
                  background={share.brandBackground}
                  size="sm"
                  icon={share.icon}
                ></IconButton>
              </Link>
            </Tooltip>
          ))}
        </HStack>
      </Stack>
    </>
  );
};

export default Blogfooter;
