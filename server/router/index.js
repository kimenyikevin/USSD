import express from 'express';
import dotenv from 'dotenv'
const router = express.Router();

dotenv.config();

router.post('*',(req,res) => {

    let {sessionId, servveCode, phoneNumber, text} = req.body;

    // first level response
    if( text === ""){
        let response = `
        CON Welcome to student registration. Select optionns from below
        1. Choose school
        2. Pay transport 
        3. Check your registtration information
        `;
    res.send(response);

    } else if( text === '1') {
        // buz logic for first level
       let response = `
       CON Select school you want
       1. Efotec
       2. Kagarama
       3. APR rugunga
       `;
       res.send(response);

    } else if(text === '2'){
        let response = `
        CON Select school you want
        1. Efotec
        2. Kagarama
        3. APR rugunga
        `;
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

export default router;