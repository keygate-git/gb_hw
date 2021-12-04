const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
app.use(express.static('..'));
app.use(bodyParser.json());

app.get('/catalogData', (req, res) => {
    fs.readFile('../db/catalog.json', 'utf-8', (err, data) => {
        res.send(data);
    })
})

app.get('/cartData', (req, res) => {
    fs.readFile('../db/cart.json', 'utf-8', (err, data) => {
        res.send(data);
    })
})

app.post('/cartData', (req, res) => {
    fs.readFile('../db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.send('{"result":0}');
        } else {
            const cart = JSON.parse(data);
            const item = req.body;
            cart.push(item);
            fs.writeFile('../db/cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result":0}');
                } else {
                    res.send('{"result":1}');
                }
            });
        }
    });
});

app.post('/cartRemoveData', (req, res) => {
    fs.readFile('../db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.send('{"result":0}');
        } else {
            const cart = JSON.parse(data);
            const item = req.body;
            cart.splice(cart.indexOf(item), 1);
            fs.writeFile('../db/cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result":0}');
                } else {
                    res.send('{"result":1}');
                }
            });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running');
});
