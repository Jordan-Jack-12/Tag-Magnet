import React from 'react'
import { useState } from "react";
import { Button, FormLabel, Input, Heading } from '@chakra-ui/react';
import { CircularProgress, Divider } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react';
import { Container, Box } from '@chakra-ui/react';

import Hashtags from "../components/Hashtags";
import TopHashtagsTable from '../components/TopHashtagsTable';

const HomePage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [noData, setNoData] = useState(false)
    const [hashtag, setHashtag] = useState([]);
    const [hashtagForCopy, setHashtagForCopy] = useState("");
    const [search, setSearch] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value)
    }

    const formatHashTags = async (hashtag) => {
        for (let i = 0; i < hashtag.length; i++){
            setHashtagForCopy((prev) => prev += `#${hashtag[i]} `);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setHashtag([])
        setLoading(true)
        setNoData(false)
        setError("")
        if (formSubmitted === false) {
            const fetchSeacrh = async () => {
                const formattedSearch = search.replace(/\s+/g, '')
                const url = `https://hashtag5.p.rapidapi.com/api/v2.1/tag/predict?keyword=${formattedSearch}`;
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
                    if (result.tags.length > 0) {
                        setHashtag(result.tags);
                        formatHashTags(result.tags);
                    } else {
                        setNoData(true)
                    }
                    setLoading(false)
                } catch (error) {
                    setLoading(false)
                    setError("Unable to Fetch Data! ")
                }
            };
            fetchSeacrh();
        }
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
        }, 2000);
    }


    return (
        <VStack>
            <Container maxW={'4xl'}>
                <VStack>
                    <Container maxW={'4xl'}>
                        <form onSubmit={handleSubmit}>
                            <FormLabel textAlign={'center'}>Search for hashtags</FormLabel>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                <Input placeholder='Search' value={search} onChange={handleChange} focusBorderColor='pink.400'/>
                                <Button colorScheme='purple' type="submit">Search</Button>
                            </div>
                        </form>
                    </Container>
                    <Container maxW={'4xl'}>
                        {hashtag.length > 0 ?
                            <Hashtags hashtag={hashtag} hashtagForCopy={hashtagForCopy}/>
                            :
                            <><h1>{error && !loading && !noData && <>{error}</>}</h1> <h1>{!error && !loading && noData && <Box minH={'50px'}>No result Found </Box>}</h1> <h1>{!error && loading && !noData && <CircularProgress isIndeterminate color='pink.500' />}</h1></>
                        }
                    </Container>
                </VStack>
            <Divider />
            </Container>
            <Container maxW={'4xl'} marginBottom={'40px'}>
                <Heading size={'md'} p={'10px'}>Top Hashtags</Heading>
                <Divider />
                <TopHashtagsTable />
            </Container>
        </VStack>
    )
}

export default HomePage
