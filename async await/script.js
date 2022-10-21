// async function bar(){
//     let res= await fetch("https://restcountries.com/v2/all");
//     let result= await res.json();
//     console.log(result);
// }
// bar();

async function covid(){
    let res= await fetch("https://data.covid19india.org/v4/min/data.min.json");
    let result= await res.json();
    console.log(`Confirmed:${result.TN.total.confirmed}`);
}
covid();
