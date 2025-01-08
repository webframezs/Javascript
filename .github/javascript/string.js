// javascript strings are primitive and litterls 

const userName = 'Sourabh'; // strings for storing text values 
// console.log(userName);
// console.log(typeof userName); // typeof function for know data type of your variables array and objects.

// template String are used for inside string allow to use single and double coats (using backticks).

const userInfo = `My name is "Praveen"`; // you can use single and double coats inside strings (case-sensitive).
// console.log(userInfo);
// console.log(userInfo.length); // find length for a string

// Escapre characters 
const person = "Today is a \"Holiday\""; // \"\" for put a string inside a string 
// console.log(person);
// console.log(typeof person); 

// console.log("Praveen" + "Dahiya"); // you can use addition opraters for string addition

const person2 = new String("Suanaa"); //  when you create string using new keyword when its datatype converts into object bacause its return value is in array
// console.log(person2);
// console.log(typeof person2);

// console.log(person === person2);

const text = "Rocky";
const text2 = new String("Rocky");

// console.log(text === text2); // when you use double equal when returns value is true and when you use triple then return false because triple equal match data type. 


//   **************** String Methods *******************
//    1. length for find string's length 
        let paraLength = "Vision is a apple devices you know ?";
        let pLength = paraLength.length;
        // console.log(pLength);

//    2. charAt for find special character in a string base on index.
          const country = "Albenia"
          const secchr = country.charAt(1);
        //   console.log(secchr);

//    3. charCodeAt for find charachters code in string based on index.
        const country1 = "United Kingdom"
        const charCode = country1.charCodeAt(3)
        // console.log("char code is: " + charCode);

//    4. At() method for find special charachters assigned on index. it will be work nagative value like: -1 
        const country2 = "Uganda"
        // console.log(country2.at(-6));

//    5. [] square brackets for accessing value in string        
        const related = "Indin&Nepal"
        // console.log(related[9]);

//    6. Slice 
        const names = "Riyan, Himesh, Gyans"
        const spcName = names.slice(8, 14);
        console.log(spcName);
        