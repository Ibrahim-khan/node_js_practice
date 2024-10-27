/*
* Title: Not FOund Handler
* Description: 404 Not Found Handler
* Author: Md Ibrahim Khan
* Date: 27-10-2024
*/

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found'
    });
};

module.exports = handler;