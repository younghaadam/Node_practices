const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) =>  {

    res.setHeader("content-type", "text/html")

    let path = "./views/"

    if(req.url === "/"){
        path += "index.html"
    } if (req.url === "/about") {
        path += "about.html"   
    } else {
        path += "404.html"
        
    }

    fs.readFile("./views/index.html", (err, data) => {
        if(err){
            console.log("there was an error")
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, "localhost", () => {
    console.log("Server is running on port 7000")
})




