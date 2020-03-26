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