import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { Heading, Button, FormLabel, Input } from '@chakra-ui/react';

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
  }

  useEffect(()=>{ }, []);

  return (
    <div className="App" style={{textAlign: 'center', height: '100vh', background: '#F2F8FF'}}>
      <Helmet>
        <meta property="og:title" content="TagMagnet - Discover Trending Hashtags" />
        <meta property="og:description" content="Find the most popular hashtags for your Instagram posts with TagMagnet. Boost your reach and engagement with trending tags." />
      </Helmet>
      <Heading bg="linear-gradient(90deg, rgba(76,173,239,1) 0%, rgba(8,124,172,1) 50%, rgba(76,173,239,1) 100%)" color="white" padding={'4'}>Tag Magnet</Heading>
      <div style={{display: 'flex', flexDirection: 'column', padding : '10px'}}>
        <form onSubmit={handleSubmit}>
          <FormLabel>Search for hashtags</FormLabel>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <Input placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
          <Button bg={'#1895D9'} type="submit" color={'white'}>Search</Button>
          </div>
        </form>
        <Hashtags hashtag={hashtag} />
      </div>
    </div>
  );
}

export default App;
