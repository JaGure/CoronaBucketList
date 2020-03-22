import React from 'react'
import s from 'styled-components'

const ListElement = s.li`
    &:hover {
        background-color: green;
    }
`

const ChildList = props => {
    if (typeof(props.children) === 'undefined' || props.children.length === 0) {
        return <></>
    } else {
        return (
            <ul>
                {props.children.map(item => (
                    <>
                        <ListElement>{item.goalName}</ListElement>
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