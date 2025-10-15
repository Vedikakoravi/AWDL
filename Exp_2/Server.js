// server.js
const http = require('http');

// set the port number
const PORT = 4000;

// create the server
const server = http.createServer((req, res) => {
  const now = new Date().toLocaleString(); // get current date & time
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello \nCurrent date & time: ${now}`);
});

// start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
