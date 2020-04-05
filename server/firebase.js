const admin = require('firebase-admin')
const bucketListWriter = require('./writers/bucketListWriter')

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
    console.log(snapshot.val())
  })
}

// bucketList write functions (async)
// actually updates the bucketList server side
const updateBucketList = (newBucketList) => {
  // passed error message, NOT bucketList
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
  getBucketList(function(bucketList) {
    bucketListWriter.addGoalToBucketList(bucketList, goalName, location, updateBucketList)    
  })
}

const addNewGoalGroupToBucketList = (goalGroupName) => {
  getBucketList(function(bucketList) {
    bucketListWriter.addNewGoalGroupToBucketList(bucketList, goalGroupName, updateBucketList)
  })
}

module.exports = {
  getBucketList: getBucketList,
  getGoalLists: getGoalLists,
  addGoalToBucketList: addGoalToBucketList,
  addNewGoalGroupToBucketList: addNewGoalGroupToBucketList
}