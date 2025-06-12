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

    let message = (`Uko kwote? Io ni ${distanceInKm} km:\n
        Ukikalia Pikipiki: KES ${baseFare}\n
        Mpaka Uko: KES ${distanceInKm * chargePerKm}\n
        Total: KES ${totalFare}\n\n
        Panda Pikipiki!`
    )

    alert(message);
}

calculateBodaFare();
