let arr=[
    "Nguyễn Văn A",
    "Vũ Thị B",
    "Nguyễn Minh C"
];
for (let i in arr) {
    let item=document.createElement("li");
    item.innerText=arr[i];
    document.body.appendChild(item);
}