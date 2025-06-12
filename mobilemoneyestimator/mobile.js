function estimateTransactionFee() {
  // Prompt user for the amount to send
  const userinput = prompt("Unatuma ngapi? (KES)");
  
  // Convert input to integer
  amountToSend = parseInt(userinput);

  // Validate input: must be a positive number
  if (isNaN(amountToSend) || amountToSend <= 0) {
    alert("Please enter a valid number!");
    return;
  }

  // Set minimum, maximum, and percentage fee values
  const minFee = 10; 
  const maxFee = 70; 
  const feePercentage = 0.015; 

  // Calculate the transaction fee based on percentage
  let actualtransactionFee = amountToSend * feePercentage;

  // Apply minimum and maximum fee limits
  if (actualtransactionFee <= 10) {
    actualtransactionFee = 10; 
  } else if (actualtransactionFee >= 70) {
    actualtransactionFee = 70; 
  } else {
    actualtransactionFee = actualtransactionFee;
  }

  // Prepare the message to display the fee breakdown
  var message =
    `Sending KES ${amountToSend}\n` +
    `Calculated Transaction Fee KES ${actualtransactionFee}\n` +
    `Total Amount to be debited KES ${amountToSend + actualtransactionFee}\n\n` +
    `Send Money Securely`;

  // Output the message to console and alert
  console.log(message);
  alert(message);
}

// Call the function to run the estimator
estimateTransactionFee();