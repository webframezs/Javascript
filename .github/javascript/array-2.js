// array search methods 

// 1. indexOf -- find index of specifiec charchtar in array and when not match value its return -1 and if you want show number index properly then addition 1 in index value. 
    const teacher = ["Hitesh", "Nakul", "Vishvas", "Pawan"];
    let position = teacher.indexOf("Vishvas") + 1; // for properly show position add 1 and search first index 
    // console.log("index of best teacher:- " + position); 

// 2. lastIndexOf - find last index of a specifec charchter and return value last accuirance if we have multiple same value.
    const students = ["Praveen", "Sourabh", "Suvan", "Pinnu", "Suvan", "Sivansh", "Shaanshu", "Suvan"];
    const positionStudent = students.lastIndexOf("Suvan") + 1;// search last index 
    // console.log("Index Of Best Student:- " + positionStudent);

// 3. includes - check elements in array in present 
    // console.log(students.includes("Pinnu"));

// 4. find - return first element thats pass first function in array 
    // const broshder = ["hiras", "Neelud", "chinag", "hisouds"];
    const numbers = [2, 5, 7, 10, 16, 19, 22, 29, 30];
    const firstFind = numbers.find(firstFindFunc);
    // console.log(firstFind);

    function firstFindFunc(value) {
        return value > 19;
    }

// 5. findIndex - return first element's index that's pass in function 
   const dataNumbers = [5, 9, 14, 19, 26, 31, 33, 41];    

    // console.log(dataNumbers.findIndex(lastIndexOf));
    
    function lastIndexOf(value, index, array) {
       return value > 17;
    } 


/* -------------------Array Sort methods -------------------*/

// 1. sort method - set array into alphabatically A to Z Format 
    const winnerName = ["Johny", "Bresta", "Maickel", "Roman", "Apendense"]; // change in original array 
    winnerName.sort();
    // console.log(winnerName);

    // sort numbers with function arguments  
    const points = [100, 28, 21, 96, 81];
    points.sort(function(a, b){ return a - b });
    console.log(points);

// 2. reverse method - reverse an array and not make any chnages in original array 
    const reverseName = winnerName.reverse();
    // console.log(reverseName);

// 3. toSorted - method similar job of sort but difference is sorted not any change in original array
    const state = ["HR", "HP", "PB", "AN", "MH", "DL"];
    const stateSort = state.toSorted();
    // console.log(state);
    // console.log(stateSort);

// 4. toReversed - similar to reverse but it's doesn't make any effects on original array 

    const villageName = ["kundu", "Pabra", "Choutala", "Bind", "Jharli"];
    const wayVillage = villageName.toReversed();
    // console.log(villageName);
    // console.log(wayVillage);




    