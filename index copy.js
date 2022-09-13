const { rmSync } = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url)

    res.write('<h1>Hello from NodeJs!</h1>'); 
    res.write('<h2>Hello from NodeJs!</h2>'); 
    res.write('<h3>Hello from NodeJs!</h3>'); 
    //write() - мы можем добавлять сколько угодно раз
    res.end(`
        <div style="background: red; width: 200px; height: 200px;">
            <h1>Halo!</h1>
        </div>
            
        `);// главное всегда закрывать end()
})

server.listen(3000, () =>{
    console.log('Server is running...')
}) 