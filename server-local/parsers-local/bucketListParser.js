const fs = require('fs')

const bucketListFile = './data/bucketList.json'

// async reads the bucketlist, passes it to the callback function
const getBucketList = next => {
    fs.readFile(bucketListFile, 'utf-8', function(err, data){
        if (err) throw err

        const bucketList = JSON.parse(data).bucketList

        next(bucketList)
    });
}

// writes the passed in bucketlist to the file
const updateBucketList = updatedBucketList => {
    const bucketListJSON = JSON.stringify({ bucketList: updatedBucketList })

    fs.writeFile(bucketListFile, bucketListJSON, 'utf-8', function (err) {
        if (err) throw err;
        console.log('Bucket List successfully updated!')
    })
}

// finds where to and then inserts a new goal into the bucket list
const addGoalToBucketList = (goalName, location) => {
    getBucketList(bucketList => {
        if (!Array.isArray(location)) {
            console.log('Location Not An Array!')
            return
        } else if (location.length < 1) {
            console.log('Invalid Location Array!')
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
                console.log('Goal Already Exists At This Location!')
                return
            }
        }

        const newGoal = {
            goalName: goalName,
            children: []
        }

        insertArray.push(newGoal)
        updateBucketList(bucketList)
    })
}

// appends a new goal group to the end of the bucket list
const addNewGoalGroupToBucketList = (goalGroupName) => {
    getBucketList(bucketList => {
        for (let i = 0; i < bucketList.length; i++) {
            if (bucketList[i].goalGroupName === goalGroupName) {
                console.log('Attempted to add already existing goalGroup!')
                return
            }
        }

        const newGoalGroup = {
            goalGroupName: goalGroupName,
            children: []
        }

        bucketList.push(newGoalGroup)
        updateBucketList(bucketList)
    })
}

module.exports = {
    getBucketList: getBucketList,
    addGoalToBucketList: addGoalToBucketList,
    addNewGoalGroupToBucketList: addNewGoalGroupToBucketList
}