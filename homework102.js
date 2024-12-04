const express = require('express');
const app = express();

let fs = require('fs/promises');

app.get('/about', (req, res) => {
    res.send('This is about page.')
})

app.get('/my-json-api3', (req, res) => {
    res.json({"University": "PIM"})
})

app.get('/user2', (req,res) => {
    res.json([
        {
        id: 1,
        firstname: "Somechai",
        lastname: "Jaidee"},
        {
        id: 2,
        firstname: "Tony",
        lastname: "Stark"
    }])
})

app.listen(3000, () => {console.log('Server running on port 3000')})