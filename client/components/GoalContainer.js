import React from 'react'
import s from 'styled-components'

const Wrapper = s.div`
    border: 1px solid black;
    
    h2 {
        text-align: center;
    }
`

const GoalContainer = () => {
    return (
        <Wrapper>
            <h2>Goals</h2>
        </Wrapper>
    )
}

export default GoalContainer