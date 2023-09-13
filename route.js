const fs = require('fs');
function requestHandler(req, res){
    const url = req.url;
    const method = req.method;

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunkData) => {
            console.log(chunkData);
            body.push(chunkData);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            //fs.writeFileSync('message.txt',message);
            fs.writeFile('message.txt',message, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end;
                return;
            });
        });

    }else if (url === '/') {
        res.write(`
        <html>
            <head><title>My website</title></head>
            <body>
                <form action="/message" method="POST">
                    <input type="text" name="anyName">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>`);
        res.end;
        return;

    }else {
        res.setHeader('Content-type', 'text/html');
        res.write(`
        <html>
            <head>
                <title>My website</title>
            </head>
            <body>Hello word</body>
        </html>`);
        res.end;
        return;
    }
}


module.exports = requestHandler;