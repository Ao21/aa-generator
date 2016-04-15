'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var path = require('path');
var mkdirp = require('mkdirp');

var _ = require('lodash');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
	prompting: function () {
		var done = this.async();
		var prompts = [
			{
				name: 'projectName',
				type: 'input',
				message: 'What is your project\'s name? ',
				default: 'default-project',
				filter: function (value) {
					return _.camelCase(value);
				}
			}, {
				name: 'projectType',
				type: 'list',
				message: 'What type of project is it?',
				choices: ['Design Project', 'Angular Project']
			}
		]
		this.prompt(prompts, function (props) {
			this.props = props;
            done();
        }.bind(this));
	},
	defaults: function(){
		if(path.basename(this.destinationPath()) !== this.props.projectName) {
			this.log(
				'Your generator must be inside a folder named ' + this.props.projectName + '\n' +
				'I\'ll automatically create this folder.'
			);
			mkdirp(this.props.projectName);
			this.destinationRoot(this.destinationPath(this.props.projectName));
		}
		if(this.props.projectType === 'Design Project'){
			this.sourceRoot(path.resolve(this.sourceRoot(),'..','design_templates'));
		}
		if(this.props.projectType === 'Angular Project'){
			this.sourceRoot(path.resolve(this.sourceRoot(),'..','angular_template'));
			
		}
	},
	writing: {
		config: function () {
			this.directory('config', 'config');
			this.bulkDirectory('src', 'src');
			this.copy('_tsconfig.json', 'tsconfig.json');
			this.copy('_.gitignore', '.gitignore');
			this.copy('_webpack.config.js', 'webpack.config.js');
			this.template('_package.json','package.json', {name: this.props.projectName})
			this.template('_typings.json','typings.json', {name: this.props.projectName})
		}
	},
	install: function () {
		//this.installDependencies();
	}

});
