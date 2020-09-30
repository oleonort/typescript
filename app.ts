// -----------------------------------> PRIMITIVES
function add(num1: number, num2: number) {
    return num1 + num2;
}
console.log(add(1,2));
// console.log(add(1,'2')); // error at string

function reverseBoolean(initialValue: boolean) {
    return !initialValue;
}
console.log(reverseBoolean(true));
// console.log(reverseBoolean(1)); // error at number

function combineStrings(text1: string, text2: string) {
    return text1 + text2;
}
console.log(combineStrings('text', 'Text'));
// console.log(combineStrings(1, 'text')); // error at number

// --------------------------------> OBJECTS, ARRAYS, ENUMS
enum Role { ADMIN = 2, READ_ONLY = 'TEST', AUTHOR = 5 }

const person = {
    name: 'Artur',
    age: 29,
    hobbies: ['sports', 'cookies'],
    role: Role.ADMIN
};

// same as above
const personWithTSDescription: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role
} = {
    name: 'Artur',
    age: 29,
    hobbies: ['sports', 'cookies'],
    role: Role.ADMIN
};

// ----------------------------------> UNIONS, LITERALS, TYPE ALIASES
// aliases
type Combine = number | string; // union
type ConvertTo = 'as-string' | 'as-number'; // union of literals

function combine(
    input1: Combine,
    input2: Combine,
    shouldConvertTo: ConvertTo
) {
    if ( shouldConvertTo === 'as-string' ) {
        return input1.toString() + input2.toString();
    }

    if ( shouldConvertTo === 'as-number' ) {
        return +input1 + +input2;
    }
}

console.log(combine('20', '25', 'as-string'));
// console.log(combine(20, '25', 'as-numbe')); // typo in shouldConvertTo

// ---------------------------------->  FUNCTIONS
// return type is calculated and is number in this case
function addNumbers(num1: number, num2: number) {
    return num1 + num2;
}

// return type of this function is void, since it doesn't return anything
function printResult(num: number): void { // having void is optional
    console.log(num);
}