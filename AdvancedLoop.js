const basket=['apples','oranges','grapes'];
//normal for loop
for(let i=0;i<basket.length;i++)
{
   console.log(basket[i]);
}
/*
apples
oranges
grapes
*/

//normal forEach Loop
basket.forEach(item=>
    {
        console.log(item);
    })
/*
apples
oranges
grapes
*/

//for of loop
//☽🌙 to iterate for arrays,strings
for(item of basket)
{
    console.log(item);
}
/*
apples
oranges
grapes
*/

//✨for in loops is used to enumerate over the objects properties
//iterating is used to iterate over the arrays,strings,enumerating
//is the more rigth word for objects

const detailedBasket=
{
    apples:5,
    oranges:10,
    grapes:14
}

for(item in detailedBasket)
{
    console.log(item);
}

console.log('appying enumeration over array');
for(item in basket)
{
    console.log(item);
}
/*
0
1
2
*/

//it is possible to enumeration over the arrays,but not possible to
//iterate over the objects,as we can think array as an objects in below form

/*✨✨✨
0:'apples',
1:'oranges',
2:'grapes'
*/


