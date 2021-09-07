//started operating system process
console.log('first')
//setInterval() is asynchronous
setInterval(() => {
    console.log('second')
}, 2000)

console.log('third')
//process stays alive unless kill process control + c