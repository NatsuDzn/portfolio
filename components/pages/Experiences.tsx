import { Grid, Text } from "@chakra-ui/react";
import ExpCard from "../Expcard";

const Experiences = ({ experiences }) => {
  return (
    <>
      <Text as="h1" fontSize="custom" fontWeight="bold">
        I’ve worked with
      </Text>
      <Grid mt={4} templateColumns={["1fr"]} gap={5}>
        {experiences.map((experience) => (
          <ExpCard exp={experience.fields} key={experience.id} />
        ))}
      </Grid>
    </>
  );
};

export default Experiences;
