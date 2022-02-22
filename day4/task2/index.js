function fill(){
    var ph=0,em=0,us=0;
    var email=document.getElementById("email").value;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phone=document.getElementById("phone").value;
    var p=/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var user=document.getElementById("user").value;
    var u=/^[a-zA-Z0-9]+$/;
            if(user.match(u))
            {
                us++;
            }
            if (phone.match(p)) {
    
            ph++;
            }
 
            if(re.test(email))
            {
                em++;
            }
            if(em==0)
            {
                alert("enter email properly");
            }
            else if(ph==0){
                alert("enter phonenumber properly");
            }
            else if(us==0){
                alert("enter username properly");
            }
            else{
                alert("login success");
            }
}