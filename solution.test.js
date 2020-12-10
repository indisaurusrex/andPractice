function solution(input) {
    if (!input || typeof input !== "string") {
        return "Please provide a string to be analysed";
    }

    let numbersToUse = '';
    
    input.split('').forEach(element => {
        if (Number(element) && !numbersToUse.includes(element)) {
            numbersToUse += element;
        }
    });

    if (numbersToUse.length < 2) {
        return "I couldn't find any AND-Siblings this time"
    }

    // add this into line 21
    let siblingsList = [];

    let findAllSiblings = (numbersToUse, siblings = '') => {
        if(!numbersToUse) {
            siblingsList.push(siblings);
            return
        }
        for (let i = 0; i < numbersToUse.length; i++) {
            siblings += numbersToUse[i];
            // pass in 19 here too
            findAllSiblings(numbersToUse.slice(0, i) + numbersToUse.slice(i + 1), siblings);
            siblings = siblings.slice(0, siblings.length - 1);
        }
    };

    findAllSiblings(numbersToUse);
    
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
