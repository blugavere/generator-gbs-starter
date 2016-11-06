'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the hunky-dory ' + chalk.red('generator-gbs-starter') + ' generator!'
    ));

    var prompts = [{
      name: 'name',
      message: 'What is your app name?',
      default: path.basename(process.cwd()),
      validate: function (str) {
        return str.length > 0;
      }
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },
  writing: function () {
    var pkg = {
      name: this.props.name,
      version: '0.0.0',
      scripts: {
        dev: 'gulp dev'
      },
      dependencies: {
        'body-parser': '^1.15.2',
        bootstrap: '^3.3.7',
        chalk: '^1.1.3',
        classnames: '^2.2.5',
        compression: '1.6.1',
        errorhandler: '^1.4.3',
        express: '^4.14.0',
        helmet: '^2.3.0',
        'serve-favicon': '^2.3.0',
        'serve-static': '^1.11.1'
      },
      devDependencies: {
        'gulp-build-system': '^1.2.0',
        gulp: 'github:gulpjs/gulp#4.0',
        sinon: '^1.17.6',
        'gulp-istanbul': '^1.1.1',
        'gulp-nodemon': '^2.2.1',
        'gulp-exclude-gitignore': '^1.0.0'
      },
      srcDir: process.cwd()
    };

    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('**'),
      this.destinationPath('./')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
