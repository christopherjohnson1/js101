console.log('Functions');

const nuggetizer = (animal) => {
    //console.log('animal', animal);
    const output = `processed ${animal}`;
    return output;
};

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('tire'));

const dogBreed = (dog) => {
    return `My favorite dog breed is ${dog}`;
};

console.log(dogBreed('lab'));
console.log(dogBreed('actually a cat'));

const fortyTwo = (num) => {
    return num + 42;
};

console.log(fortyTwo(23));
console.log(fortyTwo(20));

const oldAge = (birthYear) => {
    return 2099 - birthYear;
};

console.log(oldAge(1985));
console.log(oldAge(2013));