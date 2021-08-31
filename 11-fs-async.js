

//File system module sync (non blocking) & async (blocking)
const {readFile, writeFile} = require('fs')
console.log('Start..')
//read using a callback function
//this is callback hell. We can shorten this code by using
//async await or Promises
readFile('./content/first.txt', 'utf8', (err,result) => {
  if(err){
    console.log(err)
    return;
  }
  const first =result;
  readFile('./content/second.txt', 'utf8', (err,result) => {
    if(err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile('./content/result-async.txt',
     `Here is the result: ${first}${second}`, (err,result) => {
     if(err) {
       console.log(err)
       return;
     }
     console.log('done with this task..');
   })
  })
})
console.log('Starting the next task..')
