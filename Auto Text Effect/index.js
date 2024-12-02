const containerE1 = document.querySelector(".container");
const array = ['Web Developer.', 'DataAnalyst.', 'Programmer.', 'Instructor.'];
let i = 0;              // Tracks the current string in the array.
let characterIndex = 0; // Tracks the current character being displayed in the string.

updateText();
function updateText()
{
    ++characterIndex;
    containerE1.innerHTML = `<h1>I am ${array[i].slice(0,1) === "I" ? "an" : "a"} ${array[i].slice(0,characterIndex)}</h1>`;
    
    if (characterIndex === array[i].length) {
        i++;                 // Move to the next string in the array.
        characterIndex = 0;  // Reset character index for the next string.
    }
    if (i === array.length) {
        i = 0;               // Reset to the first string when all strings are done.
    }
    
    setTimeout(updateText,300);
}