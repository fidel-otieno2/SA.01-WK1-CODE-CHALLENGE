function estimateTransactionFee() {
  const userinput = prompt("Unatuma ngapi? (KES)");
  
  amountToSend = parseInt(userinput);

  if (isNaN(amountToSend) || amountToSend <= 0) {
    alert("Please enter a valid number!");
    return;
  }
  const minFee = 10; 
  const maxFee = 70; 
  const feePercentage = 0.015; 

  let actualtransactionFee = amountToSend * feePercentage;

  if (actualtransactionFee <= 10) {
    actualtransactionFee = 10; 
  } else if (actualtransactionFee >= 70) {
    actualtransactionFee = 70; 
  } else {
    actualtransactionFee = actualtransactionFee;
  }

  
  var message =
    `Sending KES ${amountToSend}\n` +
    `Calculated Transaction Fee KES ${actualtransactionFee}\n` +
    `Total Amount to be debited KES ${amountToSend + actualtransactionFee}\n\n` +
    `Send Money Securely`;

  
  console.log(message);
  alert(message);
}
estimateTransactionFee();
