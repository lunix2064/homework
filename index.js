document.getElementById("btnWrite").addEventListener("click", (event) => {
    // 1. Get value from input
    var value = document.getElementById("userInput").value;

    // 2. Repeating the value from the input multiple times
    let noToStopAt = 100;
    let string = "";
    for (let i = 0; i < noToStopAt; i++) {
        string = string + value;
    }
    console.log(string);

    // 3. Set value into "textOutput" Element
    document.getElementById("textOutput").innerText = value;
});




// document.getElementById("micheals").innerText = "Micheal";

// console.log("Hello World");

// let michealsName = "Micheal";
// let age = 10;  // 1 number type
// let age2 = 10.2;  // 1 number type

// let array = [1, 2, 4, 8, 16]

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// if(michealsName == "Micheal"){
//     console.log("The name is Micheals");
// }
