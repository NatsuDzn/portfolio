import {
  Avatar,
  Flex,
  IconButton,
  Text,
  Tooltip,
  useClipboard,
  VStack,
} from "@chakra-ui/react";
import { FaCheck, FaLink } from "react-icons/fa";
import { format } from "timeago.js";

const BlogAuthor = ({ readingTime, publishedAt, url, ...props }) => {
  const { hasCopied, onCopy } = useClipboard(url);

  return (
    <Flex direction="row" justify="space-between" {...props}>
      <Flex alignItems="center">
        <Avatar
          name="Nathanael Louzoun"
          src="/assets/images/me.jpg"
          h={10}
          w={10}
        ></Avatar>
        <VStack spacing={0} align="start">
          <Text fontSize="md" fontWeight="medium">
            Nathanael Louzoun
          </Text>
          <Text fontSize="xs" fontWeight="normal">
            {format(publishedAt)} / {readingTime}
          </Text>
        </VStack>
      </Flex>
      <Tooltip label={hasCopied ? "Copied !" : "Copy link"} placement="top">
        <IconButton
          onClick={onCopy}
          aria-label="Copy link"
          ml={2}
          variant="outline"
          size="sm"
          color={hasCopied ? "green.400" : null}
          icon={hasCopied ? <FaCheck /> : <FaLink />}
        ></IconButton>
      </Tooltip>
    </Flex>
  );
};

export default BlogAuthor;
