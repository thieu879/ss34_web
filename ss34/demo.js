// console.dir(document);


// console.log("The HTML co id demo-id",document.getElementById("demo-id"));
// let div = document.getElementById("demo-id2");
// console.log(div);
// let lis = document.getElementsByClassName("list-item");
// console.log("Danh sach the li",lis);
// let firstLi = lis[0];
// let lastLi = lis[lis.length-1];
// console.log(firstLi);
// console.log(lastLi);

// for(let i = 0;i<lis.length;i++){
//     console.log("cac the li:",lis[i]);
// }


// let divs = document.getElementsByTagName("div");
// console.log(divs);

// let h1 = document.getElementById("demo-id");
// console.log(h1.innerHTML);
// console.log(h1.innerText);
// console.log(h1.textContent);
// h1.innerHTML = "<i>Hello Dung</i>";
// h1.textContent = "<b>Hello Duong</b>";
// h1.innerText = "Hello PTIT";

// h1.innerText += ", Noi dung noi vao";

// console.log(h1.id);
// // if(h1.id==="demo-id"){
// //     alert("Hello world");
// // }


// console.log(h1.classList);

// let classList = h1.classList;
// for(let i = 0;i<classList.length;i++){
//     console.log(classList[i]);
// }
// console.log(classList);
// classList.add("demo-class3");
// classList.remove("demo-class1");
// console.log(classList.contains("demo-class2"));
// console.log(classList.contains("demo-class1"));


// let h1 = document.getElementById("demo-id");
// console.log(h1.style);

// h1.style.backgroundColor = "red";
// h1.style.fontSize = "20px";
// h1.style.fontWeight = "bold";
// h1.style.border = "10px solid black";
// h1.style.width = "200px";
// h1.style.height = "200px";
// h1.style.borderRadius = "50%";
// h1.style.textAlign = "center";
// h1.style.lineHeight = "200px";





// let input = document.getElementById("demo-value");
// console.log("gia tri :", input.value);
// input.value = "Hello Dung";

// let div = document.createElement("div");
// let li = document.createElement("li");
// let ul = document.getElementsByTagName("ul")[0];
// li.innerHTML = "<i>hello Element</i>";
// li.classList.add("list-item");

// ul.appendChild(li);

// li.remove();
// ul.remove();

// console.log(div);
// console.log(li);

// Lấy theo id
// let headingElement = document.getElementById("heading");
// Gias trị trả về sẽ là phần tử đầu tiên nó tìm thấy

// lấy theo class
// let headingElement1 = document.getElementsByClassName("heading");
// Gia trị trả về là 1 HTML Colection 

// //lấy theo seclector
// let boxElement = document.querySelector("div");
// // Gias trij trả về sẽ là phần tử đaauf tiên mà nó tìm thấy

// // Lấy theo querySelector
// let boxes = document.querySelectorAll(".box-1");
// // Gias trị trả về sẽ là 1 node list
// boxes.forEach((element) =>
// {
//     console.log(element);
// }    
// );

// // Them một phần tử vào trong DOM
// let ulElement = document.createElement("ul");
// document.body.append(ulElement);

// let liElement = document.createElement("li");  // Taoj thẻ li  
// liElement.innerHTML = "Xin chao cac ban";
// ulElement.appendChild(liElement);//  gắn thẻ li vào ul


// const  users = [
//     {
//         id:1,
//         user_name: "Nguyen VAn NAm",
//         age:  20,
//         address:  "Ha Noi",
//         email: "nvn@gmail.com"
//     },
//     {
//         id:1,
//         user_name: "Nguyen VAn NAm",
//         age:  20,
//         address:  "Ha Noi",
//         email: "nvn@gmail.com"
//     },
//     {
//         id:1,
//         user_name: "Nguyen VAn NAm",
//         age:  20,
//         address:  "Ha Noi",
//         email: "nvn@gmail.com"
//     },
// ];

// // b1: laays ra phàn tuwre tbody
// let tbodyElement =  document.querySelector("#tbody");
// // b2: Dung Map để lập qua từng phần tử của mảng và kèm theo dữ liệu trong mảng
// let userHtmls = users.map((user,index)=>{
//     return `
//     <tr>
//         <td>${index + 1}</td>
//         <td>${user.user_name}</td>
//         <td>${user.age}</td>
//         <td>${user.address}</td>
//         <td>${user.email}</td>
//     </tr>
//     `;
// });
// // b3: Ép mảng về chuỗi HTML
// let userHtml = userHtmls.join("");
// // b4: Lấy chuôix HTML ở b3 để gắn vào trong tbody
// tbodyElement.innerHTML = userHtml;


// c1
function click1(){
    console.log("click");
}

// c2:
// b1:Lay ra element cua phan tu can click

let btnElement = document.querySelector("#btn-1");

// b2:Lang nghe su kien click len phan tu
btnElement.onclick = function(e){
    console.log("click2",e);
}

// c3
// b1: Lay ra element cua phan tu can click
let btnElement1 = document.querySelector("#btn-3");
// b2: lang nghe su kien click len phan tu
btnElement1.addEventListener("click",function(){
    console.log("click me 3");
});
// lay value tu input
let inputElement = document.querySelector("#email");
let heading2
// lang nghe su kien: button - click; input - input; select - chance
inputElement.addEventListener("input",function(event){
    console.log("chance",event.target.value);
});


