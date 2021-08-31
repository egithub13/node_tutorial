//OS module - intraction with OS and server
const os = require('os'); //Built in node module has no ./

//Info on current user
const user = os.userInfo();
console.log(user.username)
//method returns the system up time in seconds
console.log(`The system up time is ${os.uptime()} seconds`);

const currentOS = {
  name:os.type(),
  release:os.release(),
  totalMen:os.totalmem(),
  freeMen:os.freemem(),
}

console.log(currentOS);
