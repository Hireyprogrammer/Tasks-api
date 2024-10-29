const http = require('http');
const taskRouter = require('./taskRouter');

const port = 9001;
const hostname = 'localhost';


const server = http.createServer((req, res) => {
  
    if (req.url.startsWith('/tasks')) {
       taskRouter(req,res)
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Tasks endpoint reached' }));
    } else {
       
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Page not found' }));
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
1