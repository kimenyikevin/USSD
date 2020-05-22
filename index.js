const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();

// Get authentication
const credentials = {
  apiKey: process.env.APIKEY, // use your sandbox app API key for development in the test environment
  username: process.env.USERNAME // use 'sandbox' for development in the test environment
};

router.post('*',(req,res) => {

    let {sessionId, servveCode, phoneNumber, text} = req.body;

    // first level response
    if( text === ""){
        let response = `
        CON Welcome to my simple USSD app. Select optionns from below
        1. Take a loan
        2. Loan Balance
        3. Check Eligility
        `;
    res.send(response);

    } else if( text === '1') {
        // buz logic for first level
       let response = `
       CON CHoose from the options below
       1. NGN 1000
       2. NGN 3000
       3. NGN 5000
       4. NGN 7000
       `;
       res.send(response);

    } else if(text === '2'){
        let balance = '5000';
        let response = `END Your loan balance is -${balance}
        Please pay up in time.
        `
        res.send(response);

    } else if(text === '3'){
        let response = `END You are currently eligible for loan`
        res.send(response);

    } else if(text === '1*1'){
        let balance = 1000;
        let response = `END Your accout balance has been credited with NGN ${balance}`
        res.send(response);

    } else if(text === '1*2'){
        let balance = 3000;
        let response = `END Your accout balance has been credited with NGN ${balance}`
        res.send(response);
    
    } else if(text === '1*3'){
        let balance = 5000;
        let response = `END Your accout balance has been credited with NGN ${balance}`
        res.send(response);
    
    } else if(text === '1*4'){
        let balance = 4000;
        let response = `END Your accout balance has been credited with NGN ${balance}`
        res.send(response);

    } else {
        res.status(400).send('Bad request');
    }
});

module.exports = router;