const { MessageChannel } = require("worker_threads");

function calculateChaiIngredients() {
    let numberOfCups = window.prompt("Karibu! How many cups of Chai Bora would you like to make?")
    numberOfCups = Number(numberOfCups);

    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid number of cups.");
        return;
    }

    let water = numberOfCups * 200;
    let milk = numberOfCups * 50;
    let teaLeaves = numberOfCups * 1;
    let sugar = numberOfCups * 2;

    let message = Message(`To make ${numberOfCups} cups of Kenyan Chai, you will need:\n`;
            `Water: ${water} ml\n`;
            `Milk: ${milk} ml\n`;
            `Tea Leaves (Majani): ${teaLeaves} tablespoons\n`;
            `Sugar (Sukari): ${sugar} teaspoons\n`;
            "Enjoy your Chai Bora!";
    )

    console.log(message);
}

calculateChaiIngredients();
