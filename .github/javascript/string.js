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

//    4. At() method for find special charachters based on index. it will be work nagative value like: -1 
        const country2 = "Uganda"
        // console.log(country2.at(-6));

//    5. [] square brackets for accessing value in string        
        const related = "Indin&Nepal"
        // console.log(related[9]);

//    6. Slice give a portion of first and second parameter between's meaens slice is extract part of first and second parameter. 
        const names = "Riyan, Himesh, Gyans"
        const spcName = names.slice(7, 13); // 7 is starting index & 13 is ending index. mind it index is start from 0 index in javascript 
        // console.log(spcName);
        
//    7. Substring similar to slice but difference is when i pass a end argument with nagative value its treats like 0 index and 
//       when first parameter is greater then second parameter when he treats reverse example (14, 7) and he treats like (7, 14)
        const names2 = "Riyan, Himesh, Gyans"
        const substrName = names2.substring(13, 7);
        // console.log(substrName);

//    8. substr() method is also similar to slice but basic difference is, the slice and substring both work with index based parameter.
//       but in substr first parameter define index and second parameter define length of string. 
//       when i pass one argument it will be extract and return value from starting index to end value. 
//       and when i pass nagative value it will be work with end position and return value with nagative parameter. 
        const previe = "Luna, Hipas, Tussyn"
        const strpreive = previe.substr(-6)
        // console.log(strpreive);
       
//    9. toUpperCase() methos for return value with uppercase latters.
//       and toLowerCase() method for return value with lowercase latters.
        const ofcname = "Soft Discovery"
        // console.log(ofcname.toUpperCase());
        // console.log(ofcname.toLowerCase());

//   10. concat() method for adding (joins) 2 or more strings 
          let firstName = "Web"
          let lastName = "Framze"
          let baseName = "Pvt.Ltd."
          let fullName = firstName.concat(lastName) // we can use + oprator for concat(addition )
          let fullNameBase = fullName + " " + baseName    // + Oprator for addition means concat  
        //   console.log(fullName);
        //   console.log(fullNameBase);
          

//    11. trim() method - remove whitespace from both side of a string 
           const bigName = "             Richard Macols           "
           const trimedName = bigName.trim()
        //    console.log(trimedName);
           
//    12. trimStart() method - remove whitespace from starting of a string only 
//        trimStart() method - remove whitespace from ending of a string only 
           const named = "       stefen Henson            "
           const trimedsName = named.trimStart() // remove whitespace from starting 
           const trimedEName = named.trimEnd() // remove whitespace from ending 
        //    console.log(trimedsName);
        //    console.log(trimedEName);
           

//     13. In javascript string padding is a concept of giving padding at the beggining and ending. we have two methods; 
//         padStart() --  giving pads from starting in a string 
//         padEnd() -- giving pads from ending in a string
//          const divec = 10 // if we have a numbers value so firstly we can convert number into string 
//          const strDivec = divec.toString()   // when you use this way then print this variables give pad to this variable     
            const divec = "10" // please remmeber how many length you define in variables .
            const strPadDivec = divec.padStart(8, "P")
            const endPadDivec = divec.padEnd(6, "D")
        //     console.log(strPadDivec);
        //     console.log(endPadDivec);

//     14. repeat() method - for return value with copy of string 
           const para = "Nishaan"
           const repPara = para.repeat(2)
        //    console.log(repPara);
           
//     15. replace() method - return string value with replace content of a string. 
//         replaceAll() method - return all specifiec value replaced 
            const value = "Join Our Community and Company. Our Company have bast technology. Company is envirmental setup!"
            const replValue = value.replace("Company", "Organisation")
            const replAllValue = value.replaceAll("Company", "Organisation")
        //     console.log(replValue);
        //     console.log(replAllValue);

//     16. spilit() method - convert string to an array
           const hobbies = "Vollybol, Cricket, Swimming"
           const myHobbies = hobbies.split(",")
           console.log(myHobbies);
           console.log(typeof myHobbies); // datatype of var
           console.log(typeof hobbies);   // datatype of var
           
           
           