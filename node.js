function add()
{
    var a=document.getElementById("box1").value;
    var b=document.getElementById("box2").value;
    var c= parseInt(a)+parseInt(b);
    document.getElementById("result").innerHTML =c;
}
function sub()
{
    var a=document.getElementById("box1").value;
    var b=document.getElementById("box2").value;
    var c= parseInt(a)-parseInt(b);
    document.getElementById("result").innerHTML =c;
}
function mul()
{
    var a=document.getElementById("box1").value;
    var b=document.getElementById("box2").value;
    var c=parseInt(a)*parseInt(b);
    document.getElementById("result").innerHTML =c;
}

function div()
{
    var a=document.getElementById("box1").value;
    var b=document.getElementById("box2").value;
    var c=parseInt(a)/parseInt(b);
    document.getElementById("result").innerHTML =c;
}
