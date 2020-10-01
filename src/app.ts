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

// ------------------------------------> FUNCTION TYPES
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; // returns error since not correct function type is assigned
console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});

// -------------------------------------> UNKNOWN TYPE
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Artur';

// need to check for type since TS doesn't allow unknown to be assigned to any other type without check
if (typeof userInput === 'string') {
    userName = userInput;
}

// ---------------------------------------> NEVER TYPE
function generateError(message: string, code: number): never { // never returns anything
    throw {
        message,
        errorCode: code
    };
}

generateError('An error occurred!', 500);
