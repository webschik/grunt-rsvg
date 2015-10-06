# grunt-rsvg
Grunt task for rsvg library

##Installation
Notice that you have to install the `rsvg` library on your computer.

````
npm install grunt-rsvg --save-dev
````

##Usage
````js
grunt.initConfig({
    rsvg: {
        options: {
            /*
            dpiX,
            dpiY,
            zoomX,
            zoomY,
            zoom,
            format,
            keepAspectRatio: true/false,
            noKeepImageData: true/false,
            backgroundColor
            */
            sizes: [
                [192, 192], //192 x 192 pixels
                [144, 144],
                [128, 128],
                [64, 64],
                [48, 48],
                [38, 38],
                [32, 32],
                [19, 19],
                [16, 16]
            ]
        },
        main: {
            files: [
                {
                    src: ['src/images/icon.svg'],
                    dest: 'src/images/icons'
                }
            ]
        }
    }
});

grunt.loadNpmTasks('grunt-rsvg');

````
You may find the description of each option [here](http://manpages.ubuntu.com/manpages/precise/man1/rsvg-convert.1.html)
