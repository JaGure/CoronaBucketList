import React from 'react'
import s from 'styled-components'

const Wrapper = s.div`
    background-color: #f0efeb;
    border: 1px solid #f0efeb;
    border-radius: 20px;
    
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