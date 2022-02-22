function fill(){
    var street=document.getElementById("psname").value;
    var door=document.getElementById("pdnumber").value;
    var district=document.getElementById("pdname").value;
    var state=document.getElementById("ptname").value;
//     var table = document.getElementById("table");
//   var row = table.insertRow(1);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   var cell4 = row.insertCell(3);
//   cell1.innerHTML = street;
//   cell2.innerHTML = door;
//   cell3.innerHTML = district;
//   cell4.innerHTML = state;
var a=0;
var table = document.getElementById("table");
var row = table.insertRow(1);//creating row
a="<tr>"+"<td>"+street+"</td>"+"<td>"+door+"</td>"+"<td>"+district+"</td>"+"<td>"+state+"</td>"+"</tr>";
row.innerHTML=a;
}