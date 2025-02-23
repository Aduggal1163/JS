




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
