//what is String
//A string in programming refers to a sequence of characters that are enclosed within double or single quotes
//In JavaScript, strings can be created using either single or double quotes.

let myString="What are the best practices for writing code?";
//length of string 
console.log(myString.length);


/*Extracting string => for extracting String we have 3 ways 
slice(start, end)
substring(start, end)
substr(start, length)
*/

//slice(start, end) method end not  inluded so add +1
console.log('Slice=>'+ myString.slice(0,4));
console.log('only start position=>'+ myString.slice(5));
// negative position =>  -1 means last element it will count from last element
console.log('slice with negative position=>'  + myString.slice(-1));


/*substring() method: This method returns a new string that is a part of the given
string between the start index and end index 

=> if we pass negative values it treated as 0 */

console.log("substring :"+myString.substring(9,12));
//if we pass negative value it counted from 0
console.log("when negative vlaue passed ==> " + myString.substring(-12));// o/p : myString fully printed

//substr(start position , length) method

console.log(" subStr ==> "+myString.substr(9,3));

/*replace("existing String", "replaceing String") method
The replace() method does not change the existing string it will entirely creates new string
The replace() method replaces only the first match
it is case sensitive
*/
let str = 'Hello World!';
console.log(`Original String : ${str}`); //Hello World!
console.log(`replaced String : ${ str.replace("World",  "Universe") }`); //op Hello Universe!
console.log(str);// original string not impacted

// replace only first match
 let me='sai krishna krishna';
 console.log('first match=>' + me.replace("krishna", "rama"));

 // if we want to replace  all matches then use replaceAll()
 console.log('all matches==>'+me.replaceAll("krishna","rama"));


 //toUpperCase()
 //toLowerCase()
 console.log(me.toUpperCase());
 console.log(me.toLowerCase());

 //concat()
 var s1="I am";
 var s2=" javasript developer";
  //way 1
  console.log(`${s1}${s2}`);
  //way2
  console.log(s1+s2);
  //way3
  console.log(s1.concat(s2));

  //trimmig 
  // trim() , trimStart(), trimEnd()
  var  trimMe ="   sai    ";
  console.log(`withOut spaces=>${trimMe.trim()}`);
  console.log(`trimStart without front spaces=> ${trimMe.trimStart()}`);
  console.log(`trimend withOut back spaces=> ${trimMe.trimEnd()}`);
  

  // if we want add something in front or back  of a string we can use padding
  // padStart(length, "String") and padEnd(lenght ,"string");
  
  let text = "5";
  text = text.padStart(5,"*");
  console.log(text);

  let amount="100";
  amount=amount.padEnd(4,"$");
  console.log(amount) ;


  /*to seprate the string 
    split()
    =>it will return array of splitted strings
    => we need to provide the separator as a argument
    => converting string into array
  */
  var splitString ="Hello World JavaScript is Fun";
  var resultArray =splitString.split(" ");
  console.log(resultArray);

  // array to string => toString(), join()
  //toString => byDefault (, coma) is the separator
  console.group('array to String');
    console.log('array to String using toString() method==> '+ resultArray.toString());
    // join("separator") we can give separator what ever we want
    console.log('using join() method ==>'+resultArray.join("*"));
    console.log('using join() method ==>'+resultArray.join(" "));

//Search the String
//indexOf() => if value presents it returns index  otherwise it gives it returns -1
var searchString ="This is my sample string";
console.log('index of string ==> '+ searchString.indexOf("is")); //op: 2
console.log('index of string ==> '+ searchString.indexOf("ih")); //op: -1
//lastIndexOf() => It Returns the last occurrence of a specified string within another string.
searchString= "This is my sample string This is my second Sample string"
console.log('Last Index Of==> ' + searchString.lastIndexOf("This")) // op : 79

console.log(searchString.indexOf("sample"));

console.log('with slice ==> '+searchString.slice(searchString.indexOf("sample"), searchString.indexOf("sample")+6));

//includes() =>it returns true if value is present otherwise false
console.log('Is this is my sample string includes "my"?=>'+searchString.includes("my")); //op:true

//startsWith() if string  starts with given value then it returns true otherwise false
console.log('checking weather string is started or not==> '+ searchString.startsWith("This")); //op: true
//endsWith() => If a string ends with the given string, it returns true, otherwise false
console.log('checking whether the string is ended or not==> '+ searchString.endsWith("string")); //op: true