function solution(input) {
    // the numbers from the input
    let numbers = [];
    let output = [];
    // options to sort are:
            // find the biggest number in the input and add it in at the appropriate space
            // get all the answers in an array and sort decending in the end
            // loop through the numnbers to add them together from the orig, 

    // all elements from the input split into characters
    let inputChecker = input.split('');

    inputChecker.forEach(element => {
        if(Number(element)){
            // add if it's a number
            numbers.push(element);
        }
    });

    // if there weren't any numbers, return a message
    if(numbers.length === 0){
        return "There were no numbers in the input";
    } 

    if(numbers.length === 1){
        return numbers.join(); 
    }

    numbers.sort((a, b) => a - b);
    
    // if there are 2 numbers
    if(numbers.length === 2){
        output.push(numbers[1] + numbers[0], numbers[0] + numbers[1]);
        return output.join(',');
    }

    if(numbers.length === 3){
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
    
})
