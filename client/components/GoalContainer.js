import React from 'react'
import s from 'styled-components'
import GoalList from './GoalList'

const Wrapper = s.div`
    background-color: #f0efeb;
    border: 1px solid #f0efeb;
    border-radius: 20px;
    
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
    flex: 1 1 auto;
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
            <h2>Goals</h2>
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