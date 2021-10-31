/* 
1.varaible value not assigned
2.function but didn't write return anything
3.just wrote return but didn't return anything
4.parameter that isn't passed
5.property that doesn't exits in an objects
6.accessing array element out of range
7.accessing deleted array element
8.explicitly set value to undefined
*/

let first;
console.log(first);


function add(num1, num2){
    const sum = num1 + num2;
}
const result = add(3,4);
console.log(result);

const info = {name:'sagar', profession: null};