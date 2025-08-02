{
    // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

    const countWordOccurrences = (sentence: string, word: string): number => {
        let count = 0;
        const sen = sentence.split(".");
        for (let i = 0; i < sen.length; i++) {
            const res = sen[i].split(" ");
            for (let i = 0; i < res.length; i++) {
                if (word.toLowerCase() === res[i].toLowerCase()) {
                    count++;
                }
            }
        }
        return count;
    }

    const param1 = 'I love Typescript.Typescript is great.Currently typescript is giving me headache';
    const param2 = "typescript"
    const output = countWordOccurrences(param1, param2);
    console.log(output);
    //
}