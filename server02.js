'use';
//placing requires in proper order determines functionality
const {createServer} = require("http");
const server = createServer();
const { createReadStream } = require("fs");





// readFile("index.html", (err, buff)=> {
//   res.end(buff);
// });

server.on("request", (req, res)=>{

const readStream = createReadStream("index.html")

readStream
  .on("error", (err)=>{
    res.end(error);
  })
  .on("open", ()=>{
    readStream.pipe(res);
    //res.end() not needed it is being handled internally
  })

//   res.writeHead(200);
//   res.write("Hello, World!")
});



server.listen(8080)
