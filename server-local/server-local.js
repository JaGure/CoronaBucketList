const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const bucketListParser = require('./parsers-local/bucketListParser')
const goalListsParser = require('./parsers-local/goalListsParser')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/bucket-list', (_, res) => {
  bucketListParser.getBucketList(data => {
    res.send(data)
  })
})

app.get('/goal-lists', (_, res) => {
  goalListsParser.getGoalLists(data => {
    res.send(data)
  })
})

app.post('/goal-lists', (req, res) => {
  console.log(req)
  goalListsParser.setGoalLists(req.body.listOwner, req.body.goalToAdd, function(err) {
    if(err) {
      console.log(err)
    } else {
      res.redirect('/')
    }
  })
})

// starting server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});