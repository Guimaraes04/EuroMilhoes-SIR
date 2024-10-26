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
        numbers: numbers,
        stars: stars
    });
}

module.exports = {
    generateEuromilhoesKey
}