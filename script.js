const sizes = [
"195/65R15","205/65R15","215/70R15","235/75R15",
"205/55R16","205/65R16","265/70R16","265/75R16","235/60R16","215/60R16",
"215/55R17","225/60R17","225/65R17","265/70R17","225/45R17","235/65R17","265/65R17",
"245/60R18","235/65R18","275/65R18","225/45R18","235/55R18","265/65R18","225/55R18",
"235/55R19","245/45R19","255/55R19","265/55R19","235/40R19","225/55R19",
"275/60R20","245/40R20","245/45R20","255/55R20","235/55R20"
];

const inventoryContainer = document.getElementById("inventory");
const sizeFilter = document.getElementById("sizeFilter");

// Populate dropdown
sizes.forEach(size => {
  const option = document.createElement("option");
  option.value = size;
  option.textContent = size;
  sizeFilter.appendChild(option);
});

// Display inventory
function displayInventory(filter) {
  inventoryContainer.innerHTML = "";

  const filtered = filter === "all" ? sizes : sizes.filter(size => size === filter);

  filtered.forEach(size => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${size}</h3>
      <p>In Stock</p>
      <button onclick="callNow()">Call (850) 816-1554</button>
    `;

    inventoryContainer.appendChild(card);
  });
}

sizeFilter.addEventListener("change", (e) => {
  displayInventory(e.target.value);
});

function callNow() {
  window.location.href = "tel:8508161554";
}

displayInventory("all");
