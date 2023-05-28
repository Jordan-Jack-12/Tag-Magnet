import { Button, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const Search = ({ search, setSearch, setFormSubmitted }) => {
  return (
    <form onSubmit={(e) => {e.preventDefault(); setFormSubmitted(true)}}>
        <FormLabel>Search for hashtags</FormLabel>
        <Input placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button colorScheme='blue'>Search</Button>
    </form>
  )
}

export default Search