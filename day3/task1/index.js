function check(){
    var a=document.getElementById("number").value;
    var flag=0;
    for(var i=2;i<=a/2;i++)
    {
     if(a%i===0)
     {
         flag++;
     }
    }
    if(flag!=0)
    {
        document.getElementById("display").innerHTML="not prime";
    }
    else{
        document.getElementById("display").innerHTML="prime";
    }
}