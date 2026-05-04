function showFor() {
    let count = parseInt(document.getElementById("forCount").value);
    let text = document.getElementById("forText").value;
    let output = document.getElementById("forOutput");
    let result = "";
 
    if (isNaN(count)) return;
 
    for (let i = 0; i < count; i++) {
        result += (i + 1) + ". " + text + "<br>";
    }
    output.innerHTML = result;
}
 
function clearFor() {
    document.getElementById("forForm").reset();
    document.getElementById("forOutput").innerHTML = "";
}
 
 
function showWhile() {
    let count = parseInt(document.getElementById("whileCount").value);
    let text = document.getElementById("whileText").value;
    let output = document.getElementById("whileOutput");
    let result = "";
 
    if (isNaN(count)) return;
 
    let i = 0;
    while (i < count) {
        result += (i + 1) + ". " + text + "<br>";
        i++;
    }
    output.innerHTML = result;
}
 
function clearWhile() {
    document.getElementById("whileForm").reset();
    document.getElementById("whileOutput").innerHTML = "";
}
 
 
function showDoWhile() {
    let count = parseInt(document.getElementById("dowhileCount").value);
    let text = document.getElementById("dowhileText").value;
    let output = document.getElementById("dowhileOutput");
    let result = "";
 
    if (isNaN(count) || count <= 0) {
        output.innerHTML = "";
        return;
    }
 
    let i = 0;
    do {
        result += (i + 1) + ". " + text + "<br>";
        i++;
    } while (i < count);
    output.innerHTML = result;
}
 
function clearDoWhile() {
    document.getElementById("dowhileForm").reset();
    document.getElementById("dowhileOutput").innerHTML = "";
}