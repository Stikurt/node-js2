const http = requir('http');
const fs = requir('fs');
const path = requir('path');
const PORT = 8080;
http.createServer((req, res) => {
    res.writeHead(200,{ 
        'Content - Type' : 'text/html',
        'Expires' : '0'
    });
    fs.createReadStream(path.resolve(__dirname, 'index.html')).pipe(res)
})
server.listen(PORT, '0.0.0.0', () => {
    console.log('server started')
})

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('hello World!');
}).listen(8000);
