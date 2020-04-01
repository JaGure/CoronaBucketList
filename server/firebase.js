const admin = require('firebase-admin');

const serviceAccount = require('./corona-bucket-list-firebase-adminsdk-9ragi-11247adb7d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://corona-bucket-list.firebaseio.com'
});

const db = admin.database()

var ref = db.ref('goals');
ref.once('value', function(snapshot) {
  console.log(snapshot.val());
});