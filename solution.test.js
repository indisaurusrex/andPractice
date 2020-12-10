import {solution} from "./solution";

describe('solution function', () => {
    test("it returns both options for 2 number input, in the right order if they're provided ascending", () => {
        const value = solution('12');
        expect(value).toBe('21,12');
    })
    test("it returns both options for 2 number input, in the right order if they're provided descending", () => {
        const value = solution('21');
        expect(value).toBe('21,12');
    })
    test("it returns both options for 2 number input with added letter", () => {
        const value = solution('1A2');
        expect(value).toBe('21,12');
    })
    test("it does not take notice of duplicate integers", () => {
        const value = solution('112');
        expect(value).toBe('21,12');
    })
    test("it does not take notice of negative integers", () => {
        const value = solution('1 -4 A5');
        expect(value).toBe('51,15');
    })
    test('it returns all the options for 3 numbers', () => {
        const value = solution('326');
        expect(value).toBe('632,623,362,326,263,236')
    })
    test('a message is returned for no input', () => {
        const value = solution();
        expect(value).toBe("Please provide a string to be analysed")
    })
    test('a message is returned for an input that is not a string', () => {
        const value = solution(21);
        expect(value).toBe("Please provide a string to be analysed")
    })
    test('a message is returned if there are no AND-Siblings found', () => {
        const value = solution('1');
        expect(value).toBe("I couldn't find any AND-Siblings this time");
    })
    test("if there are no numbers in string, a message is returned", () => {
        const value = solution('a');
        expect(value).toBe("I didn't find any positive integers in this string");
    })
})
