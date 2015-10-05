var execSync = require('child_process').execSync;
var optionsMap = {
    dpiX: '--dpi-x',
    dpiY: '--dpi-y',
    zoomX: '--x-zoom',
    zoomY: '--y-zoom',
    zoom: '--zoom',
    format: '--format',
    keepAspectRatio: '--keep-aspect-ratio',
    noKeepImageData: '--no-keep-image-data',
    backgroundColor: '--background-color'
};

module.exports = function (grunt) {
    grunt.registerMultiTask('rsvg', 'Convert svg to raster format', function () {
        var options = this.options({
            sizes: []
        });
        var optionsString = '';

        for (var k in options) {
            if (options.hasOwnProperty(k)) {
                var name = optionsMap[k];
                var value = options[k];
                if (name) {
                    optionsString += name + (value !== true && value !== false ? ('=' + value) : '') + ' ';
                }
            }
        }

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
                    var w = obj[0];
                    var h = obj[1];
                    execSync(
                        'rsvg-convert ' +
                        '--output=' + f.dest + '/' + w + 'x' + h +'.png ' +
                        '--width=' + w + ' ' +
                        '--height=' + h + ' ' +
                        optionsString + ' ' +
                        filepath
                    );
                });
            });
        });
    });
};
