// --- FUNCTIONS FOR THE INDEX.HTML (MENU) PAGE ---

// Function Type 1: Change Something (Hide or Show part of the page)
function toggleWaffleTip() {
    // Get the element by ID
    const tipText = document.getElementById('tip-text');
    
    // Toggle the 'hidden' CSS class
    tipText.classList.toggle('hidden');
}


// Function Type 2: React to User (Run when someone clicks a button)
function changeHeaderColor() {
    // Get the header element
    const header = document.getElementById('main-header');
    
    // Define an array of colors
    const colors = ['#ffcc80', '#c8e6c9', '#bbdefb', '#f8bbd0'];
    
    // Pick a random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the style of the element
    header.style.backgroundColor = randomColor;
}

// Attach the function to the button click using an Event Listener
// Core JavaScript Feature: Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('color-btn');
    if (colorButton) {
        colorButton.addEventListener('click', changeHeaderColor);
    }
});


// Function Type 3: Use Core JavaScript (Updating the DOM)
function updateImageText(descriptionId) {
    // Get the description paragraph element using the passed ID
    const descriptionElement = document.getElementById(descriptionId);
    
    // Change the inner HTML/text content
    descriptionElement.textContent = "Yummy! You clicked on me!";
    
    // Optional: Change the style momentarily
    descriptionElement.style.color = '#ff4081'; // Hot Pink
    setTimeout(() => {
        descriptionElement.style.color = '#4a148c'; // Back to original
    }, 1000);
}


// --- FUNCTIONS FOR THE ORDER.HTML (FORM) PAGE ---

// Function Type 2: React to User (Update text live while the user is typing/changing input)
// Core JavaScript Feature: Variables and functions
function calculateTotal() {
    const BASE_PRICE = 5.00;
    const TOPPING_PRICE = 1.00;
    
    // 1. Get quantity
    const quantity = parseInt(document.getElementById('quantity').value) || 0;
    
    // 2. Count selected toppings
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    const toppingCount = toppings.length;
    
    // 3. Calculate total
    let total = (BASE_PRICE * quantity) + (toppingCount * TOPPING_PRICE);

    // 4. Update the DOM
    const totalDisplay = document.getElementById('total-display');
    totalDisplay.innerHTML = `Estimated Total: **$${total.toFixed(2)}**`;
}


// Function Type 3: Use Core JavaScript (If Statements)
function validateOrder(event) {
    const quantity = parseInt(document.getElementById('quantity').value);
    const errorMessage = document.getElementById('error-message');

    // Core JavaScript Feature: If Statements
    if (quantity < 1 || quantity > 10) {
        // Show error message and prevent form submission
        errorMessage.classList.remove('hidden');
        event.preventDefault(); // Stop the form from submitting
        return false;
    } else {
        // Hide error message and allow submission (or display confirmation)
        errorMessage.classList.add('hidden');
        alert("Waffle Order Submitted! Look for your confirmation email.");
        // Prevent form submission for this exercise, as there's no actual backend
        event.preventDefault();
        return true;
    }
}


// Function Type 1: Change Something (Change the style of an element)
function styleTopping(checkbox) {
    // Get the corresponding label element's ID
    const labelId = 'label-' + checkbox.id;
    const labelElement = document.getElementById(labelId);
    
    // Change style based on whether the box is checked
    if (checkbox.checked) {
        // Change the style of the element
        labelElement.style.fontWeight = 'bolder';
        labelElement.style.color = '#ff4081'; // Hot Pink
    } else {
        // Reset the style
        labelElement.style.fontWeight = 'normal';
        labelElement.style.color = '#4a148c'; // Back to original
    }
}
