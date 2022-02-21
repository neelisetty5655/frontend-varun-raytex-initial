function check(){
    var name=document.getElementById("name").value;
    var password=document.getElementById("pass").value;
    if(name=="varun" && password==123)
    {
        document.getElementById("display").innerHTML="login success";
    }
    else{
        document.getElementById("display").innerHTML="login failed";
    }
}