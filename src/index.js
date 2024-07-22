const path = require('path')
const express = require('express')
const morgan= require('morgan')
const handlebars=require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//templates engine
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resource/views'))

//
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/tin-tuc', (req, res) => {
  res.render('news')
})

app.get('/lien-he',(req, res) => {
  res.render('contact')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})