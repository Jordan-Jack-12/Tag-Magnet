import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'

const AdBlock = () => {
    const [affLinks, setAffLinks] = useState([])

    const getAffLinks = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/aff', {
                method: 'GET',
                headers: {
                    'x-api-key' : 'jobKjlaO1CQXDx1RWyPr51vcOYgBP0AZ3ib9T0vTszZJSeJmURQfPirMczXpHtxH',
                }
            })
            if (!res.ok) {
                throw new Error("something wen wrong")
            }

            const data = await res.json()
            setAffLinks(data)

        } catch (error) {
            throw new Error("feetch failed")
        }
    }

    useEffect(() => {
        getAffLinks();
    }, [])

    return (
        <div>
            <Text fontSize='xl'>Ads and Affiliates</Text>
            <div style={{display: 'flex', marginLeft: '20vw', marginRight: '20vw', gap: '10px'}}>
                {affLinks.length > 0 ?
                    affLinks.map((item, index) => { 
                        return (
                            <div key={index} dangerouslySetInnerHTML={{__html: item.link}}/> 
                        )
                    }) : <h1 style={{ fontSize: '48px' }}>No Ads</h1>   
            }
            </div>
        </div>
    )
}

export default AdBlock