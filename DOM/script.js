// var ele=document.createElement("div");

// var ele=document.createElement("span")
// ele.setAttribute("class","main1")
// ele.innerHTML="<span class=main1> this is span</span>";
// ele.setAttribute("class","main");
// document.body.append(ele);

// var div=document.createElement("div");
// div.setAttribute("class","main");

// var span=document.createElement("span");
// span.setAttribute("class","main1");
// span.innerHTML="this is span";

// //parent.append(child);
// div.append(span);
// document.body.append(div);

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

