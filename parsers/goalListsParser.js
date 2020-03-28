const fs = require('fs')

const goalListsFile = './data/goalLists.json'

// async reads the goalLists, passes it to the callback function
const getGoalLists = next => {
    fs.readFile(goalListsFile, 'utf-8', function(err, data){
        if (err) throw err

        const goalLists = JSON.parse(data).goals

        next(goalLists)
    });
}

// async updates the goal list of the given list owner by adding the given goal
const updateGoalLists = function (listOwner, goalToAdd) {
    getGoalLists(goalLists => {
        if (typeof(goalToAdd) !== 'string') {
            console.log("Invalid New Goal Type")
        }

        let ownerList = []
        let ownerIndex = -1

        for (let i = 0; i < goalLists.length; i++) {
            if (goalLists[i].listOwner === listOwner) {
                ownerList = goalLists[i].elements
                ownerIndex = i
            }
        }

        if (ownerIndex === -1) {
            console.log("Invalid List Owner")
            return
        }

        ownerList.push(goalToAdd)
        goalLists[ownerIndex].elements = ownerList

        const goalListsJSON = JSON.stringify({ goals: goalLists })

        fs.writeFile(goalListsFile, goalListsJSON, 'utf-8', function (err) {
            if (err) throw err;
            console.log('Goal Lists successfully updated!')
        })
    })
}

module.exports = {
    getGoalLists: getGoalLists,
    updateGoalLists: updateGoalLists
}