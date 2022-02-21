function check(){
    var a=document.getElementById("dob").value;
    var b,age,month,date;
    
    b=a[0]+a[1]+a[2]+a[3];
    month=parseInt(a[5]+a[6]);
    date=parseInt(a[8]+a[9]);

    age=(2022-parseInt(b));
    if(month>=2)
    {
       if(date<21)
       {
           age--;
       }
    }
    else{
        age--;
    }
    document.getElementById("display").innerHTML=age+"years";
}