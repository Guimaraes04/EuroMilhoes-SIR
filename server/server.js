const cors = require('cors')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(cors())
app.use(express.static(path.join(__dirname, '../public')))
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/main.html'))
})

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const generateEuromilhoesKey = (req, res) => {
    let numbers = [];
    let stars = [];

    while (numbers.length < 5) {
        let number = generateRandomNumber(1, 51);
        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }

    while (stars.length < 2) {
        let star = generateRandomNumber(1, 13);
        if (!stars.includes(star)) {
            stars.push(star);
        }
    }
    
    res.json({
        key:{
            numbers: numbers,
            stars: stars
        }
    });
}

app.get('/generateKey', generateEuromilhoesKey)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })

module.exports = {
    generateEuromilhoesKey
}

