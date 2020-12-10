export function solution(input) {
    let integers = '';
    let siblingsList = [];
    const findAllSiblings = (integers, siblings = '') => {
        if (!integers) {
            siblingsList.push(siblings);
            return;
        }
        for (let i = 0; i < integers.length; i++) {
            siblings += integers[i];
            findAllSiblings(integers.slice(0, i) + integers.slice(i + 1), siblings);
            siblings = siblings.slice(0, siblings.length - 1);
        }
    };

    if (typeof input === "string") {
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

    findAllSiblings(integers);

    return (siblingsList.sort((a, b) => b - a).join(','));
}
