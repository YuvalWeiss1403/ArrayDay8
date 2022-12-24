//Ex 1
//--------------------------------------------------------------------------------------------------------
//1) Write a function that takes an array of numbers and removes the first and last elements of the array, 
//then returns the modified array.
function removeFirstLast(arr){
    arr.pop();
    arr.shift();
    return arr;
}

console.log(removeFirstLast([3,5,8,6,3]));

//2) Write a function that takes an array of strings and adds a new string to the beginning and to the end
// of the array, then returns the modified array.

function addstartend(arr,newstring){
    arr.push(newstring);
    arr.unshift(newstring);
    return arr
}
console.log(addstartend(["hello","friend","have","a","nice","day"],"!"));

//3) Write a function that takes an array of numbers and returns true if the array includes the number 5,
// and false otherwise.

function ifIncludesFive(arr){
    if(arr.includes(5)){
        return true;
    }else{
        return false;
    }
}

console.log(ifIncludesFive([3,7,4,8,5]));

//4) Write a function that takes two arrays of numbers and returns a new array that combines the elements
// of both arrays. 

function combineArrays(arr1,arr2){
    let combinedArray = arr1.concat(arr2);
    return combinedArray;
}

console.log(combineArrays([2,3,4],[5,6,7]));


//5) Write a function that takes an array of numbers and a number n, and returns true if the number n appears
// in the array, and false otherwise.

function ifInArray(arr,num){
    if(arr.includes(num)){
        return true;
    }else{
        return false;
    }
}

console.log(ifInArray([3,5,7,9],2));


//6) Write a function that takes an array of strings and a string s, and returns the index of the first
// occurrence of the string s in the array.
function indexOfStringIfArray(arr,s){
    return arr.indexOf(s);
}

console.log(ifInArray([3,5,7,9,4],5));


//7) Write a function that takes an array of numbers and returns a new array with the elements in the reverse
// order.

function reverseArray(arr){
    return arr.reverse();
}

console.log(reverseArray([2,3,4,5,6]));


//8) Write a function that takes an array of numbers and returns a new array with the elements in the reverse
// order only if the array length is between 5 to 10.

function returnIfBetweenRange(arr){
    if(arr.length >=5 && arr.length<=10){
        return arr.reverse();
    }else{
        return arr;
    }
}

console.log(returnIfBetweenRange([2,3,4,5,6,7]));


// 9) Write a function that takes an array of numbers and a number n, and returns a new array with the elements
// in the reverse order, but with the first element removed, if the number n appears in the array. 
//If n does not appear in the array, the function should return the original array. 

function changeArray(arr,num){
    if(arr.includes(num)){
        arr.reverse();
        arr.shift();
        return arr;
    }else{
        return arr;
    }
}

console.log(changeArray([2,3,4,5,6],5));



//10) Write a JavaScript function to clone an array.
//  For example :
// console.log(array_Clone([1, 2, 4, 0])); // output: [1, 2, 4, 0]
// console.log(array_Clone([1, 2, [4, 0]])); //output : [1, 2, [4, 0]]

function cloneArray(arr){
    // let newArr = JSON.parse(JSON.stringify(arr));
    let newArr = [...arr];
    return newArr;
}

console.log(cloneArray([1,2,4,0]));

//11)  Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will 
// return the first 'n' elements of the array. Go to the editor
// For Example :
// console.log(first([7, 9, 0, -2])); // output: 7
// console.log(first([],3)); // output: []
// console.log(first([7, 9, 0, -2],3)); // output: [7, 9, 0]
// console.log(first([7, 9, 0, -2],6)); // output: [7, 9, 0, -2]
// console.log(first([7, 9, 0, -2],-3)); // output: []

function firstElements(arr,paramN){
    let first = arr.splice(0,paramN);
    return first ;
}

console.log(firstElements([7,9,0,-2],3));


//12) Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return 
// the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2])); // output: 2
// console.log(last([7, 9, 0, -2],3)); // output: [9, 0, -2]
// console.log(last([7, 9, 0, -2],6)); // output: [7, 9, 0, -2]

function lastElementInArray(arr){
    return arr.at(-1);
}

console.log(lastElementInArray([2,3,4,5,6]));

//13) Write a function that checks whether the first and last elements are equal. If they are equal - return true
// otherwise return false.

function ifLastFirstEqual(arr){
    if(arr.at(-1)===arr.at(0)){
        return true;
    }else{
        return false;
    }
}

console.log(ifLastFirstEqual([2,3,4,5,2]));

//14) Write a function that checks whether the edges of the array are equal (first and last element) and if so,
// check how many members are between the edges. If not, return false

function middleNumberInArray(arr){
    let copyOfArray =[...arr];
    copyOfArray.pop();
    copyOfArray.shift()
    return copyOfArray.length;
}

console.log(middleNumberInArray([2,3,4,5,2]));



//Ex 2
//--------------------------------------------------------------------------------------------------------
function ex2Arrays(){
    let weirdArray = ['Inception','Spiderman','Tuesday'];
    let weirderArray = ['Green','Saturday','Friday','Wednesday']
    weirderArray.reverse();
    let weirdAraaysCombined = weirdArray.concat(weirderArray);
    let movies = [weirdAraaysCombined.shift()];
    movies.push(weirdAraaysCombined.shift());
    let colors = [weirdAraaysCombined.splice(weirdAraaysCombined.indexOf('Green'),1)];
    weirdAraaysCombined.unshift('Monday');
    weirdAraaysCombined.push('Thursday');
    weirdAraaysCombined.push('Sunday');
    let weekend = [weirdAraaysCombined.splice(weirdAraaysCombined.indexOf('Sunday'),1)];
    weekend.push(weirdAraaysCombined.splice(weirdAraaysCombined.indexOf('Saturday'),1));

    console.log("weirdArray: " + weirdArray);
    console.log("weirderArray: " + weirderArray);
    console.log("weirdAraaysCombined: "+ weirdAraaysCombined);
    console.log("movies: " + movies);
    console.log("colors: " + colors);
    console.log("weekend: " +weekend);

    //Ex 3 - 3
    weirdAraaysCombined.splice(3,0,'keys' );
    console.log("weirdAraaysCombined: "+ weirdAraaysCombined);
    weirdAraaysCombined.splice(weirdAraaysCombined.indexOf('instruction manual'),1);
    console.log("weirdAraaysCombined: "+ weirdAraaysCombined);
    weirdAraaysCombined.splice(2,3,'cat','fob','string cheese');
    console.log("weirdAraaysCombined: "+ weirdAraaysCombined);

}

ex2Arrays();


//Ex 3 - 1
//--------------------------------------------------------------------------------------------------------
function practiceFileEx3_1(){
    let practiceFile = ["273.15."];
    practiceFile.push(42);
    console.log(practiceFile);
    practiceFile.push("hello");
    console.log(practiceFile);
    practiceFile.push(false,-4.6,"87");
    console.log(practiceFile);
    }

console.log(practiceFileEx3_1());
    


//Ex 3-2
//--------------------------------------------------------------------------------------------------------
function practiceFileEx3_2(){
    let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
    cargoHold[cargoHold.indexOf('slinky')]= 'space tether';
    console.log(cargoHold);
    console.log(cargoHold.pop());
    console.log(cargoHold.shift());
    cargoHold.unshift(1138);
    cargoHold.push('20 meter');
    console.log(`final array: ${cargoHold} array length: ${cargoHold.length}`);
}
practiceFileEx3_2();


//Ex 3-3 is in Ex 2

 //Ex 4
 //--------------------------------------------------------------------------------------------------------
 function practiceFileEx3_4(){
    let holdcabinet1 = ['duct tape','gum',3.14,false,6.022e23];
    let holdcabinet2 = ['orange drink','nerf toys','camera',42,'parsnip'];
    console.log("concat " + holdcabinet1.concat(holdcabinet2));
    console.log("after concat " + holdcabinet1);
    console.log("slice(1) " + holdcabinet1.slice(1));
    console.log("slice(0,3) " + holdcabinet1.slice(0,3));
    console.log("after slice " + holdcabinet1);
    holdcabinet1.reverse();
    holdcabinet2.sort();
    console.log("after reverse " + holdcabinet1);
    console.log("after sort " + holdcabinet2);
 }
 practiceFileEx3_4();

 
 //Ex 5 -1 
 //--------------------------------------------------------------------------------------------------------
 function practiceFileEx5_1(){
    let str = 'In space, no one can hear you code.';
    console.log(str.split());
    console.log(str.split('e'));
    console.log(str.split(' '));
    console.log(str.split(''));
}

 practiceFileEx5_1();
 //the purpose of the parameter inside the () is the diveder of the string.

 
 //Ex 5 -2
 //--------------------------------------------------------------------------------------------------------
 function practiceFileEx5_2(){
    let arr = ['B', 'n', 'n', 5];
    console.log(arr.join());
    console.log(arr.join('a'));
    console.log(arr.join(' '));
    console.log(arr.join(''));
 }

 practiceFileEx5_2();

 //the purpose of the parameter int the () is to join the array with the parameter between each member.

 
 //Ex 5 -3 
 //--------------------------------------------------------------------------------------------------------

//No -  none of the functions changes the original array


//Ex 6 - Bonus 
//--------------------------------------------------------------------------------------------------------
function practiceFileEx6(){
    //1)
    let element1 = ['hydrogen', 'H', 1.008];
    let element2 = ['helium', 'He', 4.003];
    let element26 = ['iron', 'Fe', 55.85];
    //2)
    let table =[];
    table.push(element1);
    table.push(element2);
    table.push(element26);
    console.log(table);
    //3)
    console.log(table[1]);
    console.log(table[1][1]);
    //4)
    console.log(`element 1 mass: ${table[0][2]} . element 2 name: ${table[1][0]}. element 26 symbol: ${table[2][1]}`);
    //5)
    let my3dimensionalArray =[];
    my3dimensionalArray.push(table);
    console.log(`element 1 name: ${my3dimensionalArray[0][0][0]} . element 2 symbol: ${my3dimensionalArray[0][1][1]}. element 26 mass: ${my3dimensionalArray[0][2][2]}`);
}

practiceFileEx6();

