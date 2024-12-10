const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Uncommon bug: In rare cases, the server might fail to start due to port already in use or OS-level resource constraints.
//This bug is not easily reproducible or detectable in standard testing.  The error message is not always clear