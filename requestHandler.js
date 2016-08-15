'use strict';
var fs = require('fs');

var upload = function(req, res) {

    var file = req.files.file;
    var fileName = file.name;
    var tempPath = file.path;
    var relPath = "/uploads/" + fileName;
    var fullPath = __dirname + "/public" + relPath;

    console.log("uploading file " + fileName + " to the server...");

    fs.rename(tempPath, fullPath, function(err) {
        if (err) throw err;
        // delete the temporary file from temp directory
        fs.unlink(tempPath, function() {
            if (err) throw err;
            console.log('File uploaded to: ' + fullPath + ' - ' + file.size + ' bytes');
            res.json({ link: relPath });
        });
    });
};


module.exports = {
    upload: upload
};