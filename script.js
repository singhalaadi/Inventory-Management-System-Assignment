// Inventory Management System

// Initial Inventory
let inventory = [
    { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.2 },
];

// Function to add a new item to the inventory
function addItem(inventory, item) {
    inventory.push(item);
    console.log("Item added:", item);
    printInventory(inventory);
}

// Function to update an existing item in the inventory
function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
        console.log(`Item with id ${id} updated.`);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
    printInventory(inventory);
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        const removedItem = inventory.splice(index, 1);
        console.log(`Item with id ${id} removed:`, removedItem[0]);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
    printInventory(inventory);
}

// Function to get an item from the inventory by id
function getItem(inventory, id) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        console.log(`Item with id ${id}:`, item);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
    return item;
}

// Function to print the inventory
function printInventory(inventory) {
    console.log("Current Inventory:", JSON.stringify(inventory, null, 2));
}

// Main Program Demonstration

console.log("Initial Inventory:");
printInventory(inventory);

// Add a new item
addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });

// Update an item
updateItem(inventory, 2, { quantity: 30 });

// Delete an item
deleteItem(inventory, 2);

// Get an item
getItem(inventory, 1);
