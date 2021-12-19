import Card from "../Card";
import { Heading, SlideFade, Grid } from "@chakra-ui/react";
import {
  FaRobot,
  FaMicrochip,
} from "react-icons/fa";

const companies = [
  {
    name: "DessIA (10/19 -> now)",
    description:
      "Bot platform based on an Explainable AI to automate engineers tasks.",
    icon: <FaRobot fontSize="20px" />,
    url: "https://dessia.tech/",
  },
  {
    name: "ThingType (Summer 2019)",
    description: "Automatic conception of electronic board.",
    icon: <FaMicrochip fontSize="20px" />,
    url: "https://www.linkedin.com/company/thingtype/about/",
  },
];

const Company = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        I’ve worked with
      </Heading>
      <Grid mt={10} templateColumns={["1fr"]} gap={5}>
        {companies.map((company) => (
          <Card company={company} key={company?.name} />
        ))}
      </Grid>
    </SlideFade>
  );
};

export default Company;
