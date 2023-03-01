import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/MovieContext";
import {
  Card,
  Center,
  Stack,
  Heading,
  Image,
  CardBody,
  Grid,
} from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";

const Movies = () => {
  const data = useContext(AppContext);
  console.log("da", data);
  const { movie, isLoading, isError } = data;

  return (
    <>

      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {movie.map((currElem) => (
          <NavLink to={`movie/${currElem.imdbID}`} key={currElem.imdbID}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={currElem.Poster}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  w={300}
                />
                <Stack mt="6">
                  <Heading size="md">{currElem.Title}</Heading>
                </Stack>
              </CardBody>
            </Card>
          </NavLink>
        ))}
      </Grid>
    </>
  );
};

export default Movies;
