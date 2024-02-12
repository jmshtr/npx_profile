#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const clear = require('clear');

const data = {
    name: chalk.bold.green('              James Hunter'),
    twitter: chalk.gray('https://twitter.com/') + chalk.cyan('jmshtr'),
    github: chalk.gray('https://github.com/') + chalk.green('jmshtr'),
    web: chalk.cyan('https://jmshtr.github.io'),
    npx: chalk.red('               npx') + ' ' + chalk.white('jmshtr'),

    labels: {
        twitter: chalk.white.bold('    Twitter:'),
        github: chalk.white.bold('     GitHub:'),
        web: chalk.white.bold('        Web:')
    }
};

const aboutMe = boxen(
    [
        `${data.name}`,
        '',
        `${data.labels.twitter}  ${data.twitter}`,
        `${data.labels.github}  ${data.github}`,
        `${data.labels.web}  ${data.web}`,
        '',
        `${data.npx}`
    ].join('\n'),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: 'single',
        borderColor: 'green'
    }
);

clear();
console.log(aboutMe);

const tip = [
    `Tip: Try ${chalk.cyanBright.bold('cmd/ctrl + click')} on the links above`,
    ''
].join('\n');
console.log(tip);
