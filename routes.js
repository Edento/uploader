//  NOTE: SERVER FAILS to load this routs. for now server.js routs by itself.
var requestHandler = require('./requestHandler');
var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty();

// here we define the routes:
module.exports = function(app) {

    app.post('/api/upload', multipartyMiddleware, requestHandler.upload);

};