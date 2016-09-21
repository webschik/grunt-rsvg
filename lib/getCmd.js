var optionsMap = {
    dpiX: '--dpi-x',
    dpiY: '--dpi-y',
    zoomX: '--x-zoom',
    zoomY: '--y-zoom',
    zoom: '--zoom',
    output: '--output',
    format: '--format',
    width: '--width',
    height: '--height',
    keepAspectRatio: '--keep-aspect-ratio',
    noKeepImageData: '--no-keep-image-data',
    backgroundColor: '--background-color'
};

module.exports = function (filepath, options) {
    var config = [];
    for (var k in options) {
        if (options.hasOwnProperty(k)) {
            var value = options[k];
            var option = optionsMap[k];

            if (option && value != null && value !== false) {
                config.push(option + (value !== true ? '=' + value : ''));
            }
        }
    }

    return 'rsvg-convert ' + config.join(' ') + ' ' + filepath;
};
