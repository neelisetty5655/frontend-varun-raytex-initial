var name="james";
var numberone=1;
var verify=true;
var numbertwo=2;
// var sum=numberone+numbertwo;
// var mul=numberone*numbertwo
// document.getElementById("newone").innerHTML="helloworld";
// document.getElementById("sum").innerHTML=sum;
// document.getElementById("mul").innerHTML=mul;

//objects
const student={name:"james",age:30};
function displayobject(){

document.getElementById("valobject").innerHTML=
student.name+student.age;

}


function cal(){
    var sum=numberone+numbertwo;
var mul=numberone*numbertwo
document.getElementById("newone").innerHTML="helloworld";
document.getElementById("sum").innerHTML=sum;
document.getElementById("mul").innerHTML=mul;
console.log(sum);
console.log(mul);
}

function check(){
    var a=document.getElementById("number").value;
    if(a%2==0)
    {
        document.getElementById("display").innerHTML="even";
    }else{
        document.getElementById("display").innerHTML="odd";
    }
}