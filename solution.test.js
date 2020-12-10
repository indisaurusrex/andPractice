import {solution} from "./solution";

describe('solution function', () => {
    test("it returns both options in descending order, for 2 AND-Siblings provided in any order", () => {
        expect(solution('12')).toBe('21,12')
        expect(solution('43')).toBe('43,34')
    })
    test("it returns both options for 2 AND-Siblings, ignoring letters and spaces", () => {
        expect(solution('1A2')).toBe('21,12')
        expect(solution('1 2')).toBe('21,12')
    })
    test("it ignores duplicate integers", () => {
        expect(solution('112')).toBe('21,12')
    })
    test("it ignores negative integers", () => {
        expect(solution('1 -4 A5')).toBe('51,15')
    })
    test("it returns all the options for 3 AND-Siblings", () => {
        expect(solution('326')).toBe('632,623,362,326,263,236')
    })
    test("it returns a message if no input is given", () => {
        expect(solution()).toBe("Please provide a string to be analysed")
    })
    test("it returns a message if the input is not a string", () => {
        expect(solution(21)).toBe("Please provide a string to be analysed")
    })
    test("it returns a message if there are no AND-Siblings found", () => {
        expect(solution('1')).toBe("I couldn't find any AND-Siblings this time")
    })
    test("it returns a message if there are no positive integers in the string", () => {
        expect(solution('a')).toBe("I didn't find any positive integers in this string")
    })
})
