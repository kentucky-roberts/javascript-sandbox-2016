var obj = {a: "thing", b: "another-thing", c: "the final thing"};
//console.log(obj);
var obj2 = {z: "My Z here", x: "anoter X", y: "Why Y"};
// console.log(obj2);
//var myArray = Array.prototype.slice.call(obj);
//console.log(myArray);

// var myobject ={ // array-like collection
//     length: 4,
//     '0': 'zero',
//     '1': 'one',
//     '2': 'two',
//     '3': 'three'
// }

// var myarray = Array.prototype.slice.call(myobject) 
// console.log(myobject);
// returns myobject as a true array: ["zero", "one", "two", "three"]


// function test(){
//     var argarray = (Array.from)? Array.from(arguments) : Array.prototype.slice(arguments)
//     return argarray;
// }

// var people = test("George", "Kelly", "Julia") // returns array ["George", "Kelly", Julia"]
// var poppedPeople = people.reverse();

// console.log(poppedPeople);
// console.log(people);



// var arr1 = ["Cecilie", "Lone"];
// var arr2 = ["Emil", "Tobias","Linus"];
// var arr3 = ["Robin", "Morgan"];
// var myChildren = arr3.concat(arr2, arr1);     // Concatenates arr1 with arr2 and arr3

// console.log(myChildren);

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(2);
// console.log(citrus);

var deck = [];
var newCards = ["George", "Kelly", "Julia"];
// console.log(arr1);
var oldCards =  ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(arr2);
oldCards.push(newCards.splice(Math.floor(Math.random() * newCards.length), 1));

console.log("newCards are:" , newCards);
console.log("oldCards are:" , oldCards);




