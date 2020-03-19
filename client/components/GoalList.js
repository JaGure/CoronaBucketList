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

const ListWrapper = s.div`
    flex: auto;
    
    ul {
        overflow-x: scroll;
        overflow-y: scroll;
    }
`

const ButtonRow = s.div`
    flex: initial;
    display: flex;
    flex-flow: row-reverse nowrap;
`

const buttonColor = '#c9ffeb';
const buttonBackgroundColor = '#cbc4cc';
const AddButton = s.button`
    flex: none;

    background-color: ${buttonBackgroundColor};
    color: ${buttonColor};
    border: 2px solid;
    border-radius: 10px;
    
    padding: 0.75em;
    font-size: 13px;

    &:hover {
        background-color: ${buttonColor};
        color: ${buttonBackgroundColor};
        border-color: ${buttonColor};
    }
`

const GoalList = () => {
    return (
        <Wrapper>
            <Title>Boio's List</Title>
            <ListWrapper>
                <ul>
                    <li>asfasfd</li>
                    <li>afas</li>
                    <li>adsf</li>
                </ul>
            </ListWrapper>
            <ButtonRow>
                <AddButton>Click Me!</AddButton>
            </ButtonRow>
        </Wrapper>
    )
}

export default GoalList