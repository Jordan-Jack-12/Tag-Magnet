import { Heading } from '@chakra-ui/react'
import React from 'react'

const Hashtags = ({ hashtag }) => {
    if (hashtag.length > 0){
        console.log("yess data", hashtag)
        return (
            <div style={{padding : '10px', borderRadius: '10px', background : '#fff', margin: '10px'}}>
                {Object.entries(hashtag).map(([key, array])=>(
                    <div key={key} >
                        {(array.length !== 0) 
                        ? <ul style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px'}} >
                        {array.map((item, index)=>(
                            <li key={index} style={{listStyle: 'none'}}>#{item}</li>
                        ))}
                        </ul>
                        : <Heading padding={'28'}>Result not found :(</Heading>
                        }
                        
                    </div>
                ))}
            </div>
        )
    }else{
        console.log("not data")
        return <div style={{display: 'none'}}></div>
    }

}

export default Hashtags