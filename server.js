function saveToDB(data)
{
  return new Promise((resolve,reject)=>{
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>=6)
    {
      resolve(data);
    }
    else
    {
      reject(data);
    }
  })
}
let response=saveToDB("Hello World")
response
.then((data)=>{
  console.log("Data saved to DB ", data);
  return saveToDB("Apna College");
})
.then((data)=>{
  console.log("Data2 saved to DB ",data);
  return saveToDB("Wow Very Dangerous");
})
.then((data)=>{
  console.log("Data3 saved to DB ",data);
  return saveToDB("Abhishek Aastha Duggal");
})
.then((data)=>{
  console.log("Dataa saved to DB ",data);
})
.catch((data)=>{
  console.log("Error saving data to DB ",data);
})
// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed >= 6) resolve("Success");
//     else reject("Failure");
//   })
// }
// let ans = saveToDb("Bank Transactions")
// ans
//   .then(() => {
//     console.log("Data1 saved to database")
//     saveToDb("Health")
//     .then(()=>{
//       console.log("Data2 saved to database")
//     })
//   saveToDb("WOW")
//     .then(()=>{
//       console.log("Data3 saved to database")
//     })
//   })
//   .catch(() => {
//     console.log("Error saving data to database")
//   })
// function savetoDb(data, success, failure) {
//   let internetspeed = Math.floor(Math.random() * 10) + 1;
//   if (internetspeed >= 6) success();
//   else failure();
// }
// savetoDb("Bank Details", () => {
//   console.log("Bank Details saved successfully");
//   savetoDb("Personal Details", () => {
//     console.log("Personal Detail saved successfully");
//     savetoDb("Payment Details", () => {
//       console.log("Payment Details saved successfully");
//     }, () => {
//       console.log("Payment Details failed to save");
//     })
//   }, () => {
//     console.log("Failed to save Personal Details");
//   })
// }, () => {
//   console.log("Error in saving data");
// })
// let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }
// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("pink", 1000);
//     });
//   });
// });
// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay)
// }
// changeColor("red",1000);
// changeColor("orange",2000);
// changeColor("green",3000);
// console.log("object3")
// setTimeout(()=>{
//     console.log("object2")
// },3000);
// setTimeout(()=>{
//     console.log("object2a")
// },3000);
// console.log("object1")
// function one(){
//     console.log("Inside one")
//     return 1;
// }
// let two=()=>{
//     console.log("Inside two")
//     return one()+one();
// }
// function ans(){
//     console.log("ans is");
//     console.log(one()+two());
// }
// ans();
// let form = document.querySelector("form");
// let body = document.querySelector("body");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let inputFirst = document.querySelector(".a");
//   let inputSecond = document.querySelector(".b");
//   let inputThird = document.querySelector(".o");
//   let p1 = document.createElement("p");
//   let p2 = document.createElement("p");
//   let p3 = document.createElement("p");
//   p1.innerText = "First name is " + inputFirst.value;
//   p2.innerText = "Last name is " + inputSecond.value;
//   p3.innerText = "Password is " + inputThird.value;
//   body.appendChild(p1);
//   body.appendChild(p2);
//   body.appendChild(p3);
//   input.value = "";
// });
// let btn=document.querySelector('button');
// let h3=document.querySelector("h3");
// let div=document.querySelector('div');
// btn.addEventListener('click',()=>{
//     let color=randomColor();
//     h3.innerText=color;
//     div.style.backgroundColor=color;
// })
// function randomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }
// let divv=document.querySelector('.classname');
// let h1=document.querySelector("h1");
// let h3=document.querySelector('h3');
// let btn=document.querySelector("button");
// btn.addEventListener("click",()=>{
//     console.log("CLick")
// })
// btn.addEventListener("mouseenter",()=>{
//     console.log("mouse enter")
// })
// function dblclick(){
//     console.log("DBL cliickkk")
// }
// btn.addEventListener("dblclick",dblclick);
// btn.onclick=()=>{
//     console.log("object")
// }
// btn.onmouseenter=function(){
//     console.log("objectenter")
// }
// let btn=document.querySelectorAll("button");
// btn.onclick=()=>{
//    setTimeout(()=>{
//     console.log("Button was click")
//    },2000)
// }

// const say=function(){
//     console.log("a");
// }
// // btn.onclick=say;
// for( hi of btn)
// {
//     hi.onclick=say;

// }

// let body=document.querySelector('body');
// let newParagraph=document.createElement('p')
// newParagraph.innerText="Hey I'm red!"
// //1
// divv.appendChild(newParagraph);
// //2
// let newwh3=document.querySelector('h3');
// newwh3.innerText="I'm a blue h3!"
// newwh3.style.color='blue'
// divv.appendChild(newwh3);
// //3
// let newDiv=document.createElement('div');
// body.append(newDiv);
// newDiv.style.border='black'
// newDiv.style.backgroundColor='pink'
// let newh1=document.createElement('h1');
// newh1.innerText="I'm in a div"
// let newPar=document.querySelector('p');
// newPar.innerText='ME TOO';
// newDiv.appendChild(newh1)
// newDiv.appendChild(newPar);