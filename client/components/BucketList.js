import React, { useEffect, useState } from 'react'
import s from 'styled-components'

import BucketListBody from './BucketListBody'

const Wrapper = s.div`
    display: flex;
    flex-flow: column nowrap;
`
const Title = s.h3`
    flex: initial;
    text-align: center;
`

const ListContainer = s.div`
    flex: auto;

    & > ul > li {
        font-weight: bold;
    }

    ul {
        overflow-x: scroll; 
    }
`

const BucketList = () => {
    const [bucketList, setBucketList] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    // GET request to backend for bucket list
    const getBucketList = () => {
        fetch('/bucket-list')
            .then(res => res.json())
            .then(
                result => {
                    setBucketList(result)
                    setIsLoaded(true)
                },
                error => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }

    useEffect(getBucketList, [])



    return (
        <Wrapper>
            <Title>Bucket List</Title>
            <ListContainer>
                <BucketListBody bucketList={bucketList} isLoaded={isLoaded} error={error}/>
            </ListContainer>
        </Wrapper>
    )
}

export default BucketList