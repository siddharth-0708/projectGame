const path = require('path');//check these and in script start (pacakge.json) and how its happening when i am launching local host
const express = require('express'); // why in local thats not happening?
const app = express(); //in server is package.json also deployed?if no how its starting?
const port = 2000;

const gamePath = path.join(__dirname,'./');

//***IMPORTANT***
app.use(express.static(gamePath)); //One way : takes current directory by gamepath and looks for index.html by default else u can give (/index) in page. similarly, from here move forward to acess any other HTML file, it is static. In this case the current directory on any hosting is from the public folder, HTML
app.listen(port, function(){
    console.log("web server is running with port " + port);
})
// app.get('/about1', function(req, res){ 
//     res.send('hello'); // **IMPORTANT!!!** if u typle manually from server then send data in page u will see else if from HTML js then in console
// })
// const http = require('http');
// const server = http.createServer(function(request,response){
//     response.write('hello');
//     response.end();
// });
// server.listen(2000);