function calculateBodaFare() {
    var distanceInKm = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
    distanceInKm = Number(distanceInKm);

    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        console.log("Tafadhali ingiza namba halali ya kilomita.");
        return;
    }

    let baseFare = 50;
    let chargePerKm = 15;
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    let message = `Uko kwote? Io ni ${distanceInKm} km:\n`;
    message += `Ukikalia Pikipiki: KES ${baseFare}\n`;
    message += `Mpaka Uko: KES ${distanceInKm * chargePerKm}\n`;
    message += `Total: KES ${totalFare}\n\n`;
    message += "Panda Pikipiki!";

    console.log(message);
}

calculateBodaFare();
