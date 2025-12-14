//your code here
// Step 1: Select all price elements
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

// Step 2: Calculate total price
let totalPrice = 0;
priceElements.forEach(priceElement => {
    const price = parseFloat(priceElement.textContent); // Convert to float
    totalPrice += price; // Add to total
});

// Step 3: Create a new row for the total
const table = document.querySelector('table'); // Select your table
const newRow = document.createElement('tr'); // Create a new row
const newCell = document.createElement('td'); // Create a new cell
newCell.textContent = `Total: ${totalPrice}`; // Set total price text
newCell.setAttribute('data-ns-test', 'grandTotal'); // Set data attribute

// Step 4: Append the new cell to the row and the row to the table
newRow.appendChild(newCell);
table.appendChild(newRow);