/* function  palin(str){
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverseStr = cleanStr.split('').reverse().join('');
    cleanStr === reverseStr? alert(cleanStr+" is a palindrome"):alert(cleanStr+" not a palindrome")
    return cleanStr === reverseStr;
}
let result = prompt("enter a text", '');
palin(result);   */

document.getElementById("check-btn").addEventListener("click", function() {
    // Get the value of the input field
    let inputText = document.getElementById("text-input").value;

    // Store the original input to display it in the result
    let originalText = inputText;

    // Clean the input by removing non-alphanumeric characters and converting to lowercase
   let cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the cleaned text
    let reversedText = cleanedText.split('').reverse().join('');

    // Determine if it's a palindrome
    let resultMessage;
    let resultElement = document.getElementById("result");

// Check if the input is empty and alert the user
    if (!inputText) {
        alert("Please input a value");
    }

    else if (cleanedText === reversedText) {
        resultMessage = `${originalText} is a palindrome`;
        resultElement.style.backgroundColor = "lightgreen";
    } else {
        resultMessage = `${originalText} is not a palindrome`;
        resultElement.style.backgroundColor = "lightcoral";
    }

    // Display the result
    resultElement.textContent = resultMessage;
});


