const array=[1,2,10,16]

const double=[]
const newArray=array.forEach((num)=>{
    double.push(num*2);
})
console.log(double);
//[ 2, 4, 20, 32 ]

//there is one for useful functionality ie map
//we can do the above task also with the map

/*const mapArray=array.map((num)=>
{
    //return statement is necessary while using map
    return num*2;
})*/

//we can also write the below code like below

const mapArray=array.map(num=>num*2)


console.log(mapArray)
//[ 2, 4, 20, 32 ]

//🌟✪🔯 FILTER 

//filter as the name suggest used to filter the array
//filter all the elements >5 and retunr the array 
const filterArray=array.filter(num=>
    {
       return num>5
    })

console.log(filterArray);

/*
array.map(function(currentValue, index, arr), thisValue)
Parameter Values
Parameter	Description
function(currentValue, index, arr)	Required. A function to be run for each element in the array.
Function arguments:
Argument	Description
currentValue	Required. The value of the current element
index	Optional. The array index of the current element
arr	Optional. The array object the current element belongs to
*/