'use strict';
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const firebase = require('./firebase/firebase')
const serverless = require('serverless-http'); 

const app = express()

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router()

router.get('/bucket-list', (_, res) => {
  firebase.getBucketList(data => {
    res.send(data)
  })
})

router.get('/goal-lists', (_, res) => {
  firebase.getGoalLists(data => {
    res.send(data)
  })
})

router.post('/goal-lists', (req, res) => {
  firebase.addGoalToGoalLists(req.body.listOwner, req.body.goalToAdd, function(err) {
    if(err) {
      console.log(err)
    } else {
      res.redirect('/')
    }
  })
})

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);