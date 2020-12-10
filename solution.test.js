function solution(input) {
    let integers = '';
    let siblingsList = [];

    if (typeof input === "string"){
        input.split('').forEach(element => {
            if (Number(element) && !integers.includes(element)) {
                integers += element;
            }
        });
    } else {
        return "Please provide a string to be analysed";
    }
    
    if (integers.length < 2) {
        return "I couldn't find any AND-Siblings this time"
    }

    const findAllSiblings = (integers, siblings = '') => {
        if(!integers) {
            siblingsList.push(siblings);
            return;
        }
        for (let i = 0; i < integers.length; i++) {
            siblings += integers[i];
            findAllSiblings(integers.slice(0, i) + integers.slice(i + 1), siblings);
            siblings = siblings.slice(0, siblings.length - 1);
        }
    };

    findAllSiblings(integers);
    
    return (siblingsList.sort((a, b) => b - a).join(','));

}

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
    test("it should not add a letter to the array", () => {
        const value = solution('a');
        expect(value).toBe("I couldn't find any AND-Siblings this time");
    })
})
