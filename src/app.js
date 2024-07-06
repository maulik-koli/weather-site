const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const forcast = require('./utils/forcast')
const geocode = require('./utils/geocode')

const app = express()

const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        one: "Vengence UwU",
        two: "The Knight UwU",
        three: "Batman UwU",
        title :"Weather",
        name:"Unknow"
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: "About site",
        title :"About",
        name:"Unknow"
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title1: "Taskete",
        title :"Help",
        name:"Unknow"
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({
            error:"Requested address don't match"
        })
    }

    const address = req.query.address

    geocode(address, (error, {longitude, latitude, location} = {}) => {
        if(error){
            return res.send({ error: error })
        }
        
        forcast(longitude, latitude, (error, {temperature, description} = {}) =>{
            if(error){
                return res.send({ error: error })
            }

            return res.send({
                location: location,
                forcast: "Temperature is "+temperature+" and there is "+description+".",
                address: address
            })
        })
    })
})

app.get('/products', (req,res) =>{
    if(!req.query.search){
        return res.send({
            error: "Request Invalid!"
        })
    }

    res.send({
        product: []
    })
})

app.get('/help/*', (req,res) => {
    res.render("error", {
        message: "Help article not found"
    })
})

app.get('*', (req,res) =>{
    res.render("error", {
        message: "Page not found"
    })
})

app.listen(3000, () => {
    console.log("running")
})