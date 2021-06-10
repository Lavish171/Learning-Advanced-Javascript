function isUserValid(bool)
{
    return bool;
}

var answer=isUserValid(true)?"you may enter":"Access Denied"

var automatedAnswer=
"Your account no is "+(isUserValid(false)?"1234":"Not Availaible")

console.log(automatedAnswer);
console.log(answer);

//Switch Statements

function moveCommand(direction)
{
    var whatHappened;
    switch(direction)
    {
        case "forward":
            whatHappened="you encounter a monster";
            break;
        case "back":
            whatHappened="you arrived home";
            break;
        case "right":
            whatHappened="you found a river";
            break;
        case "left":
            whatHappened="you run into a troll";
            break;
        default:
            whatHappened="Please enter a valid direction";
    }
    return whatHappened;
}

console.log(moveCommand("right"));
console.log(moveCommand("left"));
console.log(moveCommand("forward"));


