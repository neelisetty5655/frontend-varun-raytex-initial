function enter(){
    var street=document.getElementById("psname").value;
    var door=document.getElementById("pdnumber").value;
    var state=document.getElementById("ptname").value;
    var district=document.getElementById("pdname").value;
    document.getElementById("rsname").value=street;
    document.getElementById("rdnumber").value=door;
    document.getElementById("rdname").value=district;
    document.getElementById("rtname").value=state;

   
}