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

// var ele=document.createElement("div");
// var element=document.createElement("div");
// var element1=document.createElement("div");
// ele.setAttribute("Class","container");
// element.setAttribute("class","row");
// ele.append(element);
// element1.setAttribute("class","col");
// element1.innerHTML="this is col";
// element.append(element1);
// document.body.append(ele);

// var fname=createlabels("label","for","firstname","First Name");
// var br1=createlinebreak("br");
// var input=createinput("input","type","firstname","id","First Name");
// var br2=createlinebreak("br");

// var mname=createlabels("label","for","middlename","Middle Name");
// var br3=createlinebreak("br");
// var input1=createinput("input","type","middlename","id","Middle Name");
// var br4=createlinebreak("br");

// var lanme=createlabels("label","for","lastname","Last Name");
// var br5=createlinebreak("br");
// var input2=createinput("input","type","lastname","id","Last Name");
// var br6=createlinebreak("br");

// var phnum=createlabels("label","for","phonenum","Phone Number");
// var br7=createlinebreak("br");
// var input3=createinput("input","type","phonenum","id","Phone number");
// var br8=createlinebreak("br");

// document.body.append(fname,br1,input,br2,mname,br3,input1,br4,lanme,br5,input2,br6,phnum,br7,input3,br8);

// function createlabels(tagname,attrname,attrvalue,content){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     ele.innerHTML=content;
//     return ele;
// }
// function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     ele.setAttribute(attrname1,attrvalue1);
//     return ele;
// }
// function createlinebreak(tagname){
//     var ele=document.createElement(tagname);
//     return ele;
// }

function foo(){
    var res=document.getElementById("first name").value;
    var res1=document.getElementById("middle name").value;
    var res2=document.getElementById("last name").value;
    var res3=document.getElementById("email").value;
    var res4=document.getElementById("password").value;

     console.log(res,res1,res2,res3,res4);
}