import React from 'react'
import { useState } from "react";
import { Button, FormLabel, Input } from '@chakra-ui/react';

import Hashtags from "../components/Hashtags";

const HomePage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [hashtag, setHashtag] = useState([]);
    const [search, setSearch] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formSubmitted === false) {
            const fetchSeacrh = async () => {
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
                        <Input placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
                        <Button bg={'#1895D9'} type="submit" color={'white'}>Search</Button>
                    </div>
                </form>
            </div>
            {hashtag &&
                <div style={{ padding: '10px', marginLeft: '20vw', marginRight: '20vw', minHeight: '70vh' }}>
                    <Hashtags hashtag={hashtag} />
                </div>}
        </div>
    )
}

export default HomePage