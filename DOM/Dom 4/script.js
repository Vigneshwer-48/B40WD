


let button=document.createElement("button");
button.innerHTML="Click Me";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
    let ele=document.createElement("span");
    ele.innerHTML="Welcom to Guvi";
    ele.style.color="blue";
    ele.style.fontSize="20px";
    ele.style.display="block"
    document.body.append(ele);
}




var table=document.createElement("table");
table.setAttribute("class","table");
var thead=document.createElement("thead");
thead.setAttribute("class","thead-dark");
var tr=document.createElement("tr");
var th1=document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML="First";
var th2=document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML="Middle";
var th3=document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHTML="Last";
 var tbody=document.createElement("tbody");
 tbody.setAttribute("class","tbody");
 var tr=document.createElement("tr");
 var td1=document.createElement("td");
 td1.innerHTML="Mark";
 var td2=document.createElement("td");
 td2.innerHTML="Otto";
 var td3=document.createElement("td");
 td3.innerHTML="@mdo";

 tr.append(td1,td2,td3);
 tbody.append(tr);
 table.append(tbody);
 document.body.append(table);




