import {
  Center,
  Divider,
  Grid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ExpCard from "../ExpCard";
import { Fragment } from "react";

const Experiences = ({ experiences }) => {
  const borderColor = useColorModeValue("gray.300", "gray.700");
  
  return (
    <>
      <Text as="h1" fontSize="custom" fontWeight="bold">
        I’ve worked with
      </Text>
      <Grid mt={4} templateColumns={["1fr"]}>
        {experiences.map((experience, index) => (
          <Fragment key={experience.id}>
            {index !== 0 && (
              <Center>
                <Divider
                  orientation="vertical"
                  height="1.5rem"
                  borderColor={borderColor}
                  transition=".25s"
                />
              </Center>
            )}
            <ExpCard exp={experience.fields} key={experience.id} />
          </Fragment>
        ))}
      </Grid>
    </>
  );
};

export default Experiences;
