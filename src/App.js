import { useEffect, useState } from "react";
import { Heading, Center, Button, FormLabel, Input } from '@chakra-ui/react';

import Hashtags from "./Hashtags";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hashtag, setHashtag] = useState([]);
  const [search, setSearch] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formSubmitted === false){
      const fetchSeacrh = async() =>{
        const url = `https://hashtag5.p.rapidapi.com/api/v2.1/tag/predict?keyword=${search}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'c9199fe501mshe74942524fa8c78p16e6a7jsnae60956a3a9c',
            'X-RapidAPI-Host': 'hashtag5.p.rapidapi.com'
          }
        };
    
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setHashtag(result);
          console.log(result)
        } catch (error) {
          console.error(error);
        }
      };
      fetchSeacrh();
    }
    setFormSubmitted(true);
    setTimeout(()=>{
      setFormSubmitted(false);
    }, 2000);
    console.log(formSubmitted);
  }

  useEffect(()=>{ }, []);

  return (
    <Center>
      <div className="App">
          <Heading bg="blue.500" color="white">Hash Tag Finder</Heading>
          <Hashtags hashtag={hashtag} />
          <form onSubmit={handleSubmit}>
            <FormLabel>Search for hashtags</FormLabel>
            <Input placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
            <Button colorScheme='blue' type="submit">Search</Button>
          </form>
          <footer>Footer</footer>
      </div>
    </Center>
  );
}

export default App;
