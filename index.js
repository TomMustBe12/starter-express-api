const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Hello!! This is like really cool. My website!!')
})
app.listen(process.env.PORT || 3000)
