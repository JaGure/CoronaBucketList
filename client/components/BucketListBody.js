import React from 'react'
import s from 'styled-components'

const ListElement = s.li`
    flex: auto;

    &:hover {
        background-color: #e8f1ff;
    }
`

const Box = s.li`
    display: flex;
`

const ChildList = props => {
    if (typeof(props.children) === 'undefined' || props.children.length === 0) {
        return <></>
    } else {
        return (
            <ul>
                {props.children.map(item => (
                    <>
                        <Box>
                            <ListElement>{item.goalName}</ListElement>
                            {/* <button>Add button? Edit buttton? BOTH?!?!</button> */}
                        </Box>
                        <ChildList children={item.children} />
                    </>
                ))}
            </ul>
        )
    }
}

const BucketListBody = props => {
    if (props.error) {
        return (
            <div>Error: {error.message}</div>
        )
    } else if (!props.isLoaded) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <ul>
                {props.bucketList.map(item => (
                    <>
                        <ListElement>{item.goalGroupName}</ListElement>
                        <ChildList children={item.children} />
                    </>
                ))}
            </ul>
        )
    }
}

export default BucketListBody