import React from 'react'
import s from 'styled-components'

import Title from './Title'
import BucketList from './BucketList'
import GoalContainer from './GoalContainer'

const TitleWrapper = s.div`
    flex: 0 1 auto;
    margin-bottom: 5px;
`

const ContentWrapper = s.div`
    flex: 9 1 auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`

const BucketListWrapper = s.div`
    flex: 1 1 auto;
`

const GoalContainerWrapper = s.div`
    flex: 2 1 auto;
`

const App = () => {
    return (
        <>
            <TitleWrapper>
                <Title />
            </TitleWrapper>

            <ContentWrapper>
                <BucketListWrapper>
                    <BucketList />
                </BucketListWrapper>

                <GoalContainerWrapper>
                    <GoalContainer />
                </GoalContainerWrapper>
            </ContentWrapper>
        </>
    )
}

export default App