//modules
//CommonJS, every file is module (by default)
//Modules - Encapsulated code (only share minimum)
//remember to start with ./ for current directory
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-altflavor')
require('./7-mind-grenade') //automatically executes the addValues function

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
