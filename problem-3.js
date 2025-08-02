{
    // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
    var countWordOccurrences = function (sentence, word) {
        var sen = sentence.split(" ");
        var count = 0;
        for (var i = 0; i < sen.length; i++) {
            if (word.toLowerCase() === sen[i].toLowerCase()) {
                count++;
            }
        }
        return count;
    };
    var param1 = 'I love Typescript.Typescript is great.Currently typescript is giving me headache';
    var param2 = "typescript";
    var output = countWordOccurrences(param1, param2);
    console.log(output);
    //
}
