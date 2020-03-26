import React from 'react'
import s from 'styled-components'
import GoalList from './GoalList'
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

// child of the body wrapper. holds the GoalLists
const GoalListRow = s.div`
    flex: initial;
    display: flex;
    flex-flow: row nowrap;
`

const GoalListWrapperCSS = s.div`
    flex: auto;
`
// each wrapper holds a goal list - allows for different sized list blocks
const GoalListWrapper = () => {
    return (
        <GoalListWrapperCSS>
            <GoalList />
        </GoalListWrapperCSS>
    )
}



const GoalContainer = () => {
    return (
        <Wrapper>
            <h2>Goals Accomplished</h2>
            <BodyWrapper>
                <GoalListRow>
                    <GoalListWrapper />
                    <GoalListWrapper />
                </GoalListRow>
                <GoalListRow>
                    <GoalListWrapper />
                </GoalListRow>
            </BodyWrapper>
        </Wrapper>
    )
}

export default GoalContainer