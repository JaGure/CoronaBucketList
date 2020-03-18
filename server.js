const express = require('express')
const path = require('path')

const app  = express()
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (_, res) => {
    console.log("ASDSFASDF")
    res.send("👀")
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});