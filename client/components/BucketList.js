import React from 'react'
import s from 'styled-components'

const Title = s.h3`
    text-align: center;
    width: 100%;
`

const ListContainer = s.div`

`

const BucketList = () => {
    return (
        <>
            <Title>Bucket List</Title>
            <ListContainer>
                <ul>
                    <li>PP</li>
                    <li>PP</li>
                    <li>pppppppp</li>
                </ul>
            </ListContainer>
        </>
    )
}

export default BucketList