const express = require('express')
const article = require('./../models/article')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("in articles!")
})

router.get('/new', (req, res) => {
    res.render('articles/new')
})

router.post('/', async (req, res) => {
    const Article = new article({
        title: req.body.title,
        description: req.body.desc,
        markdown: req.body.markdown
    })

    try { 
        Article = await Article.save()
        res.redirect(`/articles/${article.id}`)
    } catch(e) {
        console.log(e)
    }
})

module.exports = router