import React from 'react'
import s from 'styled-components'

const TitleText = s.h1`
    text-align: center;
    margin: 0 auto;
`

const Title = () => {
    return (
        <TitleText>The Corona Bucket List</TitleText>
    )
}

export default Title