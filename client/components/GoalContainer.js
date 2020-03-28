import React, { useEffect, useState } from 'react'
import s from 'styled-components'
import GoalContainerBody from './GoalContainerBody'
import { GOAL_CONTAINER_BACKGROUND } from './constants'

const Wrapper = s.div`
    background-color: ${GOAL_CONTAINER_BACKGROUND};
    border: 1px solid ${GOAL_CONTAINER_BACKGROUND};
    border-radius: 20px;
    
    padding: 4px;

    h2 {
        text-align: center;
    }
`

// wraps the body of the container (its only children will be rows)
const BodyWrapper = s.div`
    display: flex;
    flex-flow: column nowrap;
`

const GoalContainer = () => {
    const [goalLists, setGoalLists] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    // GET request to backend for goal lists
    const getGoalLists = () => {
        fetch('/goal-lists')
            .then(res => res.json())
            .then(
                result => {
                    setGoalLists(result)
                    setIsLoaded(true)
                },
                error => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }

    useEffect(getGoalLists, [])

    return (
        <Wrapper>
            <h2>Goals Accomplished</h2>
            <BodyWrapper>
                <GoalContainerBody goalLists={goalLists} isLoaded={isLoaded} error={error}/>
            </BodyWrapper>
        </Wrapper>
    )
}

export default GoalContainer