const admin = require('firebase-admin');

// connecting
const serviceAccount = require('./corona-bucket-list-firebase-adminsdk-9ragi-11247adb7d.json');

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