function add(){
    let item = document.createElement("li");
    item.innerHTML = document.getElementById("chat").value;
    document.getElementById("list").appendChild(item);
}