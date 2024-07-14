const path = require('path')
const express = require('express')
const hbs = require('hbs')
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
        title :"Weather"
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: "About Our Weather App",
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

app.get('*', (req,res) =>{
    res.render("error", {
        message: "Page not found"
    })
})

app.listen(3000, () => {
    console.log("running")
})