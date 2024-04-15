import {expect} from '@jest/globals';

function toBeWithinRange(actual, floor, ceiling){

    if (typeof actual !== 'number' ||
        typeof floor !== 'number'  ||
        typeof ceiling !== 'number'){
            throw new TypeError('These must be of type number')
        }

    if(actual < floor) return false;
    if(actual > ceiling) return false;
    if(actual > floor && actual < ceiling) return true;    

}


expect.extend({
    toBeWithinRange,
})