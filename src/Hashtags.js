import React from 'react'

const Hashtags = ({ hashtag }) => {
    if (hashtag !== [] && hashtag !== null){
        return (
            <div>
                {Object.entries(hashtag).map(([key, array])=>(
                    <div key={key}>
                        <ul>
                            {array.map((item, index)=>(
                                <li key={index}>#{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
          )
    }else{
        return(
            <div></div>
        )
    }

}

export default Hashtags