const admin = require('firebase-admin')
const bucketListWriter = require('./writers/bucketListWriter')
const goalListsWriter = require('./writers/goalListsWriter')

// connecting
const serviceAccount = require('./corona-bucket-list-firebase-adminsdk-9ragi-11247adb7d.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://corona-bucket-list.firebaseio.com'
});

const db = admin.database()

// read functions (async)
const getBucketList = next => {
  db.ref('bucketList').once('value', function(snapshot) {
    next(snapshot.val())
  })
}

const getGoalLists = next => {
  db.ref('goals').once('value', function(snapshot) {
    next(snapshot.val())
  })
}

// bucketList write functions (async)
// actually updates the bucketList server side
const updateBucketList = newBucketList => {
  // passed error message (instead of bucketList)
  if (typeof(bucketList) === 'string') {
    console.log(bucketList)
    return
  }

  // writes new bucketList to firebase
  db.ref('/').update({
    bucketList: newBucketList
  }, function(error) {
    if (error) {
      console.log('Write Failed :(')
    } else {
      console.log('Bucketlist Successfully Updated!')
    }
  })
}

// these create the new bucketlist, then pass it to the update function for server writing
const addGoalToBucketList = (goalName, location) => {
  getBucketList(bucketList => bucketListWriter.addGoalToBucketList(bucketList, goalName, location, updateBucketList))
}

const addNewGoalGroupToBucketList = (goalGroupName) => {
  getBucketList(bucketList => bucketListWriter.addNewGoalGroupToBucketList(bucketList, goalGroupName, updateBucketList))
}

// goalList write functions (async)
const updateGoalLists = newGoalLists =>  {
    // passed error message (instead of bucketList)
    if (typeof(newGoalLists) === 'string') {
      console.log(newGoalLists)
      return
    }
  
    // writes new goalLists to firebase
    db.ref('/').update({
      goals: newGoalLists
    }, function(error) {
      if (error) {
        console.log('Write Failed :(')
      } else {
        console.log('Goal Lists Successfully Updated!')
      }
    })
}

// pulls the goal lists, creates an updated goal lists, then pushes the updated list to be written to the server
const addGoalToGoalLists = (listOwner, goalToAdd) => {
  getGoalLists(goalLists => goalListsWriter.addGoalToGoalLists(goalLists, listOwner, goalToAdd, updateGoalLists))
}



module.exports = {
  getBucketList: getBucketList,
  getGoalLists: getGoalLists,
  addGoalToBucketList: addGoalToBucketList,
  addNewGoalGroupToBucketList: addNewGoalGroupToBucketList,
  addGoalToGoalLists: addGoalToGoalLists
}