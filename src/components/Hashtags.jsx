import { Heading } from '@chakra-ui/react'
import React from 'react'

const Hashtags = ({ hashtag }) => {
    return (
        <div style={{ padding: '10px', borderRadius: '10px', background: '#fff', margin: '10px' }}>
                {(hashtag.length !== 0)
                        ? <ul style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }} >
                            {hashtag.map((item, index) => (
                                <li key={index} style={{ listStyle: 'none' }}>#{item}</li>
                            ))}
                        </ul>
                        : <Heading padding={'28'}>Result not found &#128532;</Heading>
                    }
        </div>
    )

}

export default Hashtags
