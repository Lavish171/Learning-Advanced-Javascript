var b=[1,2,3,45];
var d=b;
d.push(121212);
//this is basically the pass by the reference
console.log(d);
console.log(b);
//[ 1, 2, 3, 45, 121212 ]
//[ 1, 2, 3, 45, 121212 ] 

let obj={a:'a',b:'b',c:'c'};
//we want to copy or clone this object,but not at the
//same location,that is we do not want to
//to pass by reference,ie obj2=obj;

let clone=Object.assign({},obj);
obj.c=5;
console.log(clone);
//{ a: 'a', b: 'b', c: 'c' }
console.log(obj);
//{ a: 'a', b: 'b', c: 5 }


//✤	✨There is another method of copying the object
//using spread operator
let clone2={...obj};
obj.b=9;
console.log(clone2);
console.log(obj);
//{ a: 'a', b: 'b', c: 5 }
//{ a: 'a', b: 9, c: 5 }



//🌟✪🔯✨ object within object
let obj2=
{
    a:'a',
    b:'b',
    c:
    {
        deep:'try and copy me'
    }
};


let clonenew=Object.assign({},obj);
let clone3={...obj};

obj2.c.deep='hahahah';
console.log(obj2);
console.log(clonenew);
console.log(clone3);

//{ a: 'a', b: 'b', c: { deep: 'hahahah' } }     
//{ a: 'a', b: 9, c: 5 }
//{ a: 'a', b: 9, c: 5 }

//this is occuring because we are creating shallow copy of 
//the obj2 not deep copy,deep copy can be created using JSON
//in which even after chanding the deep ,contents of clonenew
//clone3 will not get changed






