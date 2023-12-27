import React from 'react'
import { useState } from "react";
import { Button, FormLabel, Input } from '@chakra-ui/react';
import { CircularProgress } from '@chakra-ui/react'

import Hashtags from "../components/Hashtags";
import AdBlock from '../components/AdBlock';

const HomePage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [noData, setNoData] = useState(false)
    const [hashtag, setHashtag] = useState([]);
    const [search, setSearch] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value)
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
        <div>
            <div style={{ padding: '10px', marginLeft: '20vw', marginRight: '20vw' }}>
                <form onSubmit={handleSubmit}>
                    <FormLabel>Search for hashtags</FormLabel>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        <Input placeholder='Search' value={search} onChange={handleChange} />
                        <Button bg={'#1895D9'} type="submit" color={'white'}>Search</Button>
                    </div>
                </form>
            </div>
            <div style={{ padding: '10px', marginLeft: '20vw', marginRight: '20vw', minHeight: '74vh' }}>
                {hashtag.length > 0 ? 
                <Hashtags hashtag={hashtag} />
                :
                <><h1>{error && !loading && !noData && <>{error}</>}</h1> <h1>{!error && !loading && noData && <>No result Found </>}</h1> <h1>{!error && loading && !noData && <CircularProgress isIndeterminate color='blue.300' />}</h1></>
            }
            </div>
            <AdBlock/>
        </div>
    )
}

export default HomePage
