import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

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
                <div style={{ display: 'grid', gridTemplateColumns: 'auto', gap: '10px' }}>
                    {
                        affLinks.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='ad-block' >
                                          <Link to={item.link}>
                                              <img src={item.image_url} alt={item.name}/>
                                              <p>{item.name}</p>
                                          </Link>
                                    </div>  
                                </div>
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
