// Listen for Form Repayment Months Input
document.getElementById('repayYears').addEventListener('input', function() {
  // Update Repayment in Months based on Years entered
  const repayYears = document.getElementById('repayYears');
  document.getElementById('repayMonths').value = parseFloat(repayYears.value) * 12;
});

// Listen for Form Repayment Years Input
document.getElementById('repayMonths').addEventListener('input', function() {
  // Update Repayment in Years based on Months entered
  const repayMonths = document.getElementById('repayMonths');
  document.getElementById('repayYears').value = parseFloat(repayMonths.value) / 12;
});

// Listen for Form Submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
  // Hide results
  document.getElementById('results').style.display = 'none';

  // Show loading gif
  document.getElementById('loading').style.display = 'block';

  // Calculate Results
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  console.log('Calculating...');

  // UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const repayYears = document.getElementById('repayYears');
  const repayMonths = document.getElementById('repayMonths');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(repayYears.value) * 12 || parseFloat(repayMonths.value);

  // Compute monthly payment
  const calcX = Math.pow(1 + calculatedInterest, calculatedPayments);
  const calcMonthly = (principal * calcX * calculatedInterest) / (calcX - 1);

  if (isFinite(calcMonthly)) {
    monthlyPayment.value = calcMonthly.toFixed(2);
    totalPayment.value = (calcMonthly * calculatedPayments).toFixed(2);
    totalInterest.value = (calcMonthly * calculatedPayments - principal).toFixed(2);

    // Show results
    document.getElementById('results').style.display = 'block';

    // Hide loading gif
    document.getElementById('loading').style.display = 'none';
  } else {
    // if number is not finite, user error
    console.log('Please check your numbers');
    showError('Please check your numbers');
  }
}

// Show Error
function showError(error) {
  // Hide results
  document.getElementById('results').style.display = 'none';

  // Hide loading gif
  document.getElementById('loading').style.display = 'none';

  //Create div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class name
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 2000);
}
