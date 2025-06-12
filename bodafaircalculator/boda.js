function calculateBodaFare() {
    // Prompt user for distance in kilometers
    var distanceInKm = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
    distanceInKm = Number(distanceInKm);

    // Validate input: must be a positive number
    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        console.log("Tafadhali ingiza namba halali ya kilomita.");
        return;
    }

    // Set base fare and per kilometer charge
    let baseFare = 50;
    let chargePerKm = 15;
    // Calculate total fare
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    // Prepare message to display fare breakdown
    let message = (`Uko kwote? Io ni ${distanceInKm} km:\n
        Ukikalia Pikipiki: KES ${baseFare}\n
        Mpaka Uko: KES ${distanceInKm * chargePerKm}\n
        Total: KES ${totalFare}\n\n
        Panda Pikipiki!`
    )

    // Show fare breakdown to user
    alert(message);
}

// Call the function to run the calculator
calculateBodaFare();