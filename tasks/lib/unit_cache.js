/*
 * grunt-gumup
 * https://github.com/amsemy/grunt-gumup
 *
 * Copyright (c) 2014 Amsemy
 * Licensed under the MIT license.
 */

'use strict';

var gumup_mock = require('./gumup_mock');

module.exports = function(grunt, fileCache, options) {

    var unitCache = [
        {
            fileName: '/h/unitName',
            name: 'unitName',
            dependencies: [
                'foo',
                'bar'
            ]
        }
    ];

    unitCache.readFile = function(fileName) {
        // TODO: check file exists
        return read(fileName);
    };

    unitCache.readUnit = function(name) {
        var sep = grunt.getEnv,
            unitPath = options.unitPath;
        var fileNames = [];
        for (var i = 0, len = unitPath.length; i < len; i++) {
grunt.file.exists
        }

        return read(fileName[0]);
    };

    function read(fileName) {
        var enviroment = options.enviroment;
        var buffer = fileCache.readFile(fileName),
            decl = {
                fileName: fileName
            },
            params = [],
            values = [];
        enviroment.gumup = new gumup_mock(decl);
        for (var e in enviroment) {
            params.push(e);
            values.push(enviroment[e]);
        }
        params.push(buffer);
        Function.apply(null, params).apply(null, values);
        return unitCache.push(decl) - 1;
    }

    return unitCache;

};
