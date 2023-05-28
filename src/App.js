import { useEffect, useState } from "react";
import { Heading, Center } from '@chakra-ui/react';

import Search from './Search';
import Top from './Top';
import Trending from "./Trending";
import Hashtags from "./Hashtags";

function App() {

  const [hashtag, setHashtag] = useState([]);
  const [trending, setTrending] = useState([]);
  const [top, setTop] = useState([]);
  const [search, setSearch] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const fetchTrending = async () => {
    const url = 'https://hashtag5.p.rapidapi.com/api/v2.1/tag/trending';
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
      setTrending(result);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTop = async () => {
    const url = 'https://hashtag5.p.rapidapi.com/api/v2.1/tag/top';
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
      setTop(result);
    } catch (error) {
      console.error(error);
    }
  };

  
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
    } catch (error) {
      console.error(error);
    }
  };

  if (formSubmitted){
    fetchSeacrh();
    setFormSubmitted(false);
  };

  useEffect(()=>{
    fetchTop();
    fetchTrending();
  }, [trending, top, formSubmitted, hashtag]);

  return (
    <Center>
      <div className="App">
          <Heading bg="blue.500" color="white">Hash Tag Finder</Heading>
          <Hashtags hashtag={hashtag} />
          <Search search={search} setSearch={setSearch} setFormSubmitted={setFormSubmitted} />
          <Trending trending={trending} />
          <Top top={top} />
          <footer>Footer</footer>
      </div>
    </Center>
  );
}

export default App;
