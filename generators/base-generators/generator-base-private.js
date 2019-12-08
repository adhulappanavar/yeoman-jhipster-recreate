
const Generator = require('yeoman-generator');


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }
    
    /**
     * Check if the subgenerator has been invoked from JHipster CLI or from Yeoman (yo jhipster:subgenerator)
     */
    checkInvocationFromCLI() {
        if (!this.options['from-cli']) {
            this.warning(
                `Deprecated: JHipster seems to be invoked using Yeoman command. Please use the JHipster CLI. Run ${chalk.red(
                    'jhipster <command>'
                )} instead of ${chalk.red('yo jhipster:<command>')}`
            );
        }
    }
}