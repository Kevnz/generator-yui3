'use strict';
var util        = require('util'),
    yeoman      = require('yeoman-generator'),
    path        = require("path"),
    fs          = require("fs"),
    scriptBase  = require('../script-base'),
    utils       = require('../utils'),
    exec        = require('child_process').exec,
    child;

var Generator = module.exports = function Generator(args, options, config) {
    scriptBase.apply(this, arguments);
    this.setUpPaths();

     if(this.context.where !== "module"){
        this.log.error('You are not in a module\n');
        process.exit(1);
    }

    // TODO create a this._isInRootModule() different from this._isAtRootModule()
};

util.inherits(Generator, scriptBase);

Generator.prototype.build = function build() {
    child = exec('shifter', {
            cwd: this.buildFileInfo.relativeContainer
        },
        function(error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });

};
