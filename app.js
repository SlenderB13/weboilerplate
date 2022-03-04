const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Home',
    message: 'Home'
  })
})

app.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About',
    message: 'About'
  })
})

app.listen(port, () => {
  console.log(`welcome live, at http://localhost:${port}`)
})
