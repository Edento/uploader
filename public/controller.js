app.controller('mainCtrl', ['$scope', 'imageService', function($scope, imageService) {

    $scope.picFile = ''; // init the picture to trigger button block on view
    $scope.imageService = imageService; // init the image uploader service
    $scope.rules = ["Size: up to 500KB", "Format: png, jpeg, jpg, gif...", "Note: images bigger than 500*700px will be resized"];
    $scope.imageChanged = false; // an indecator if a new image has been loaded
    $scope.isValid = {
        sizeValid: true,
        notEmpty: true
    };
    $scope.uploadFailed = false;
    // validates the picture and uploads it
    $scope.uploadPic = function(file) {
        if (isValid(file)) {
            $scope.imageChanged = false;
            imageService.uploadPic($scope.picFile, function(err) { //UPLOAD!
                if (!err) {
                    $scope.imageChanged = true;
                    $scope.uploadFailed = false;
                } else {
                    $scope.uploadFailed = true;
                }
            });
        }
        // if file validation failed, an error will be shown to the user
    };
    //  This method checks if the user picked a file, and validates its size. returns true when file is valid
    var isValid = function(file) {
        // note: file picker wont let the user pick any non-image file
        var valid = $scope.isValid;
        valid.sizeValid = $scope.isValidSize(file);
        valid.notEmpty = notEmpty(file);
        if (valid.sizeValid && valid.notEmpty) {
            return true;
        }
        return false;
    };

    $scope.isValidSize = function(file) {
        var maxSize = 500000; // 500kb
        if (file && file.size > maxSize) {
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