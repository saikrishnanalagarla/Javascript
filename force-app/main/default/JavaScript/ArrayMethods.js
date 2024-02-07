//Array methods 

console.log('Array methods');

/* we can add elements  to an array using the 
unshift() method =>  it adds one or more elements to the beginning of an array and returns the new length
push()  method => It appends one or more elements to the end of an array and returns the new length
spread operator
*/

//unshift method
let arr = [1,2];
console.log('Array type ==>'+ typeof(arr));
console.log('before adding element=>'+ arr);
//length of an array
console.log('before adding element length ==>'+ arr.length);
console.log('entering elements begining of an array length==>'+arr.unshift(0));// it returns new array length
console.log(arr);

//push method
console.log('adding element end of an array ==> ' + arr.push(3));
console.log('new elements '+ arr);


//spread operator
//at begining
arr = [4 , ...arr];
//at ending
arr = [...arr, 5];

console.log(arr); // OP: [ 4, 0, 1, 2, 3, 5 ]


//remove elements from array
//using pop() method => removes elements from end of an array and return removed element
//shift() method => removes element from begining of an array

//pop ()
console.log('removing last element using pop()==> ' + arr.pop());
console.log(arr); //OP: [ 4, 0, 1, 2, 3 ]
//shift
console.log('removing first element using shift()==> ' + arr.shift()) ;
console.log(arr); //OP [ 0, 1, 2, 3 ]

//modifying elements  in array
//replace 3 with 10
arr[3]= 10;
console.log("after replacing value==>"+ arr) //OP: 0,1,2,10

//removeing duplicates from array
let duplicateArr= ["sai", "gopi", "sai"];
console.log("array having duplicates==>"+duplicateArr);
let uniqueArr= new Set(duplicateArr);
console.log("Array after removing duplicates==>"+uniqueArr);

//search element
//indexOf // it returns  the index of that element if found otherwise -1
//includes // it return true or false

console.log(arr.indexOf(10)); //OP : 3
console.log(arr.indexOf(11)); //OP : -1
//includes
console.log(arr.includes(10)); //OP TRUE

//converting array into string
//toString() => all elements  are converted to a single string separated by comma
//join() =>  we can provide any separator between elements
let tostr=arr.toString();
console.log(typeof tostr); //OP: string
console.log('toString() ==> '+arr.toString()); 

//join 
let joinStr = arr.join("*"); 
console.log(joinStr); //0*1*2*10
console.log(typeof joinStr); // OP:string

//splice  (used for adding and deleting elements )
//slice    ( used for getting sub-part of an array)

//splice(param1, param2, rest);
//param1 ==> position where new element will be added (index Position)
//param2 ===> number of elemnts which need to be removed from starting point
//rest   === > elements which needs to be added at starting point

arr.splice(2,0, 100,200,300); 
console.log('after splice==> '+arr);  //OP : 0,1,100,200,300,2,10 

// first items will be removes
arr.splice(0,2);
console.log(arr);



