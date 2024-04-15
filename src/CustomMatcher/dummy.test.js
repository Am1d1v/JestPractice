import toBeWithinRange from "./custom-matcher";

it('Is within range', () => expect(toBeWithinRange(99, 90, 110)).toBe(true));

test('Is NOT within range', () => expect(toBeWithinRange(101, 0, 100)).toBe(false));

test('Is NOT within range', () => expect(toBeWithinRange('abc')).toThrow('These must be of type number'));

