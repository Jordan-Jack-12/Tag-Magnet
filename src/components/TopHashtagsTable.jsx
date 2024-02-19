import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

const TopHashtagsTable = () => {
    const [topHashTags, setTopHashTags] = useState([]);

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
                        {topHashTags.map((item) => {
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
        </>
    )
}

export default TopHashtagsTable;
