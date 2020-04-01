const fs = require('fs')

const goalListsFile = './server-local/data/goalLists.json'

// async reads the goalLists, passes it to the callback function
const getGoalLists = next => {
    fs.readFile(goalListsFile, 'utf-8', function(err, data){
        if (err) throw err

        const goalLists = JSON.parse(data).goals

        next(goalLists)
    });
}

// async updates the goal list of the given list owner by adding the given goal
// if an error occurs, calls the next function and passes it the error, otherwise,
// calls the next function when finished (without parameters)
const setGoalLists = function (listOwner, goalToAdd, next) {
    getGoalLists(goalLists => {
        if (typeof(goalToAdd) !== 'string') {
            next("Invalid New Goal Type")
            return
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
            next("Invalid List Owner")
            return
        }

        ownerList.push(goalToAdd)
        goalLists[ownerIndex].elements = ownerList

        const goalListsJSON = JSON.stringify({ goals: goalLists })

        fs.writeFile(goalListsFile, goalListsJSON, 'utf-8', function (err) {
            if (err) {
                next(err)
            } else {
                next()
            }
        })
    })
}

module.exports = {
    getGoalLists: getGoalLists,
    setGoalLists: setGoalLists
}