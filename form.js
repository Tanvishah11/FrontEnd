function calculateLoan() {
  // Get input values
  const employeeId = document.getElementById("employeeId").value;
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const designation = document.getElementById("designation").value;
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const dateOfLoan = document.getElementById("dateOfLoan").value;
  const interestRate = getInterestRate(designation);

  // Check employee ID format
  if (employeeId.length < 4 || !employeeId.startsWith("E")) {
    alert('Employee ID must be at least four characters and start with "E".');
    return;
  }

  // Calculate loan amount and interest based on interest rate
  const calculatedInterest = loanAmount * (interestRate / 100);
  const totalAmountPayable = loanAmount + calculatedInterest;

  // Display results
  alert(
    `Calculated Loan Amount: ${loanAmount}\nCalculated Interest: ${calculatedInterest}\nTotal Amount Payable: ${totalAmountPayable}`
  );
}

function getInterestRate(designation) {
  // Define interest rates based on designation (you can customize these rates)
  switch (designation) {
    case "Manager":
      return 10;
    case "Engineer":
      return 8;
    case "Analyst":
      return 6;
    default:
      return 5;
  }
}
