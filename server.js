const express = require('express')
const app = express()
const queryControler = require('./controller/queryControler')
app.listen(3000,()=> console.log('listening at port : 3000'))
app.set('view engine', 'ejs')
app.set('views', 'Src')
app.use(express.static('./public'))


app.get('/', (req, res)=> {res.redirect('/home')})

app.get('/home', (req, res)=> {res.status(200).render('index')})

app.get('/repos-query/:query_rules', queryControler)

app.use((req,res) => {res.status(404).render('404')})

//https://api.github.com/search/repositories?q=lang:javascript+created:2023-01-19..2023-08-15+sort:stars



