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