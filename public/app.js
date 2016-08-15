"use strict";

var app = angular.module("mainApp", ["ngFileUpload"]);

app.controller('mainCtrl', ['$scope', '$http', 'imageService', function($scope, $http, imageService) {

    $scope.picFile = ''; // init the picture to trigger button block on view
    $scope.imageService = imageService; // init the image uploader service
    $scope.rules = ["Size: up to 2MB", "Format: png, jpeg, jpg, gif...", "Note: images bigger than 500*700px will be resized"];

    $scope.isValid = {
        sizeValid: true,
        notEmpty: true
    };

    // validates the picture and uploads it
    $scope.uploadPic = function(file) {

        if (isValid(file)) {
            console.log("Picture validation succeeded, uploading picture...");
            imageService.uploadPic($scope.picFile); //UPLOAD!
        } else {
            console.log("Picture validation succeeded, please pick another one...");
        }

    };

    //  This method checks if the user picked a file, and validates its size. returns true when file is valid
    var isValid = function(file) {

        // note: file picker wont let the user pick any non-image file
        var valid = $scope.isValid;
        valid.sizeValid = isValidSize(file);
        valid.notEmpty = notEmpty(file);

        if (valid.sizeValid && valid.notEmpty) {
            return true;
        }
        return false;

    };
    var isValidSize = function(file) {
        var maxSize = 2000000; // 2mb
        if (file && file.size > maxSize) {
            console.log("File is too big - " + file.size);
            return false;
        }
        return true;
    };

    // checks if the user picked a file at all (in order to disable the upload button)
    var notEmpty = function(file) {
        if (file != '') {
            return true;
        }
        console.error("File cannot be undefined");
        return false;
    };

    $scope.notEmpty = this.notEmpty;
}]);