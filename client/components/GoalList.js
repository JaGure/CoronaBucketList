import React, { useEffect, useState } from 'react'
import s from 'styled-components'
import { GOAL_LIST_FORM_COLOR, 
    GOAL_LIST_FORM_BACKGROUND_COLOR, 
    GOAL_LIST_BUTTON_HOVER_COLOR } from './constants'

const Wrapper = s.div`
    flex: auto;
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

const GoalList = props => {
    const { name, list } = props
    const [goalList, setGoalList] = useState(list)
    const [inputText, setInputText] = useState('')

    const addItemToList = e => {
        e.preventDefault()

        // adds to the component's list, for re-rendering
        setGoalList(goalList.concat([inputText]))
        setInputText('')

        // updates on the list on the backend
        const request = new Request('/.netlify/functions/server/goal-lists', {
            method: 'POST', 
            body: JSON.stringify({listOwner: name, goalToAdd: inputText}),
            headers: { "Content-Type": "application/json" }
        })

        fetch(request)
    }

    return (
        <Wrapper>
            <Title>{name}'s List</Title>
            <ListWrapper>
                <ul>
                    {goalList.map(item => <li>{item}</li>)}
                </ul>
            </ListWrapper>
            <InputForm onSubmit={e => addItemToList(e)}>
                <NewGoalText value={inputText} onChange={e => setInputText(e.target.value)} type="text" placeholder="Goal Name..." />
                <AddButton type="submit" text="Click Me!" />
            </InputForm>
        </Wrapper>
    )
}

export default GoalList