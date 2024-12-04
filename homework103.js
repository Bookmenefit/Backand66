const express = require('express');
const app = express();

let fs = require('fs/promises');

app.get('/read-user',(req,res)=>{
    fs.readFile('./user.json','utf-8',(err, data)=>{
        if (err)console.error('Error reading:', err)
        return res.status(500).send('Internal Server Error')
    
    res.json(JSON.parse(data))
    })
})
app.listen(3000, () => {console.log('Server running on port 3000')})