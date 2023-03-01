import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./context/MovieContext";
import { Card, Stack, Image, Text, Heading, CardBody } from "@chakra-ui/react";

const SingelMovie = () => {
  const { movie } = useContext(AppContext);
  console.log("mov", movie);
  const { id } = useParams();
  console.log(id);
  const filterData = movie.filter((movi) => movi.imdbID == id);
  console.log(filterData);

  return (
    <>
      {filterData.map((currElem) => (
        <div
          style={{
            width:"50%",
            margin:"auto",
           
            // display: "flex",
            // justifyContent: "center",
            marginTop: "100px",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          }}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={currElem.Poster}
              alt="Caffe Latte"
            />

            <Stack pl={50} pt={100}>
              <CardBody>
                <Heading mb={4}>Title: {currElem.Title}</Heading>
                <Text fontSize="3xl">Type: {currElem.Type}</Text>
                <Text fontSize="3xl">Year: {currElem.Year}</Text>
              </CardBody>
            </Stack>
          </Card>
        </div>
      ))}
    </>
  );
};

export default SingelMovie;
