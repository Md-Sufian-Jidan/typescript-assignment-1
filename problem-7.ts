{
    // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const totalYear = new Date().getFullYear() - this.year;
            return totalYear;
        }
    }

    // Sample Input 1:
    const car = new Car("Honda", "Civic", 2018);
    const carAge = car.getCarAge();
    console.log(carAge)

    //
}