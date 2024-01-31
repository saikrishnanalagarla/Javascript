console.log('Map collection');

// Map - a built-in object in JavaScript that stores key value pairs, similar to an Object
// creating map object
let myMap = new Map();

// adding elements to map
myMap.set("Name", "SaiKrishna"); // String String
myMap.set(101, "ramana"); //Number ,String  => here key any type

//printing map
console.log(myMap);

// getting the value using get() method
console.log(myMap.get("Name"));

//has method used to check whether a particular key is present or not in the map or not
console.log('has=>'+myMap.has("Name"));

// clear  method used to remove all the entries from the map
myMap.clear();

// getting length  of map
console.log(myMap.size);

//declearing set with default values
let capitals= new Map([
    ["Telengana", "hyderabad"],
    ["Karnataka", "Banglore"],
    ["Andhra Pradesh","Vijayawada"]
]);
//printing of  set
console.log(capitals);

//iterating  over sets using for of loop
for (var item of capitals) {
    console.log(item);
}
//desturcturing  assignment
for(var [state , capital] of capitals){
    console.log(`${capital} is the Capital of ${state} `);
}

//accessing only keys
for(let curItem of capitals.keys()){
    console.log(curItem);
}

//Accessing only values
for(let values of capitals.values()){
    console.log(values);
}
