// Define an interface for the Person type to ensure type safety
interface Person {
    name: string;
    dateOfBirth: string;
    children: number;
    country: string;
    knowsProgramming: boolean;
}

// Create an array of persons with the provided data
const persons: Person[] = [
    {
        name: "Helen McCalum",
        dateOfBirth: "1/24/2000",
        children: 3,
        country: "Indonesia",
        knowsProgramming: false
    },
    {
        name: "Kristy Linzee",
        dateOfBirth: "8/14/1999",
        children: 0,
        country: "China",
        knowsProgramming: false
    },
    {
        name: "Uta McCaughey",
        dateOfBirth: "10/17/1984",
        children: 4,
        country: "Indonesia",
        knowsProgramming: true
    },
    {
        name: "Sloan Astles",
        dateOfBirth: "8/7/1981",
        children: 1,
        country: "Azerbaijan",
        knowsProgramming: true
    },
    {
        name: "Rhody Merrgan",
        dateOfBirth: "4/30/2000",
        children: 1,
        country: "Finland",
        knowsProgramming: true
    }
];

// 1. Check if the first person is older than the last person
console.log("1. Is first person older than last person?");
const firstPersonBirthDate = new Date(persons[0].dateOfBirth);
const lastPersonBirthDate = new Date(persons[persons.length - 1].dateOfBirth);
if (firstPersonBirthDate < lastPersonBirthDate) {
    console.log("Yes, the first person is older.");
} else {
    console.log("No, the first person is not older.");
}

// 2. Check if 2nd person has the same number of kids as 3rd person
console.log("\n2. Does 2nd person have same number of kids as 3rd person?");
if (persons[1].children === persons[2].children) {
    console.log("Yes, they have the same number of children.");
} else {
    console.log("No, they have different number of children.");
}

// 3. Check if 1st and 4th persons know how to program
console.log("\n3. Do 1st and 4th persons know programming?");
if (persons[0].knowsProgramming && persons[3].knowsProgramming) {
    console.log("Yay!");
} else {
    console.log("LMGTFY");
}

// 4. Check 2nd person's nationality with switch statement
console.log("\n4. Greeting based on 2nd person's nationality:");
switch (persons[1].country.toLowerCase()) {
    case "iceland":
        console.log("Hæ");
        break;
    case "spain":
        console.log("Hola");
        break;
    case "korea":
        console.log("여보세요");
        break;
    default:
        console.log("Hello");
}

// 5. Use ternary operator to check if 2nd person's name is longer than 5 characters
console.log("\n5. Is 2nd person's name longer than 5 characters?");
const isNameLong = persons[1].name.length > 5 ? "Name is long" : "Name is short";
console.log(isNameLong);