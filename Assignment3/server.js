const path =  require("path");
const fs = require("fs");
const http = require("http");

const serverPath = path.join(__dirname, "index.html");
 const errorPath = path.join(__dirname, "error.html");

 const PORT = 4000;

 function requestHandler(req, res) {
    if (req.url === "/") {
        getserver(req, res);
    }

if (req.url.endsWith(".html") && req.method === "GET") {
    try {
        getRequestedserver(req, res);
    } catch (error) {
getErrorserver(req, res);
    }
}
 }

 const server = http.createServer(requestHandler);

 server.listen(PORT, () => {
    console.log(`Server has started running at http://localhost:${PORT}`);
 });


 // Handlers
 function getserver(req, res) {
    res.setHeader("content-type", "text/html");
    res.writeHead(200);
    res.end(fs.readFileSync(serverPath));
}

function getRequestedserver(req, res) {
    const file = req.url.split("/")[1]; 
    const actualPath = path.join(__dirname, file);
    const server = fs.readFileSync(actualPath);
    res.setHeader("content-type", "text/html");
    res.writeHead(200);
    res.end(server);
}

function getErrorserver(req, res) {
    res.setHeader("content-type", "text/html");
    res.writeHead(404);
    res.end(fs.readFileSync(errorPath));
}
