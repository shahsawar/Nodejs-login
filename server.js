/**
 * Module dependencies.
 */
const express = require('express')
const { static } = require('express')
const app = express()
const mongoose = require('mongoose')

//Import routes
const indexRoutes = require('./routes/index')

/*Setting*/
app.set('views engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public')) //Route for html, css and javascript files
app.use(express.urlencoded({ extended: false }))

//DataBase connection
mongoose.connect('mongodb://localhost/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use('/', indexRoutes)

app.listen(process.env.PORT || 3000)