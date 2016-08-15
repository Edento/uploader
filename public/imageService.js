"use strict";

app.service('imageService', ['$timeout', 'Upload', function($timeout, Upload) {
    var self = this;
    self.link = '';
    self.progress = 0;

    this.uploadPic = function(file, callback) {
        file.upload = Upload.upload({
            url: '/api/upload',
            file: file
        });
        file.upload.then(function(response) {
            $timeout(function() {
                var link = response.data.link;
                self.link = link;
                callback();
            });
        }, function(err) {
            callback(err);
        });
    };
    // not necessary for now..
    this.upload2 = function(file) {
        Upload.upload({
            url: 'api/upload',
            data: { file: file }
        }).then(function(resp) {
            console.log('Success ' + resp.config.data.file.name + ' uploaded. Response: ' + resp.data.link);
        }, function(resp) {
            console.log('Error status: ' + resp.status);
            prompt("An error occured. please refresh the page and try again.");
        }, function(evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
}]);