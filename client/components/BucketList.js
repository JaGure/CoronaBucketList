import React from 'react'
import s from 'styled-components'

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
`

const BucketList = () => {
    return (
        <Wrapper>
            <Title>Bucket List</Title>
            <ListContainer>
                <ul>
                    <li>PP</li>
                    <li>PP</li>
                    <li>pppppppp</li>
                </ul>
            </ListContainer>
        </Wrapper>
    )
}

export default BucketList