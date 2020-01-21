console.log('OBJECTS');

//returns length of word
const wordLength = (word) => {
    return word.length;
};

console.log('num of letters' , wordLength('cat')); //3
console.log('num of letters' , wordLength('monkeybutt')); //10


// Check your age
const ageCheck = (age) => {
    if (age >= 21) {
        console.log('Party!!!!');
    } else {
        console.log('no drinks for you');
    }
};

ageCheck(12); // 'no drinks for you'
ageCheck(24); // 'Party!!!!!!!'


const expense = {
    dateCreated: '01/17/2020',
    location: 'Baja Burrito',
    cost: 12.57,
    isGood: true,
};

//dot notation
console.log(expense.cost);

//bracket notation
console.log(expense['cost']); //12.57

const employee = {
    firstName: 'Chris',
    lastName: 'Johnson',
    age: 34,
    section: 'Software Developer',
    timeEmployeed: '2 years',
    passDrugScreen: true,
    salary: 3000000000,
    collegeDegree: true,

};

console.log(employee.lastName); //Johnson


// Challenge
// Create function called statusMaker that takes in a single employee
// if the employee firstName starts with an M then add a key of status and a value of 'vip'
// if the employee firstName doesn't start with an M add a key of status and a value of 'peasant'
// return complete employee

const statusMaker = (emp) => {
    if (emp.firstName[0] === 'M') {
    emp.status = 'vip';
    } else {
        emp.status = 'peasant';
    }
    return emp;
};

console.log(statusMaker(employee));