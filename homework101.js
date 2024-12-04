
const express = require('express');
const app = express();

let fs = require('fs/promises');


//ทำ async แบบ Serial 
try {
async function createRobotFile() {
    const head = await fs.readFile('head.txt', 'utf8')
    const body = await fs.readFile('body.txt', 'utf8')
    const leg = await fs.readFile('leg.txt', 'utf8')
    const feet = await fs.readFile('feet.txt', 'utf8')

    const text = head + '\n' + body + '\n' + leg + '\n' + feet

    await fs.writeFile('robot.txt',text,'utf8')
}} catch (error) {
    console.error(error)
}

//call function
createRobotFile()
//fs.readFile('head.txt','utf8',(err, data) => {
 //   var text = data + '\n'
 //   fs.readFile('body.', 'utf8', (err, data) => {
  //      text += data + '\n'
  //      fs.readFile('leg.txt', 'utf8', (err, data) => {
  //          text += data + '\n'
  //          fs.readFile('feet.txt', 'utf8', (err, data) => {
 //               text += data
  //              fs.writeFile('robot.txt', text,'utf8', (err) => {
 //                   if (err) console.error("Cann't write file")
 //                       else console.log("File written successfully")
//
//                })
//            })
//        })
//    })
//}) 

app.listen(3000, () => {console.log('Server running on port 3000')})