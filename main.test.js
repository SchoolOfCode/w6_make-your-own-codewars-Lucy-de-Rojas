//👉 Write your tests below here:


import {jest} from '@jest/globals';
import { confuseMe } from './main.js'


test('first', ()=>{

    console.log('running a test>>>>> ');

    let firstName = 'lucy';
    let lastName = 'rojas';
    let actual = confuseMe(firstName, lastName).shuffle();

    let expected = {name: lastName, surname: firstName,  shuffle: [Function: shuffle]}

    expect(actual).toBe(expected);
})