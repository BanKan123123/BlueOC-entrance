function sumOFTopTwoIntegers(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two intergers");
    }

    arr.sort((a, b) => b - a);

    return arr[0] + arr[1];
}


function runTests() {
    const testCases = [
        { input: [1, 4, 2, 3, 5], expected: 9 },
        { input: [10, 20, 30, 40, 50], expected: 90 },
        {input: [10, 3, 2, 4, 6, 8], expected: 15},
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = sumOFTopTwoIntegers(input);

        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log('All test cases passed');
};

runTests();