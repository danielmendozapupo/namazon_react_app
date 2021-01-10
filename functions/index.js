/*if I use firebase
* const functions = require('firebase-functions');
*
* */
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')
('sk_test_51I7OJQCESVgeCc3GNdQ5PWAAwMZBdVl7RA5WzcWLyYrspaZTQw9ahQbRGy8QV0NDsNTXgUZm2ndf0hWU2eVHc9Zc004wDSxjNJ')

//API

//App config
 const app = express();

//middleWares
app.use(cors({origin:true}));
app.use(express.json());

//Api routes
app.get('/', (req, res) => {
    res.status(200).send('Hello world')
})

app.post('/payments/create', async (req, res)=>{
    const total = req.query.total;
    console.log('Payment Request Received for this amount-> ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total, //subunit of the currency
        currency: 'usd',
    });
    //Ok- Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
})
//Listen command
exports.api = functions.https.onRequest(app)