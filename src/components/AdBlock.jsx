import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'

const AdBlock = () => {
    const [affLinks, setAffLinks] = useState([])

    const getAffLinks = async () => {
        try {
            const res = await fetch('https://api-web-crave.cyclic.app/api/aff', {
                method: 'GET',
                headers: {
                    'x-api-key': 'jobKjlaO1CQXDx1RWyPr51vcOYgBP0AZ3ib9T0vTszZJSeJmURQfPirMczXpHtxH',
                }
            })
            if (!res.ok) {
                return
            }

            const data = await res.json()
            setAffLinks(data)

        } catch (error) {
            return
        }
    }

    useEffect(() => {
        getAffLinks();
    }, [])

    if (affLinks.length > 0) {
        return (
            <div>
                <Text fontSize='xl'>Ads and Affiliates</Text>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {
                        affLinks.map((item, index) => {
                            return (
                                <div key={index} dangerouslySetInnerHTML={{ __html: item.link }} />
                            )
                        })
                    }
                </div>
            </div>
        )
    } else {
        return <></>
    }

}

export default AdBlock