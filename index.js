const http = require('http');

const server = http.createServer((req, res) => {
    const clientIP = req.socket.remoteAddress;
    console.log(`New request received from: ${clientIP}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World! Server is working.');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
