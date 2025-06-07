function calculateBodaFare() {
    let distanceInKm = parseFloat(prompt("Unafika wapi mkubwa? Kilomita ngapi?"));
    if (isNaN(distanceInKm) || distanceInKm <= 0,) {
        console.log("Tafadhali ingiza umbali sahihi kwa kilomita");
        return;
    }
    const baseFare = 50;
    const chargePerKm = 15;

    let rideFare = baseFare;
    let distanceFare = distanceInKm * chargePerKm;
    let totalFare = distanceFare * rideFare;

    console.log('Uko kwote? Io ni ${distanceInKm} km:');
    console,log('Ukikalia pikipiki: KES $(rideFare}');
    console.log('Mpaka huko: KES ${distanceFare}');
    console.log('Total: KES ${totalFare}');

    console.log('\nPanda Pikipiki');
}