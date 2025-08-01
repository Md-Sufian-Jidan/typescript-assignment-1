{
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    const sumArray = (param: number[]): number => {
        // for (let i = 0; i < param.length; i++) {
        // let checkNumber: number = param[i];
        // if (typeof checkNumber === 'number') {
        const result = param.reduce((a: number, b: number) => a + b);
        return result;
        // } else {
        // console.log("Please Provide a valid number array")
        // }
        // }
    };

    const output: number = sumArray([1, 2, 3, 4, 5]);
    console.log(output);
}