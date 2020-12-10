export function solution(input) {
    let integers = '';
    let siblingsList = [];
    let reg = /(?<![-\d])\d+/g;
    const findAllSiblings = (integers, siblings = '') => {
        if (!integers && !siblingsList.includes(siblings)) {
            siblingsList.push(siblings);
            return;
        }
        for (let i = 0; i < integers.length; i++) {
            siblings += integers[i];
            findAllSiblings(integers.slice(0, i) + integers.slice(i + 1), siblings);
            siblings = siblings.slice(0, siblings.length - 1);
        }
    };

    if (typeof input === "string" && reg.test(input)) {
        integers = (input.match(reg)).join('')
    } else if (typeof input === "string" && !reg.test(input)) {
        return "I didn't find any positive integers in this string"
    } else {
        return "Please provide a string to be analysed";
    }

    if (integers.length < 2) return "I couldn't find any AND-Siblings this time"

    findAllSiblings(integers);

    return (siblingsList.sort((a, b) => b - a).join(','));
}
