const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 3000;

//Improved Error Handling
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1);
  } else {
    console.error(`An unexpected error occurred: ${err.message}`);
    process.exit(1);
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});