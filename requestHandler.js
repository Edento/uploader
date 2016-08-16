'use strict';
var mv = require('mv');

var upload = function(req, res) {

    var file = req.files.file;
    var fileName = file.name;
    var tempPath = file.path;
    var relPath = "/uploads/" + fileName;
    var fullPath = __dirname + "/public" + relPath;

    console.log("uploading file " + fileName + " to the server...");

    // moving the received file from temporary path to a folder accessible by the client
    mv(tempPath, fullPath, function(err) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            console.log('file moved successfully');
            res.json({ link: relPath });
        }
    });

};


module.exports = {
    upload: upload
};