/*javascript functions, we can declear js functions in 3 ways
1.function declaration
2.function expression  or anonymous function
3.arrow function ...introduced in ES6
Syntex: () => {} 
*/
//1.function declaration
//function to display the current date and time
 function showDateTime() {    
    var now = new Date();
    return now;
} //it supports hoisting
console.log(showDateTime());

//2.function expression  or anonymous function
let datetime= function (){
    var dateTime = new Date();
    return dateTime;
}//it does not supports hoisting
console.log(datetime());

//3. anonymous function
 let timedate = ()=>{
    return new Date();
 }
 console.log(timedate());

 //some examples

 let greet = (username) => {
    return `${username} welcome to JavaScript`;
 }
 console.log(greet("saikrishna"));

 // if out program has only one statement then we can use arrow function like this also
 let sum= message =>{
    `${message} message received`;
 }


 console.log("==============Callback function===================");

 //callback function
 let processData=(data, callback)=>{
   setTimeout(()=>{
       try{
           let result = data*2;
           callback(result);
       }catch(e){
           console.error(`Error occured ${e}`);
       }
   },500);
 };

 processData(10,(res)=>console.log(res));  //20 

 //in simple programs
 function welcome(name, callbackfunction){
   let greeting= `hello ${name}`;
    callbackfunction(greeting);
 }

 function hai(message){
    console.log('HAI');
 }

 function bye(){
    console.log(bye);
 }

 welcome('krishna', hai) ;// HAI
 welcome('sai', bye); //bye