const userInput = document.getElementById("text-input");
const checkPalindromeButton = document.getElementById("check-button");
const resultDiv = document.getElementById("result");

const checkValidPalindrome = input => {
    const originInput = input;
    
    if (originInput === "") {
        alert("Please enter a value");
    }

    resultDiv.replaceChildren();
    const toLowerCase = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

    let resultMessage = `<strong>${originInput}</strong> ${toLowerCase === [...toLowerCase].reverse().join("") ? "is" : "is not"} a palindrome.`

    const resultParagraph = document.createElement("p");
    resultParagraph.className = "user-input";
    resultParagraph.innerHTML = resultMessage;
    resultDiv.appendChild(resultParagraph);

    resultDiv.classList.remove("hidden");
}

checkPalindromeButton.addEventListener("click", () => {
        checkValidPalindrome(userInput.value);
        userInput.value = "";
    });

userInput.addEventListener("keydown", e=> {
    if(e.key === "Enter"){
        checkValidPalindrome(userInput.value);
        userInput.value = "";
    }
});

