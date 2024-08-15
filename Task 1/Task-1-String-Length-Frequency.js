function mostFrequentLenghts(strings) {
    const lenghts = new Map();

    strings.forEach((str) => {
        const len = str.length;

        lenghts.set(len, (lenghts.get(len) || 0) + 1);

        console.log(lenghts);
    });

    const maxCount = Math.max(...lenghts.values());

    return strings.filter(str => lenghts.get(str.length) === maxCount);
}


console.log(mostFrequentLenghts(['a', 'ab', 'abc', 'cd', 'def', 'gh', 'av']));

function runTests() {
    const testCases = [
        { input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'], expected: ['ab', 'cd', 'gh'] },
        { input: ['a', 'ab', 'abc', 'abcd'], expected: ['a', 'ab', 'abc', 'abcd'] },
        { input: ['x', 'yz', 'pq', 'rs', 'tuv', 'wxyz'], expected: ['yz', 'pq', 'rs'] },
        { input: [], expected: [] },
        { input: ['abcd', 'efgh', 'ijkl', 'mnop', 'qrst'], expected: ['abcd', 'efgh', 'ijkl', 'mnop', 'qrst'] },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = mostFrequentLenghts(input);
        const passed = JSON.stringify(result) === JSON.stringify(expected);

        console.log(`Test Case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
    });
}

runTests();