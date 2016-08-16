var requestHandler = require('./requestHandler');
var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty(); // allows to access req.files.file

// here we define the routes:
module.exports = function(app) {

    app.post('/api/upload', multipartyMiddleware, requestHandler.upload);

};