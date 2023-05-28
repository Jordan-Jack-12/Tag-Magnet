import { Heading } from '@chakra-ui/react'
import React from 'react'

const Top = ( { top }) => {
  return (
    <>
      {Object.entries(top).map(([key, Array])=>(
        <div key={key}>
          <Heading fontSize={'xl'}>Some Top Tags</Heading>
          <ul>
            {Array.map((item, index)=>(
              <li key={index}>#{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default Top