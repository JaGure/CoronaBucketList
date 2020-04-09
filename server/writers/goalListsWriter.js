// async updates the goal list of the given list owner by adding the given goal
// if an error occurs, calls the next function and passes it the error, otherwise
// calls the next function when finished, passing it the updated goalLists
const addGoalToGoalLists = function (goalLists, listOwner, goalToAdd, next) {
    if (typeof (goalToAdd) !== 'string') {
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

    next(goalLists)
}

module.exports = {
    addGoalToGoalLists: addGoalToGoalLists
}