const array=[1,2,3,[4,5]];

console.log(array.flat());
//[ 1, 2, 3, 4, 5 ]

const array2=[1,2,3,[4,[5,6]]];
console.log(array2.flat());
//[ 1, 2, 3, 4, [ 5, 6 ] ]

//flat method is used to flat
//the array by 1 level in default
//case,but we can also mention the depth to which array
//is to be flattened

console.log(array2.flat(2));
//[ 1, 2, 3, 4, 5, 6 ]

const entries=['bob','sally',,,,,,'cindy'];
console.log(entries.flat());
//[ 'bob', 'sally', 'cindy' ] 

//Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
//Solution
console.log(trapped.flat(Infinity))

//// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
//Solution:
console.log(greeting.flatMap(x => x.join(' ')))
//[ 'Hello young grasshopper!', 'you are', 'learning fast!' ]




//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
//Solution
console.log(greeting.flatMap(x => x.join(' ')).join(' '))
//Hello young grasshopper! you are learning fast!    

const userEmail='            eddytheeagle@gmail.com'
const userEmail2='jonnydangerous@gmail      '
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());
//eddytheeagle@gmail.com
//jonnydangerous@gmail

//from entries is to convert an array into the objects

const userProfiles=[['commanderTom',23],['derekZlander',40],
['hansley',49]];

const obj2=Object.fromEntries(userProfiles);
console.log(obj2);
// { commanderTom: 23, 
//derekZlander: 40, 
//hansley: 49 
// }

//if we want to convert this object to back to the array
//then we can do like below

const obj3=Object.entries(obj2);
console.log(obj3);

/*
[ [ 'commanderTom', 23 ], 
[ 'derekZlander', 40 ], 
[ 'hansley', 49 ] ]
*/

//Example of type cohersion
//🌟✪
console.log(true +'hi');


try{
   bob+'hi'; 
}
catch(error)
{
    console.log('you messed up'+error)
    //upReferenceError: bob is not defined

    //you are not forced to pass the error in catch,
    //it's up to you in es10
}








