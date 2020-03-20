const express = require('express')
const path = require('path')
const bucketListParser = require('./parsers/bucketListParser')

const app  = express()
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/bucket-list', (_, res) => {
  bucketListParser.getBucketList(data => {
    res.send(data)
  })
})

// starting server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});