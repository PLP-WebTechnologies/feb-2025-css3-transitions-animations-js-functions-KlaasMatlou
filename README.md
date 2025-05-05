# CSS3 Transitions & JavaScript Animations

This project demonstrates the use of CSS3 transitions and JavaScript animations to create interactive web page elements. It also implements local storage to persist user preferences (theme) and track button clicks.

## Overview

The page features three informational cards with subtle hover effects implemented using CSS transitions. A button with a CSS animation triggered by a click is also present. Additionally, a theme toggle button allows users to switch between a light and dark mode, with the preference being saved in local storage.

## Files Included

* `index.html`: The main HTML file containing the structure of the web page. It links to the CSS (`styles.css`) and JavaScript (`script.js`) files.
* `styles.css`: Contains all the CSS rules for styling the page elements, including transitions, animations, and the dark mode.
* `script.js`: Contains the JavaScript code responsible for handling the theme toggle functionality, triggering the button animation, and using local storage.

## Features

* **CSS Transitions:** Smooth visual changes on hover for the informational cards.
* **CSS Animations:** A "pulse" animation applied to the button when clicked, along with a persistent "rotate-slow" class.
* **Theme Toggle:** A button to switch between light and dark mode.
* **Local Storage:**
    * Remembers the user's preferred theme across sessions.
    * Tracks the number of times the animation button has been clicked.
* **Font Awesome Icons:** Used for visual cues (bullseye, info circle, tasks, moon for theme toggle).
* **Bootstrap:** Used for basic button styling and layout.

## How to Use

1.  **Download the files:** Ensure you have `index.html`, `styles.css`, and `script.js` in the same directory.
2.  **Open `index.html` in your web browser.**

## Functionality

* **Theme Toggle:** Clicking the "Toggle Theme" button (with the moon icon) will switch the page to dark mode, Clicking again will revert to light mode. Your theme preference is saved in your browser's local storage and will be applied on subsequent visits.
* **Card Hover Effects:** Hovering over each of the three informational cards will trigger a different subtle CSS transition effect (translate, scale, rotate).
* **Button Animation:** Clicking the "Click Me for Animation" button will:
    * Add a "clicked" class which applies a continuous rotation animation.
    * Increment a click counter stored in local storage and log the count to the browser's console.
* **Click Count Persistence:** The number of times the animation button has been clicked is stored in local storage and logged to the console when the page loads.

## Customization

* **Styling:** Modify the `styles.css` file to change the colors, fonts, animations, and overall appearance of the page.
* **Animations:** Adjust the keyframes in `styles.css` or the JavaScript logic in `script.js` to create different or more complex animations.
* **Local Storage:** Extend the use of local storage to save other user preferences or data.
* **Icons:** Change the Font Awesome icons by modifying the `<i>` tags in `index.html`. Refer to the Font Awesome library for available icons.

## Credits

* Bootstrap: For providing basic CSS styling.
* Font Awesome: For the icons used throughout the page.
* The color palette and design are original to this project.
