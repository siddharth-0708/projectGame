const path = require('path');//check these and in script start (pacakge.json) and how its happening when i am launching local host
const express = require('express');
const app = express();
const port = 2000;

const gamePath = path.join(__dirname,'./');

//***IMPORTANT***
app.use(express.static(gamePath)); //One way : takes current directory by gamepath and looks for index.html by default else u can give (/index) in page. similarly, from here move forward to acess any other HTML file, it is static. In this case the current directory on any hosting is from the public folder, HTML
app.listen(port, function(){
    console.log("web server is running with port " + port);
})