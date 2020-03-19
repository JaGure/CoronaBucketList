import React from 'react'
import s from 'styled-components'
import { GOAL_LIST_BUTTON_COLOR, GOAL_LIST_BUTTON_BACKGROUND_COLOR } from './constants'

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

const AddButton = s.button`
    flex: none;

    background-color: ${GOAL_LIST_BUTTON_BACKGROUND_COLOR};
    color: ${GOAL_LIST_BUTTON_COLOR};
    border: 2px solid;
    border-radius: 10px;
    
    padding: 0.75em;
    font-size: 13px;

    &:hover {
        background-color: ${GOAL_LIST_BUTTON_COLOR};
        color: ${GOAL_LIST_BUTTON_BACKGROUND_COLOR};
        border-color: ${GOAL_LIST_BUTTON_COLOR};
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