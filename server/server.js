'use strict';
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const bucketListParser = require('../parsers/bucketListParser')
const goalListsParser = require('../parsers/goalListsParser')
const serverless = require('serverless-http'); 

const app = express()

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router()

router.get('/bucket-list', (_, res) => {
  bucketListParser.getBucketList(data => {
    res.send(data)
  })
})

router.get('/goal-lists', (_, res) => {
  goalListsParser.getGoalLists(data => {
    res.send(data)
  })
})

router.post('/goal-lists', (req, res) => {
  console.log(req)
  goalListsParser.setGoalLists(req.body.listOwner, req.body.goalToAdd, function(err) {
    if(err) {
      console.log(err)
    } else {
      res.redirect('/')
    }
  })
})

app.use('/.netlify/functions/server', router);

// // starting server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App listening on port ${port}`)
// });

module.exports = app;
module.exports.handler = serverless(app);