// finds where to and then inserts a new goal into the bucket list, passes new bucketList to callback function
// location is array of ints representing which list to index into (keeps going to end of location arr)
const addGoalToBucketList = (bucketList, goalName, location, next) => {
    if (!Array.isArray(location)) {
        next('Location Not An Array!')
        return
    } else if (location.length < 1) {
        next('Invalid Location Array!')
        return
    }

    // find where to insert (insertArray will always be a children array)
    let insertArray = bucketList[location[0]].children

    for (let i = 1; i < location.length; i++) {
        insertArray = insertArray[location[i]].children
    }

    // check if goal already exists in insertArray
    for (let i = 0; i < insertArray.length; i++) {
        if (insertArray[i].goalName === goalName) {
            next('Goal Already Exists At This Location!')
            return
        }
    }

    const newGoal = {
        goalName: goalName,
        children: []
    }

    insertArray.push(newGoal)

    next(bucketList)
}

// appends a new goal group to the end of the bucket list, passes new bucketList to callback function
const addNewGoalGroupToBucketList = (bucketList, goalGroupName, next) => {
    for (let i = 0; i < bucketList.length; i++) {
        if (bucketList[i].goalGroupName === goalGroupName) {
            next('Attempted to add already existing goalGroup!')
            return
        }
    }

    const newGoalGroup = {
        goalGroupName: goalGroupName,
        children: []
    }

    bucketList.push(newGoalGroup)
    
    next(bucketList)
}

module.exports = {
    addGoalToBucketList: addGoalToBucketList,
    addNewGoalGroupToBucketList: addNewGoalGroupToBucketList
}