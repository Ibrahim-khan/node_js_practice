/*
* Title: Uptime Monitoring Application
* Description: A Restful API to monitor up or down time of user defined links
* Author: Md Ibrahim Khan
* Date: 26-10-2024

*/ 
// dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`server is running at http:///localhost${process.env.NODE_ENV}`);
        console.log(`listening to port ${app.config.port}`)
    });
}

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
