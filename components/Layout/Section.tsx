import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});
type Props = {
  children: JSX.Element[] | JSX.Element;
  delay: number;
};

const Section = ({ children, delay = 0 }: Props) => (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: "0.35", delay: delay.toString() }}
      mb={6}
    >
      {children}
    </StyledDiv>
);

export default Section;
