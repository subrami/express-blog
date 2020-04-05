/*
weird obseession of turning text into software,

rami dior ball.
*/

const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles.js')
const app = express()


mongoose.connect('mongodb://localhost/db', {
  useNewUrlParser: true,
  useUnifiedTopology: true})

app.get('/', (req, res) => {
  const articlesList = [{
    title: "test title",
    creationDate: new Date(),
    description: "test description"
  },
    {title: "test article 2",
    creationDate: new Date(),
    description: "test description"
}]

  res.render('articles/index', { articles: articlesList })
})

app.use('/articles', articleRouter)
app.use(express.urlencoded({ extended: false}))

app.set('view engine', 'ejs')

app.listen(5000)
