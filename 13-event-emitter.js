//get back the class
//you can make a custom class
//extended from class

const EventEmitter = require('events')

//create a custom emitter
const customEmitter = new EventEmitter()

//On listens for specific events
//2nd argument is a call back function to perform
//or respond to the event
customEmitter.on('response', (name,id) => {
  console.log(`Data received user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log(`Some other logic`)
})
//emit method emits the call back function direction
//you must use the same string 'response'
customEmitter.emit('response','john',34)