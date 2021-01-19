import React from 'react';
import {Input} from "@chakra-ui/react"
import Pop from "./pop/pop"
const SearchBar = () => {
  const search = <Input variant="filled" width="100%" placeholder="large size" size="lg" />;
  
  return <Pop bar={search} popBar={search}></Pop>
}

export default SearchBar