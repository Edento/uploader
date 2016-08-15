"use strict";
app.service('imageService', ['$timeout', 'Upload', function($timeout, Upload) {

    var self = this;
    self.link = '';
    self.progress = 0;

    this.uploadPic = function(file) {

        file.upload = Upload.upload({
            url: '/api/upload',
            file: file
        });

        file.upload.then(function(response) {

            $timeout(function() {
                var link = response.data.link;
                self.link = link;

            });
        }, function(response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        }, function(evt) {
            // Math.min is to fix IE which reports 200% sometimes
            // file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            self.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
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