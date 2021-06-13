let obj=
{
    username0:'Santa',
    username1:'Rudolf',
    username2:'Mr.Grinich'
}

Object.keys(obj).forEach((key,index) => {
    console.log(key,obj[key]);
});
//username0 Santa
//username1 Rudolf
//username2 Mr.Grinich    

Object.values(obj).forEach(value=>
{
        console.log(value);
})
/*Santa
Rudolf
Mr.Grinich*/

Object.entries(obj).forEach(value=>
{
        console.log(value);
})

/*[ 'username0', 'Santa' ]
[ 'username1', 'Rudolf' ]
[ 'username2', 'Mr.Grinich' ]*/
    
let obj1=
{
    my:'name',
    is:'Rudolf',
    the:'Randeer'

}
var combined='';
Object.entries(obj1).forEach((key,value)=>
    {
       combined+=key+" "+value;
    })
console.log(combined);