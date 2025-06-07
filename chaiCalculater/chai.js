function calculateChaiIngredients() {
    let numberOfCups = parseInt(prompt('Karibu! How many cups of Chai Bora would you like to make?'), 10);

    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid number of cups")
        return;
    }

    let water = numberOfCups * 200;
    let milk = numberOfCups * 50; 
    let teaLeaves = numberOfCups * 1;
    let sugar = numberOfCups * 2; 

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoon(s)`);
    console.log(`Sugar (Sukari): ${sugar} teaspoon(s)`);

    console.log("\nEnjoy your Chai Bora!");

}
