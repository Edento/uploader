//  NOTE: SERVER FAILS to load this routs. for now server.js routs by itself.
var requestHandler = require('./requestHandler');


// here we define the routes:
module.exports = function(app) {

    app.get('/', requestHandler.main);
    app.post('/api/upload', requestHandler.upload);
    // some more routs here

};