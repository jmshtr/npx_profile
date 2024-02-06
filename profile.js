#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const data = {
    name: chalk.bold.green("              James Hunter"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("jmshtr"),
    github: chalk.gray("https://github.com/") + chalk.green("jmshtr"),
    web: chalk.cyan("https://jmshtr.github.io"),
    npx: chalk.red("               npx") + " " + chalk.white("jmshtr"),

    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelWeb: chalk.white.bold("        Web:"),
};

const aboutMe = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.npx}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(aboutMe);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);
