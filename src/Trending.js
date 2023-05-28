import {Heading} from '@chakra-ui/react'
import React from 'react'

const Trending = ({ trending }) => {
  return (
    <>
      {Object.entries(trending).map(([key, array]) => (
        <div key={key}>
          <Heading fontSize='xl'>Trending Hashtags</Heading>
          <ul>
            {array.map((item, index) => (
              <li key={index}>#{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default Trending