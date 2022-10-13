var ele=document.createElement("div");
var element=document.createElement("div");
var element1=document.createElement("div");
ele.setAttribute("Class","container");
element.setAttribute("class","row");
ele.append(element);
element1.setAttribute("class","col");
element1.innerHTML="this is col";
element.append(element1);
document.body.append(ele);

function foo(){
    var res=document.getElementById("first name").value;
    var res1=document.getElementById("middle name").value;
    var res2=document.getElementById("last name").value;
    var res3=document.getElementById("email").value;
    var res4=document.getElementById("password").value;

     console.log(res,res1,res2,res3,res4);
}