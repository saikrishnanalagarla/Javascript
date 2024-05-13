let person = {
    name: 'Sai',
    age: '30',
    hobbies: [ 'music', 'playing', 'blogging', 'content Writing']
}

//JSON.Stringify object to string
console.log(JSON.stringify(person));

// string to object
console.log(JSON.parse(person));

//adding new element
person.address = 'Hyderabad';
console.log(person);

person['doy'] = 1999;

//accessing element
console.log(person.name);
console.log(person['name']);

//deleting element
//delete person.address;
console.log('deleted ' + person);

country = 'country';
person[country] = 'India';
console.log(person);

//Show all hobbies
console.log('hobbies');
person.hobbies.forEach((hobby)=>{
    console.log(hobby);
})
