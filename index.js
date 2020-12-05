#!/usr/bin/env node
/* eslint-disable no-console */
/* 
 * set up nixie multiplexing
 *
 */
const {name, version} = require('./package.json');
console.log(`Welcome to ${name} ${ version}`);

const Gpio = require('pigpio').Gpio;

const motor = new Gpio(10, {mode: Gpio.OUTPUT});

// SG-5010
const min = 500;
const max = 2500;
// gauge?
// const min = 1800;
// const max = 2400;
const incr = 100;
let pulseWidth = min + ((max-min)/2);
let increment = incr;

// setInterval(() => {
//   motor.servoWrite(pulseWidth);
//   console.log(`pw: ${pulseWidth}`)
//   pulseWidth += increment;
//   if (pulseWidth >= max) {
//     increment = -incr;
//   } else if (pulseWidth <= min) {
//     increment = incr;
//   }
// }, 500);


setInterval(() => {
  pulseWidth = Math.floor(Math.random()*(max-min)+min);
  console.log(`pw: ${pulseWidth}`)
  motor.servoWrite(pulseWidth);
}, 5000);



// /////////////////////////////////
// Example 1: Pulse an LED with PWM

// const led = new Gpio(16, {mode: Gpio.OUTPUT});

// let dutyCycle = 0;

// setInterval(() => {
//   led.pwmWrite(dutyCycle);

//   dutyCycle += 5;
//   if (dutyCycle > 255) {
//     dutyCycle = 0;
//   }
// }, 200);