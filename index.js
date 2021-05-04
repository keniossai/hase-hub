const express = require('express')

const { config, engine } = require('express-edge')


const app = express()

config({ cache: process.env.NODE_ENV === "production"})
app.use(engine)



app.use(express.static('public'))
app.set('views', `${__dirname}/views`)



app.get('/', (req, res) => {

    res.render('homepage')
})

app.get('/emrald-store/emrald', (req, res) => {

    res.render('emrald-store/emrald')
})

app.get('/emrald-store/cart', (req, res) => {

    res.render('emrald-store/cart')
})
app.get('/emrald-store/shop', (req, res) => {

    res.render('emrald-store/shop')
})
app.get('/emrald-store/product', (req, res) => {

    res.render('emrald-store/product')
})
app.get('/emrald-store/contact', (req, res) => {

    res.render('emrald-store/contact')
})
app.get('/emrald-store/checkout', (req, res) => {

    res.render('emrald-store/checkout')
})
app.get('/emrald-store/dashboard', (req, res) => {

    res.render('emrald-store/dashboard')
})

app.listen(5000, () => {
    console.log('App is running on port 5000')
})