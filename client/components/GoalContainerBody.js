import React from 'React'
import s from 'styled-components'
import GoalList from './GoalList'

// holds several GoalLists
const GoalListRow = s.div`
    flex: initial;
    display: flex;
    flex-flow: row nowrap;
`

const GoalListWrapperCSS = s.div`
    flex: auto;
    display: flex;
`

// each wrapper holds a goal list - allows for different sized list blocks
const GoalListWrapper = props => {
    return (
        <GoalListWrapperCSS>
            <GoalList name={props.name} list={props.list}/>
        </GoalListWrapperCSS>
    )
}

const GoalContainerBody = props => {
    if (props.error) {
        return (
            <div>Error: {error.message}</div>
        )
    } else if (!props.isLoaded) {
        return (
            <div>Loading...</div>
        )
    } else {
        const { goalLists } = props
        const numRows = Math.ceil(Math.sqrt(goalLists.length))
        const itemsPerRow = Math.ceil(goalLists.length / numRows)

        // build the body - number and size of rows depends on number of goal lists
        let body = []
        let pointer = 0

        for (let i = 0; i < numRows; i++) {
            let row = []

            for (let j = 0; j < itemsPerRow && pointer < goalLists.length; j++) {
                const currentList = goalLists[pointer]
                row.push(<GoalListWrapper name={currentList.listOwner} list={currentList.elements}/>)
                pointer += 1
            }

            body.push(
                <GoalListRow>
                    {row}
                </GoalListRow>
            )
        }

        return (
            <>
                {body}
            </>
        )
    }
}

export default GoalContainerBody