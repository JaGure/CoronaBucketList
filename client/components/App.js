import React from 'react'
import s from 'styled-components'

import Title from './Title'
import BucketList from './BucketList'
import GoalContainer from './GoalContainer'

const BucketListWrapper = s.div`
    width: 33%;
    float: left;
`

const GoalContainerWrapper = s.div`
    width: 66%;
    float: right;
`

const App = () => {
    return (
        <>
            <Title />

            <div>
                <BucketListWrapper>
                    <BucketList />
                </BucketListWrapper>

                <GoalContainerWrapper>
                    <GoalContainer />
                </GoalContainerWrapper>
            </div>
        </>
    )
}

export default App