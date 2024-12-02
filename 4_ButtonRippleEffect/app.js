// Select the button element with the class "btn"
const button = document.querySelector(".btn");

// Add an event listener to the button for the "mouseover" event
button.addEventListener("mouseover", (event) => {
  // Calculate the x-coordinate of the cursor relative to the button
  const x = event.pageX - button.offsetLeft;

  // Calculate the y-coordinate of the cursor relative to the button
  const y = event.pageY - button.offsetTop;

  // Dynamically set a custom CSS property "--xPos" with the x-coordinate
  button.style.setProperty("--xPos", x + "px");

  // Dynamically set a custom CSS property "--yPos" with the y-coordinate
  button.style.setProperty("--yPos", y + "px");
});
