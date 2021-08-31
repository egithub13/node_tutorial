//HTTP Module that will enable us to set up a web server
//Use Express to abstact the HTTP Module
const http = require('http');
const server = http.createServer((req, res) => {
  //req represents the incoming request to your web server
  //the request is the specific end point the client is looking for.
  //console.log(req)
  if (req.url === '/') {
    //res is the response we are sending back.
    //res.write('Welcome to our home page.')
    res.end('Welcome to our home page.') //end request with result in one command
  }
  if (req.url === '/about') {
    res.end('Here is our short history')
  }
  res.end(`<h1>Oops!</h1>
  <p>We can't seem to find the page your are looking for</p>
  <a href="/">Back home</a>`)
})

server.listen(5000); //What port is the server listening on
