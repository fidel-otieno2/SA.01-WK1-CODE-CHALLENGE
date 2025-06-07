function estimateTransactionFee() {
    let amountToSend = parseFloat(prompt("Unatuma ngapi? (KES):"));
    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Please enter a valid amount");
        return;
    }
    let fee = amountToSend * 0.015;
    if (fee<10) {
        fee = 10;
    } else if (fee>70){
        fee = 70;
    }
    let totalAmount = amountToSend + fee;

    console.log('Sending KES ${amountToSend.toFixed(2)}:');
    console.log('Calculated Transaction Fee: KES ${fee.toFixed(2)}');
    console.log('Total amount to be debited: KES ${totalAmount.toFixed(2)}');


    console.log("\nSend Money Securely!");
}