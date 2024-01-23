// innerText: Trả về hoặc thiết lập văn bản hiển thị của phần tử, bỏ qua các thẻ HTML.


// textContent: Tương tự như innerText, trả về hoặc thiết lập văn bản của phần tử, 
// nhưng bao gồm cả văn bản ẩn và không sử dụng CSS.

// innerHTML: Trả về hoặc thiết lập HTML bên trong phần tử, bao gồm cả các thẻ HTML.

// vd:
let h1 = document.getElementById("nha");
console.log(h1.innerHTML);
console.log(h1.innerText);
console.log(h1.textContent);