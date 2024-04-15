import toBeWithinRange from "./custom-matcher";

it('Is within range', () => expect(99).toBeWithinRange(90, 110));

test('Is NOT within range', () => expect(101).toBeWithinRange(0, 100));

test('Is NOT within range', () => expect(() => toBeWithinRange('abc')).toThrow('These must be of type number'));

