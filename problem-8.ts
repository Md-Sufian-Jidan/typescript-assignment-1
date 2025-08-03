{
    // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

    type Person = {
        name: string;
        age: number;
        email: string
    }
    const validateKeys = (param: Person, property: (keyof Person)[]): boolean => {
        for (const key of property) {
            if (!(key in param)) {
                return false;
            }
        }
        return true;
    };
    // return property.every((key) => key in param);

    // Sample Input:
    const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
    const output: boolean = validateKeys(person, ["name", "age"]);
    console.log(output);

    // Sample Output:
    // true;
    //
}