console.log('arrays');

const junkDrawer = ['hi' , 2, true, {name: 'Chris Johnson'}, [1,2,3,4]]; //can be string, number, boolean, object, array

const valuePrinter = (arr, indexValue) => {
    return arr[indexValue];
};

console.log(valuePrinter([1,2,3,4,5], 2)) //3
console.log(valuePrinter(['cat', 'dog', 'bear', 'turtle', 'fish'], 3)) // turtle
