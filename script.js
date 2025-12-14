// Select all price elements
const prices = document.querySelectorAll('[data-ns-test="prices"]');

let total = 0;

// Calculate total dynamically
prices.forEach(price => {
  total += Number(price.textContent);
});

// Create a new table row
const table = document.querySelector("table");
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");

// Span across all columns
totalCell.colSpan = 2;
totalCell.setAttribute("data-ns-test", "grandTotal");
totalCell.textContent = total;

// Append cell and row
totalRow.appendChild(totalCell);
table.appendChild(totalRow);
