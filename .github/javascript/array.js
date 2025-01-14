// array is a single variable who have contain multiple value with different datatypes and its based on number index. Array are like objects.
// difference in array and object:- array use number index in javascript and object use named index. 
const data = ["rock", "Sten", "Brenden"]; // example of an array 
// console.log(data);
// console.log(data.toString());


// create array with many types
// 1st - simple array 
const car = ["Giord", "Supra", "Sterio"];
// console.log(car);

// 2nd - using empty array and add value using index
const cars = [];
cars[0] = "Supra";
cars[1] = "BMW";
cars[2] = "Beamer";
// console.log(cars);

// 3rd - using *new* keyword 
const yard = new Array("1stYard", "2ndYard", "3rdYard");
// console.log(yard);


// accessing array elements with index -- array use number index for access elements
// if you access 1st element then use 0 index and when you use last element then use nagative index -1 . 

const person = ["rockyard", "stella", 50];
const nameP = person[0]; // index with start from zero 0 is first index
const age = person[2]; 
// console.log(nameP);

// changing array elements using index
person[0] = "William John";
const updateName = person[0];
// console.log(updateName);

// Imp:-  Convert Array to string
    const slcInfo = ["Preigs", "Otuids", "Husfds"];
    const updateInfo = slcInfo.toString(" ");
    // console.log(updateInfo);
    // console.log(typeof updateInfo);
    // console.log(updateInfo.length); // find array length    
    

/* --------------------Array Methods ------------------- */
const infoOxyva = ["Boss", "ceo", "manager", "director"]; // common array for check all methods 
// 1. length -- find array length 
//    console.log( "Array Length = " + infoOxyva.length);

// 2 toString -- convert array to string 
    const infoOxyvaString = infoOxyva.toString(" ");
    // console.log(infoOxyvaString);
    // console.log(typeof infoOxyvaString);
    
 // 3. at - get element(value) using at into index. you can use [] for get element also 
    const infoOxyvaGet = infoOxyva.at(1); // using at method
    const infoOxyvaGet2 = infoOxyva[2]; // using sqaure brackes
    // console.log(infoOxyvaGet2);
       
// 4. join -- convert all array into a string with with specifiec separator 
    const infoOxyJoin = infoOxyva.join("|");
    // console.log(infoOxyJoin);
    
// 5. push -- adding elements in array in last index and you can use length 
    infoOxyva.push("Human Resource");
    infoOxyva[infoOxyva.length] = "Team Leader"; // use length 
    // console.log(infoOxyva);

// 6. pop -- remove element from an array at last index 
    infoOxyva.pop();
    // console.log(infoOxyva);
 
// 7. shift -- remove first element from an array 
    infoOxyva.shift();
    // console.log(infoOxyva);
    
// 8. unshift -- adding element at starting array
    infoOxyva.unshift("Boss");
    // console.log(infoOxyva);
    
// 9. delete method -- delete element is existing array (issue - leaves undefined holes) - use pop() and shiftn
    // delete infoOxyva[0]; 
    // console.log(infoOxyva); 

// 10. concat array (merge array)
    const employeOxyva = ["shivi", "shamar", "nishak"];
    const salesOxyva = ["Shashank", "ihana", "Usha"];
    // const allMemberOxyva = infoOxyva.concat(employeOxyva); // merge one array 
    // const allMemberOxyva = infoOxyva.concat(employeOxyva, salesOxyva); // merge multiple array 
       const allMemberOxyva = infoOxyva.concat("Shashank"); // add string value with concat method
    // console.log(allMemberOxyva);
    
// 11. copywithin -- copy elements and replaced value in existing array 
    const state = ["HR", "HP", "PB", "UK"];
    const updateState = state.copyWithin(2);
    // console.log(updateState);

// 12. flat -- concat all array flat and return a new array with subarray 
    const stdArray = ["nittu", "Kittu", ["ritu", "ramesh"], ["maishu", "reshu"]];
    const flatStdArray = stdArray.flat();
    // console.log(flatStdArray);
    
// 13. flatmap - flatmap first maps all elements of an array and return a new array with flated values.
    const newArray = [1, 2, 3, 4, 5];
    const mapNewArray = newArray.flatMap(events => [events, events * 5]);
    // console.log(mapNewArray);
    
// 14.  splice - adding new elements in array  
    const propName = ["Solis", "John deere", "Tata", "Eicher"];
    propName.splice(0, 0, "Mahindra", "Messy");
    // console.log(propName);
// 15. Slice - get a part from an array like cut a portion of array 

    const myGamer = ["niza", "Mizo", "Liaan", "Lizo", "Dynamo", "Jonathan"]
    const girlGamer = myGamer.slice(0, 3)
    const boysGamer = myGamer.slice(3)

    console.log(girlGamer);
    console.log(boysGamer);

    

























































