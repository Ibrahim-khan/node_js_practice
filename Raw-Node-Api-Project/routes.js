/*
* Title: Routes
* Description: Application Routes
* Author: Md Ibrahim Khan
* Date: 26/10/2024
*/

// dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler')
const routes = {
    sample : sampleHandler,
}

module.exports = routes;