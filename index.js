document.getElementById("btnWrite").addEventListener("click", (event) => {
    // 1. Get values from input
    var accountValue = document.getElementById("accountInput").value;
    var passwordValue = document.getElementById("passwordInput").value;

    // 2. Display values in the output box
    var outputBox = document.getElementById("outputBox");
    outputBox.innerHTML = `<p>Account: ${accountValue}</p><p>Password: ${passwordValue}</p>`;
});
