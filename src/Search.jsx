import React, { useContext, useState } from "react";
import { AppContext } from "./context/MovieContext";
import { Center, Heading, Input } from "@chakra-ui/react";

const Search = () => {
  let { query, setQuery } = useContext(AppContext);
  console.log(query);
  return (
    <div style={{marginBottom:"25px"}}>
      <Center>
        <Heading as="h2" size="xl">
          List of Movies
        </Heading>
      </Center>
      <Center m>
        <form action="#" onSubmit={(e) => e.preventDefault()} >
          <Input
            type="text"
            size="md"
            placeholder="Search here.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </Center>
    </div>
  );
};

export default Search;
