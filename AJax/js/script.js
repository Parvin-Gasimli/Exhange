document.getElementById("change").addEventListener("click", GetallEmployees)
//htps ajax sorgular


function GetallEmployees() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://www.floatrates.com/daily/usd.json", true);
    xhr.onload = function () {


        const response = JSON.parse(this.responseText)


        if (this.status == 200) {

            const rate = response.try.rate;
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = amount * rate
            console.log(rate * amount);
        }
    }
    xhr.send();

}
GetallEmployees();

//SetTime out and SetTime Interval
// setTimeout(() => {
//     console.log("hi");
// },1000 );

// let i =0;
// let value=setInterval (function(){
// i++
// console.log(`say:${i}`);
// },1000)
// document.getElementById("btn1").addEventListener("click",function(){
// clearInterval(value)
// });

// const Languages=["paython","c#","C++","Javascript"]
// Languages.forEach(function(langs){
// console.log(langs);
// });
// for(let index of Languages){
//     console.log(index);
// }

// for(let index in Languages){
//     console.log(index);
// }
// document.getElementById("tikla").addEventListener("click",function(){
// console.log("clicked");
// })



// function process1(test){



//  setTimeout(function(){
// console.log("proces----1");
// test();
//  },1000)
// }

// function process2(){

//   setTimeout(function(){
//     console.log("process---2"
//     );
//   },1000)
// }

// // let i=-0;
// // function process3(){

// //     setInterval(function(){
// //         i++
// //         console.log("salam",i);
// //     },1000)
// // }
// // process3();

// process1(process2);



//CallBack Functions


// const Languages = ["paython", "c#", "C++", "Javascript"]
// function AddLang(Lang,callBack) {
//     setInterval(function () {

//         Languages.push();
//         console.log("add olundu");
//         // callBack();

//     }, 1000)

// }
// function GetAllLanguages() {
//     setTimeout(function () {
//         // for (let index of Languages) {
//         //     console.log(index);
//         // }
//         Languages.forEach(function(Lang){
//             console.log(Lang);
//         })

//     }, 1000);
// }
// AddLang("js",GetAllLanguages);



//arrow function this 
// const Person = {
//     name: "ali",
//     age: 23,
//     profession: "International Realtions",
//     // tellAge: function () {
//     //     console.log(this);
//     //     console.log(this.age);
//     // }.bind(this)
//     tellAge:()=>{
//         console.log(this);
//         console.log(this.age);
//     }

// }
// Person.tellAge();


class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    get(url) {
        this.xhr.open("GET", url)
        const temp = this;
        this.xhr.onload =  ()=> {
            console.log(this);
          
            if (temp.status === 200) {
                console.log(this.responseText);
                callback(null,this.xhr.responseText)
            }
        }


        this.xhr.send();
    }
}
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/posts",function(err, respones){
    if(err===null){
        console.log(respones);
    }
    else{
        console.log(err);
    }
})



