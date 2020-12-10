import {solution} from "./solution";

describe('solution function', () => {
    test("it returns both options for 2 number input, in the right order if they're provided ascending", () => {
        expect(solution('12')).toBe('21,12');
    })
    test("it returns both options for 2 number input, in the right order if they're provided descending", () => {
        expect(solution('21')).toBe('21,12');
    })
    test("it returns both options for 2 number input with added letter", () => {
        expect(solution('1A2')).toBe('21,12');
    })
    test("it does not take notice of duplicate integers", () => {
        expect(solution('112')).toBe('21,12');
    })
    test("it does not take notice of negative integers", () => {
        expect(solution('1 -4 A5')).toBe('51,15');
    })
    test('it returns all the options for 3 numbers', () => {
        expect(solution('326')).toBe('632,623,362,326,263,236')
    })
    test('a message is returned for no input', () => {
        expect(solution()).toBe("Please provide a string to be analysed")
    })
    test('a message is returned for an input that is not a string', () => {
        expect(solution(21)).toBe("Please provide a string to be analysed")
    })
    test('a message is returned if there are no AND-Siblings found', () => {
        expect(solution('1')).toBe("I couldn't find any AND-Siblings this time");
    })
    test("if there are no numbers in string, a message is returned", () => {
        expect(solution('a')).toBe("I didn't find any positive integers in this string");
    })
})
