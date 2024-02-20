import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

const TopHashtagsTable = () => {
    const [topHashTags, setTopHashTags] = useState([]);
    const [error, setError] = useState("");

    const getTopHashTags = async () => {
        const url = 'https://top-instagram-hashtag.p.rapidapi.com/hashtags';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c9199fe501mshe74942524fa8c78p16e6a7jsnae60956a3a9c',
                'X-RapidAPI-Host': 'top-instagram-hashtag.p.rapidapi.com'
            }
        };

        try {
            setError("");
            const tophashtagslocal = JSON.parse(sessionStorage.getItem('tophashtags'));
            if (tophashtagslocal !== null){
                setTopHashTags(tophashtagslocal);
            } else {
                const response = await fetch(url, options);
                const result = await response.json();
                setTopHashTags(result.data.row);
                sessionStorage.setItem('tophashtags', JSON.stringify(result.data.row))
            }
            
        } catch (error) {
            setError("Error")
            console.error(error);
        }
    }

    useEffect(() => {
        getTopHashTags();
    }, [])

    return (
        <>
            <TableContainer>
                <Table size='sm' variant='striped' colorScheme='facebook'>
                    <Thead>
                        <Tr>
                            <Th>HashTag</Th>
                            <Th isNumeric>Post Count</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {topHashTags && topHashTags.map((item) => {
                            return (
                                <Tr key={item.tag}>
                                    <Td>{item.tag}</Td>
                                    <Td isNumeric>{item.total}</Td>
                                </Tr>
                            )
                        })}

                    </Tbody>
                </Table>
            </TableContainer>
            {error && <Text color='tomato'>{error}</Text>}
        </>
    )
}

export default TopHashtagsTable;
