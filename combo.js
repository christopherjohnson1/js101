console.log('COMBO');

// Challenge #1
// Create a function called evenOdd that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.

const evenOdd = (int) => {
    if (int %2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    };
};

console.log(evenOdd(32));
console.log(evenOdd(21));





// Challenge #2
// given a number, find its opposite. 2 = -2

const numOpposite = (num) => {
    return -num;
};

console.log(numOpposite(3));
console.log(numOpposite(-3));




// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

const isPalindrome = (text) => {
    const cleanText = text.toLowerCase().replace(' ', '');
    const opp = cleanText.split('').reverse().join(''); 
    console.log('text', cleanText);
    console.log('opp', opp);
    if (cleanText === opp) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome('racecar'));
console.log(isPalindrome('popsicle'));
console.log(isPalindrome('Race car'));


// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide.

const animal = (str) => {
    if (str.toLowerCase() === 'alligator') {
        return 'small';
    } else {
        return 'wide';
    }
};

console.log(animal('alligator')); //small
console.log(animal('fish')); //wide
console.log(animal('Alligator')); //small