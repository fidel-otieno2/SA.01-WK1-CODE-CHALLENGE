# SA.01-WK1-CODE-CHALLENGE
# ☕ Challenge 1: Chai Bora Ingredient Calculator

A simple JavaScript program that calculates the exact amount of ingredients needed to prepare **Kenyan Chai** for any number of cups based on a standard recipe.

---

## Project Description

This project prompts the user for the number of cups of Chai Bora they want to prepare and provides a clear breakdown of the required ingredients, including water, milk, tea leaves (majani), and sugar (sukari).

---

## Standard Chai Recipe (Per 1 Cup)

- Water: **200 ml**
- Milk: **50 ml**
- Tea Leaves (Majani): **1 tablespoon**
- Sugar (Sukari): **2 teaspoons**

---

## Features

- Prompts the user via `prompt()` to enter number of cups
- Performs calculations based on a fixed recipe
- Validates input (must be a positive number)
- Displays a clean, easy-to-read breakdown of ingredients in the console
- Outputs a friendly message encouraging chai enjoyment


## Usage

1. Open this script in a browser environment (e.g., inside a `<script>` tag in an HTML file).
2. When the script runs, a prompt will appear asking for the number of cups.
3. Enter a **positive whole number**.
4. Check your browser’s **console** to view the ingredient list.

---

## Code Summary

```javascript
function calculateChaiIngredients() {
    let numberOfCups = parseInt(prompt('Karibu! How many cups of Chai Bora would you like to make?'), 10);

    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid number of cups.");
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

calculateChaiIngredients();

---
# Boda Boda Fare Calculator

A simple JavaScript program that estimates the total fare for a boda boda (motorbike taxi) ride based on trip distance.

---

## Description

This calculator uses a fixed base fare and a per-kilometer charge to help users estimate how much a ride will cost. The program prompts the user to input the trip distance (in kilometers), performs the calculation, and prints a clear breakdown of the charges to the console.

---

## Fare Structure

- **Base Fare**: KES 50 (charged on every ride)
- **Per Kilometer Charge**: KES 15/km

---

## How It Works

The fare is calculated using the formula:

## Usage

1. Run the script in a browser or environment that supports `prompt()` (like a simple HTML page).
2. You’ll be asked:  
   `Unafika wapi mkubwa? Kilomita ngapi?`
3. Enter the trip distance (e.g., `5`).
4. The console will show a full breakdown of the ride fare.


## Code Summary

```javascript
function calculateBodaFare() {
    let distanceInKm = parseFloat(prompt("Unafika wapi mkubwa? Kilomita ngapi?"));

    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        console.log("Tafadhali ingiza umbali sahihi kwa kilomita.");
        return;
    }

    const baseFare = 50;
    const chargePerKm = 15;

    let rideFare = baseFare;
    let distanceFare = distanceInKm * chargePerKm;
    let totalFare = rideFare + distanceFare;

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${rideFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}`);

    console.log("\nPanda Pikipiki!");
}

calculateBodaFare();

---
## Mobile Money Transaction Fee Estimator

A simple JavaScript program that calculates mobile money transaction fees based on a basic 1.5% rule, with minimum and maximum fee limits. This helps users quickly estimate the total cost of sending money.

---

## Description

This program simulates a mobile money transaction fee estimator. It prompts the user to enter the amount of money they want to send, calculates the applicable fee, and displays the total amount to be debited.

---

## Fee Structure

- **Standard Fee:** 1.5% of the amount
- **Minimum Fee:** KES 10 (if 1.5% is less than 10)
- **Maximum Fee:** KES 70 (if 1.5% is more than 70)

---

## How It Works
fee = amount × 1.5%
if (fee < 10) → fee = 10
if (fee > 70) → fee = 70
total = amount + fee


## Usage

1. Open the script in a browser or JavaScript environment that supports `prompt()`.
2. You’ll be prompted:  
   `Unatuma ngapi? (KES):`
3. Enter a valid amount you'd like to send.
4. Check your console for the fee breakdown and total amount.

# Code Summary

```javascript
function estimateTransactionFee() {
    let amountToSend = parseFloat(prompt("Unatuma ngapi? (KES):"));

    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Please enter a valid amount.");
        return;
    }

    let fee = amountToSend * 0.015;

    if (fee < 10) {
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }

    let totalAmount = amountToSend + fee;

    console.log(`Sending KES ${amountToSend.toFixed(2)}:`);
    console.log(`Calculated Transaction Fee: KES ${fee.toFixed(2)}`);
    console.log(`Total amount to be debited: KES ${totalAmount.toFixed(2)}`);

    console.log("\nSend Money Securely!");
}

estimateTransactionFee();



