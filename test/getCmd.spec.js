var assert = require("assert");
var getCmd = require('./../lib/getCmd');

describe('#getCmd()', function () {
    it('should create a command from options', function () {
        var cmd = getCmd('test.svg', {
            dpiX: 1,
            dpiY: 2,
            zoomX: 1.3,
            zoomY: 1.4,
            zoom: 2,
            output: 'dir/test.png',
            format: 'PNG',
            width: '192',
            height: 192,
            keepAspectRatio: true,
            noKeepImageData: false,
            backgroundColor: 'red'
        });

        assert.equal(cmd, 'rsvg-convert --dpi-x=1 --dpi-y=2 --x-zoom=1.3 --y-zoom=1.4 --zoom=2 --output=dir/test.png --format=PNG --width=192 --height=192 --keep-aspect-ratio --background-color=red test.svg');
    });
});