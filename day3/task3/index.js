function check(){
    var a=document.getElementById("number").value;
    var n1=0,n2=1,n3,ans;
    ans=n1+","+n2;
    console.log(n1);
    console.log(n2);
    for(var i=2;i<=a;i++)
{
    n3=n2+n1;
   console.log(n3);
   ans=ans+","+n3;
    n1=n2;
    n2=n3;
}
document.getElementById("display").innerHTML=ans;

}