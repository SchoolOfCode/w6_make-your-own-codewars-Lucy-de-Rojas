//👉 Write your tests below here:


import {jest} from '@jest/globals';
import { confuseMe } from './main.js'


test('confuse me: >>>> ', ()=>{

    console.log('running a test>>>>> ');

    let firstName = 'mickey';
    let lastName = 'mouse';
    let actual = confuseMe(firstName, lastName);
    actual.shuffle();

    let expected = {name: lastName, surname:firstName}

    expect(actual).toMatchObject(expected);
});




test('consfuse me again: >>>>', ()=>{

    console.log('running another test>>>>> ');

    let firstName = 13;
    let lastName = 'mouse';

    let actual = confuseMe(firstName, lastName);
    actual.shuffle();

    let expected = {name: lastName, surname:firstName}

    expect(actual).toMatchObject(expected);




});





test('consfuse me again and again: >>>>', ()=>{

    console.log('running another test>>>>> ');

    let firstName = '';
    let lastName = '';

    let actual = confuseMe(firstName, lastName);
    actual.shuffle();

    let expected = {name: lastName, surname:firstName}

    expect(actual).toMatchObject(expected);



});