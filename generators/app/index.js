const chalk = require('chalk');
const BaseGenerator = require('../base-generators/generator-base');

var Generator = require('yeoman-generator');

module.exports = class extends BaseGenerator {

    constructor(args, opts) {
        super(args, opts);
    }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "confirm",
        name: "cool",
        message: "Would you like to enable the Cool feature?"
      }
    ]);
  }

  writing() {
    this.log(chalk.cyan("cool feature", this.answers.cool)); // user answer `cool` used
  }
};