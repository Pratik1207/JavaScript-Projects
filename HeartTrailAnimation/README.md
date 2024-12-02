# Heart Trail Animation

This project creates a beautiful mouse trail animation where heart-shaped elements follow the cursor's movement and gradually disappear while rotating through colors.

## Features
- Dynamic creation of heart elements.
- Smooth animation with randomized sizes.
- Responsive and lightweight design.

## Demo
Open the `index.html` file in your browser to see the animation.

## Technologies Used
- **HTML5**: To structure the page.
- **CSS3**: For animations and styling.
- **JavaScript**: To handle mouse interactions and dynamically generate elements.

## How It Works
1. **Mouse Movement Detection**:
   - JavaScript listens for the `mousemove` event on the `<body>` element.
   - The cursor's position is captured using `event.offsetX` and `event.offsetY`.

2. **Heart Creation**:
   - A `<span>` element is dynamically created at the cursor's position.
   - The size of the heart is randomized for visual variety.

3. **Animation**:
   - The CSS `@keyframes` animate the hearts to:
     - Fade out.
     - Rotate through a range of colors.
     - Move upwards off the screen.

4. **Cleanup**:
   - The hearts are removed from the DOM after 3 seconds to optimize performance.

## How to Use
1. Clone or download this repository.
2. Open the `index.html` file in any modern web browser.

## Customization
- **Heart Image**:
  - Replace the `background` URL in the `span` CSS rule with your desired image.
  
- **Animation Duration**:
  - Adjust the `6s` duration in the `animation` property to speed up or slow down the animation.

- **Heart Lifetime**:
  - Modify the `setTimeout` duration in the JavaScript file to change how long the hearts stay visible.

## Example Output
Hearts will appear at the cursor's position as you move the mouse, fading out while changing colors and moving upwards.

## License
This project is open-source and free to use.
