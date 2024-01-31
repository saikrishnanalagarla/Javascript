console.log('Set collection');
//set is a collection of items stored in key value pairs, but without the use of keys
let  setCollection = new Set(); 
// add method
setCollection.add("Apple");
setCollection.add("banana");
setCollection.add("orange");
setCollection.add("Apple");
console.log(setCollection); // { "Apple", "banana", "orange" }

//checking for existence of an item using .has() method
console.log(setCollection.has("Apple"));

//delete an element from the set using .delete() method
setCollection.delete("orange");
console.log(setCollection); //{ "Apple", "banana" }
//clear method 
setCollection.clear();

//creating set with default values
let  cars=new  Set(['Audi', 'BMW','Mercedes', 'Audi']);

//iterating  over sets using forof loop
for(let items of cars){
    console.log(items);
}




