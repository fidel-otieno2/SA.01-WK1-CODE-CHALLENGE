function calculateChaiIngredients() {
    // Prompt the user for the number of cups they want to make
    let numberOfCups = window.prompt("Karibu! How many cups of Chai Bora would you like to make?")
    numberOfCups = Number(numberOfCups);

    // Validate input: must be a positive number
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid number of cups.");
        return;
    }

    // Calculate ingredient amounts based on the number of cups
    let water = numberOfCups * 200;         // 200 ml water per cup
    let milk = numberOfCups * 50;           // 50 ml milk per cup
    let teaLeaves = numberOfCups * 1;       // 1 tablespoon tea leaves per cup
    let sugar = numberOfCups * 2;           // 2 teaspoons sugar per cup

    // Prepare the message to display the ingredient list
    let message = (`To make ${numberOfCups} cups of Kenyan Chai, you will need:\n
            Water: ${water} ml\n
            Milk: ${milk} ml\n
            Tea Leaves (Majani): ${teaLeaves} tablespoons\n
            Sugar (Sukari): ${sugar} teaspoons\n
            Enjoy your Chai Bora!`
    )

    // Show the ingredient list to the user
    alert(message);
}

// Call the function to run the calculator
calculateChaiIngredients();