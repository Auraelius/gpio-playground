#!/usr/bin/env node
/* eslint-disable no-console */
/* 
 * set up nixie multiplexing
 *
 */
const {name, version} = require('./package.json');
console.log(`Welcome to ${name} ${ version}`);

let currentTubes = ['0','0','0','0','0','0','0','0'];
let nextTubes = ['0', '0', '0', '0', '0', '0', '0', '0'];
let numberOfPairs = currentTubes.length/2;


/* 
 * allowed values : numerals and either " " or "b" for blank 
 * 
 * */

const MinimumNixieDelay=1; // The minimum time we need to keep a tube lit


function setup(){
SetPinModes();
TurnOffAllTubes();

}