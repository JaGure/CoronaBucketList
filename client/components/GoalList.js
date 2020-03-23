import React from 'react'
import s from 'styled-components'
import { GOAL_LIST_FORM_COLOR, 
    GOAL_LIST_FORM_BACKGROUND_COLOR, 
    GOAL_LIST_BUTTON_HOVER_COLOR,
    GOAL_LIST_TEXT_BORDER_COLOR } from './constants'

const Wrapper = s.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 1px;
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

const InputForm = s.form`
    flex: initial;
    display: flex;
    flex-flow: row nowrap;
`

const AddButton = s.input`
    flex: none;

    background-color: ${GOAL_LIST_FORM_BACKGROUND_COLOR};
    color: ${GOAL_LIST_FORM_COLOR};
    border: 2px solid ${GOAL_LIST_FORM_BACKGROUND_COLOR};
    
    padding: 0.6em;
    font-size: 13px;
    margin-left: 2px;
    margin-right: 2px;

    &:hover {
        background-color: ${GOAL_LIST_BUTTON_HOVER_COLOR};
        border-color: ${GOAL_LIST_BUTTON_HOVER_COLOR};
    }
`

const NewGoalText = s.input`
    flex: auto;

    background-color: ${GOAL_LIST_FORM_BACKGROUND_COLOR};
    color: ${GOAL_LIST_FORM_COLOR};
    border: none;
    ::placeholder {
        color: ${GOAL_LIST_FORM_COLOR};
    }

    margin-left: 2px;
    padding-left: 3px;
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
            <InputForm onSubmit={e => e.preventDefault()}>
                <NewGoalText onChange={e => console.log(e.target.value)} type="text" placeholder="Name..." />
                <AddButton type="submit" text="Click Me!" />
            </InputForm>
        </Wrapper>
    )
}

export default GoalList