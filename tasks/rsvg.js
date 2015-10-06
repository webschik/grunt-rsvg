var execSync = require('child_process').execSync;
var getCmd = require('./../lib/getCmd');

module.exports = function (grunt) {
    grunt.registerMultiTask('rsvg', 'Convert svg to raster format', function () {
        var options = this.options({
            sizes: []
        });

        this.files.forEach(function (f) {
            f.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).forEach(function (filepath) {
                options.sizes.forEach(function (obj) {
                    var width = obj[0];
                    var height = obj[1];
                    options.output = f.dest + '/' + width + 'x' + height +'.png';
                    options.width = width;
                    options.height = height;
                    var cmd = getCmd(filepath, options);
                    execSync(cmd);
                });
            });
        });
    });
};
