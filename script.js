//Step 1: Create an XHR Object
var request=new XMLHttpRequest();
//Step 2: initiate a request
//opening request
request.open("GET","https://restcountries.com/v2/all");
// Step 3: sending the request
//pushing towards the server
request.send();
//Step 4: once the date successfully loaded from server
//Status: code:200
//event: it is a specific work
//onload event: it helps us to load the event
//functions: to perform a specific task
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    // for(var i=0;i<result.length;i++){
    //     console.log(result[i].name);
    // }
    var pop=result.filter((ele)=>ele.population<300000);
    console.log(pop);
    var result1=pop.map((ele)=>`${ele.name} : ${ele.region}`);
    console.log(result1);

    var region=result.filter((ele)=>ele.region=="Europe");
    console.log(region);
    var result2=region.map((ele)=>ele.name);
    console.log(result2);

    var pop1=result.reduce((acc,cv)=>acc+cv.population,0) //.map((ele)=>ele.name);
    console.log(pop1);
    
};



