//ES6 stands for EcmaScript version 6

//we write the code using ES6,and since ES comes with the new versions all time,it becomes difficult 
//for the browsers to implement them,so what we will be doing is we will write the code in es6
//and at the time of deploying the website,we will put our code on bable so that bable 
//can transform that ES6 javascript into a javascript code that can be understood by all the browsers.

/*
let experience=100;
var wizardlevel=false;
if(experience>90)
{
    var wizardlevel=true;
    console.log('inside',wizardlevel);
}
console.log('outside',wizardlevel);
//inside true
//outside true
//REASON :- var will not create a new scope inside a curly brackets,if it would have been a function
//instead of if,
//then the value of wizard level would be false
*/

const player="bobby";
let experience=100;
let wizardlevel=false;
if(experience>90)
{
    let wizardlevel=true;
    console.log('inside',wizardlevel);
}
console.log('outside',wizardlevel);
/*
inside true
outside false

let will create a new scope inside the if,so the wizard level inside the if will not accesible outside
the if block
*/

experience=70;
console.log(experience);
// not allowed -> player="lavish";

const obj=
{
    player:'bobby',
    experience:100,
    wizardlevel:false,
    name:"rajesh"
}
console.log(obj);
//{ player: 'bobby', experience: 100, wizardlevel: false,name: 'rajesh'}

obj.player="lavish";
console.log(obj);
//{ player: 'lavish', experience: 100, wizardlevel: false,name: 'rajesh'}

//🌟✪ We can change the properties of the constant object but we can't assign objects to another val
//like obj=5 or any thing else

//Templete Strings
/*const name="Sally";
const age=34;
const pet="horse";

const greetingBest=`Hello ${name} you seem to be ${age-10}
 and your pet ${pet} is also very cute`;

 console.log(greetingBest);*/



//Hello Sally you seem to be 24
 //and your pet horse is also very cute

 //default arguements

 function greet(name='default',age=45,pet='cat',hobby='cricket')
 {
    return `Hello ${name} you seem to be ${age-10}
    and your pet ${pet} is also very cute
    and your hobby is to play ${hobby}`; 
 }

 console.log(greet('lavish'));
 //Hello lavish you seem to be 35
//and your pet cat is also very cute
//and your hobby is to play cricket



//⭐
function add(a,b)
{
    return a+b;
}

const add2 =(a,b)=>a+b;

console.log(add(1,4));
console.log(add2(10,13));

//5
//23