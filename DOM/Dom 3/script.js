var fname=createlabels("label","for","firstname","First Name");
var br1=createlinebreak("br");
var input=createinput("input","type","firstname","id","First Name");
var br2=createlinebreak("br");

var mname=createlabels("label","for","middlename","Middle Name");
var br3=createlinebreak("br");
var input1=createinput("input","type","middlename","id","Middle Name");
var br4=createlinebreak("br");

var lanme=createlabels("label","for","lastname","Last Name");
var br5=createlinebreak("br");
var input2=createinput("input","type","lastname","id","Last Name");
var br6=createlinebreak("br");

var phnum=createlabels("label","for","phonenum","Phone Number");
var br7=createlinebreak("br");
var input3=createinput("input","type","phonenum","id","Phone number");
var br8=createlinebreak("br");

document.body.append(fname,br1,input,br2,mname,br3,input1,br4,lanme,br5,input2,br6,phnum,br7,input3,br8);

function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
    var ele=document.createElement(tagname);
    return ele;
}