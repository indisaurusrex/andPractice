function solution(input) {
    if (!input) {
        return "Please provide an input to continue";
    }
    // the numbers from the input
    let numbers = [];
    let output = [];
    let inputChecker = input.split('');

    inputChecker.forEach(element => {
        if(Number(element)){
            // add if it's a number
            numbers.push(element);
        }
    });

    numbers.sort((a, b) => a - b);

    switch(numbers.length){
        case 0:
            return "There were no numbers in the input";
        case 1:
            return numbers.join();
        case 2:
            output.push(numbers[1] + numbers[0], numbers[0] + numbers[1]);
            return output.join(',');
        case 3:
            output.push(
                numbers[2] + numbers[1] + numbers[0],
                numbers[2] + numbers[0] + numbers[1],
                numbers[1] + numbers[2] + numbers[0],
                numbers[1] + numbers[0] + numbers[2],
                numbers[0] + numbers[2] + numbers[1],
                numbers[0] + numbers[1] + numbers[2]
            );
            return output.join(',');
    }

}

describe('solution function', () => {
    test("it should return the input if it is a single number", () => {
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
        expect(value).toBe("Please provide an input to continue")
    })
    
})
