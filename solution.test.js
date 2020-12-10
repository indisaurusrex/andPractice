function solution(input) {
    if (!input || typeof input !== "string") {
        return "Please provide a string as an input";
    }

    let numbersToUse = '';
    
    input.split('').forEach(element => {
        if (Number(element)) {
            numbersToUse += element;
        }
    });

    if (!numbersToUse || numbersToUse.length < 2) {
        return "There were no numbers in the input"
    }
    if (numbersToUse.length < 2){
        return numbersToUse;
    }

    let siblingsList = [];

    let findAllSiblings = (numbersToUse, siblings = '') => {
        if(!numbersToUse) {
            siblingsList.push(siblings);
            return
        }
        for (let i = 0; i < numbersToUse.length; i++) {
            siblings += numbersToUse[i];
            findAllSiblings(numbersToUse.slice(0, i) + numbersToUse.slice(i + 1), siblings);
            siblings = siblings.slice(0, siblings.length - 1);
        }
    };

    findAllSiblings(numbersToUse);
    return (siblingsList.sort((a, b) => b - a).join(','));

}

describe('solution function', () => {
    xtest("it should return the input if it is a single number", () => {
        const value = solution('1');
        expect(value).toBe('1');
    })
    test("it should not add a letter to the array", () => {
        const value = solution('a');
        expect(value).toBe('There were no numbers in the input');
    })
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
    test('it returns all the options for 3 numbers', () => {
        const value = solution('326');
        expect(value).toBe('632,623,362,326,263,236')
    })
    test('it returns a message if the input is blank', () => {
        const value = solution();
        expect(value).toBe("Please provide a string as an input")
    })
    test('it returns a message if the input is not a string', () => {
        const value = solution(21);
        expect(value).toBe("Please provide a string as an input")
    })
})
