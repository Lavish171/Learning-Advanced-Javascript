//scope
//by default in the javascript you are in the root scope
//ie window object

//🌟Root scope (window)
var fun=5;

function funFunction()
{
    //child scope
    var fun="helloo";
    console.log(fun);
}

function funerFunction()
{
    //child scope
    var fun="Byee";
    console.log(fun);
}

function funestFunction()
{
    //child scope
    fun="hiiiiiii";
    console.log(fun);
}


funFunction();
funerFunction();
funestFunction();
console.log("Window",fun);

/**
 * helloo
Byee
hiiiiiii
Window hiiiiiii
 */
