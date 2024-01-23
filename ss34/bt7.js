function add(){
    let thead=document.getElementById("thead");
    let row = thead.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);     
    cell1.innerHTML = "Cell 2 row 1";
    cell2.innerHTML = "Cell 2 row 1";
    cell3.innerHTML = "Cell 3 row 1";
}