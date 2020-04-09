import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))

console.log("tiddies" + document.location.origin)

const request = new Request('/.netlify/functions/server/goal-lists', {
    method: 'POST', 
    body: JSON.stringify({listOwner: 'Jake', goalToAdd: 'did this work?'}),
    headers: { "Content-Type": "application/json" }
})

fetch(request)