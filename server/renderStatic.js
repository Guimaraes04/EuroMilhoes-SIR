const fs = require('fs');
const path = require('path');

const renderStatic = (req, res) => {
    const filePath = path.join(__dirname, '../static', req.url);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(404).send('Not Found');
        } else {
            res.send(data);
        }
    });
}

module.exports = {
    renderStatic
}
    