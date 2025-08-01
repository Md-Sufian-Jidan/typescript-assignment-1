{
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    const removeDuplicates = (param: number[]): number[] => {
        const arr: number[] = []
        for (let i = 0; i < param.length; i++) {
            let num: number = param[i];
            if (num !== param[i]) {
                arr.push(num);
            }
        }
        return arr;
    };

    const output: number[] = removeDuplicates([1, 1, 2, 3, 4, 5, 2, 3, 4, 5]);
    console.log(output);
}