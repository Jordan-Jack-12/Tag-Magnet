import { Heading, VStack, Button } from '@chakra-ui/react';
import {HStack, Tag } from '@chakra-ui/react'
import { useState } from 'react';

const Hashtags = ({ hashtag, hashtagForCopy }) => {
    const [hasCopied, setHasCopied] = useState(false);
    const onCopy = async (e) => {
        e.preventDefault();
            await navigator.clipboard.writeText(hashtagForCopy);
            console.log(hashtagForCopy)
            setHasCopied(true);
    }


    return (
        <div style={{ padding: '10px', borderRadius: '10px', background: '#fff', margin: '10px' }}>
            {(hashtag.length !== 0)
                ? <VStack >
                    <HStack wrap={'wrap'}>
                        {
                            hashtag.map((item) => {
                                return (<Tag key={item}>#{item}</Tag>)
                            })
                        }
                    </HStack>
                    <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
                </VStack>
                : <Heading padding={'28'}>Result not found &#128532;</Heading>
            }
        </div>
    )

}

export default Hashtags


/* */
