import { things } from '../utils.mjs';
import * as core from '@actions/core';

console.log('hello');
core.info('hej fra info log')
console.log('heres a list of things', things.join(', '));
console.log('the end');
