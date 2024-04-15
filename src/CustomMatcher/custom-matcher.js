import {expect} from '@jest/globals';

function toBeWithinRange(actual, floor, ceiling){

    if (typeof actual !== 'number' ||
        typeof floor !== 'number'  ||
        typeof ceiling !== 'number'){
            throw new TypeError('These must be of type number')
        }

}


expect.extend({
    toBeWithinRange,
})