
    let paymentSuccess = false;
    function validateForm() {
  // Fetch form fields
  const fullName = document.getElementById('fullName').value;
  const username = document.getElementById('username').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const signupEmail = document.getElementById('signupEmail').value;
  const gender = document.getElementById('gender').value;
  const signupPassword = document.getElementById('signupPassword').value;

  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regular expression for phone number validation
  const phonePattern = /^\d{10}$/;

  // Check if all fields are filled
  if (!fullName || !username || !phoneNumber || !signupEmail || !gender || !signupPassword) {
    alert('Please fill in all fields.');
    return false;
  }

  // Check if the email is valid
  if (!signupEmail.match(emailPattern)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // Check if the phone number is valid
  if (!phoneNumber.match(phonePattern)) {
    alert('Please enter a valid 10-digit phone number.');
    return false;
  }

  // Add more custom validations as needed

  // If all validations pass, the form will be submitted
  return true;
}

function showPaymentSection() {
    // Step 2: Check if the payment is successful before proceeding to the registration section
    if (paymentSuccess) {
      document.getElementById("registerSection").style.display = "block";
      document.getElementById("paymentSection").style.display = "none";
    } else {
      alert("Please complete the payment process first.");
    }
  }
function confirmPayment() {
  // Step 3: Process the payment (you should implement the server-side logic separately)
  // For this example, we'll simulate a successful payment.
  setTimeout(function () { 
    paymentSuccess = true;
    handlePaymentSuccess(); // Assuming the payment was successful
    showPaymentSection(); // Proceed to the registration section
    document.getElementById("nextButton").removeAttribute("disabled"); // Enable the "Register" button
  }, 2000);
}

    function togglePasswordVisibility(inputId) {
      const passwordInput = document.getElementById(inputId);
      const passwordToggle = passwordInput.nextElementSibling;

      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = 'Hide';
      } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = 'Show';
      }
    }

    const formInputs = document.querySelectorAll('input, select');
        for (const input of formInputs) {
            input.addEventListener('input', () => {
                validateInputs();
            });
        }

        function validateInputs() {
          const fullName = document.getElementById('fullName').value;
  const username = document.getElementById('username').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const signupEmail = document.getElementById('signupEmail').value;
  const gender = document.getElementById('gender').value;
  const signupPassword = document.getElementById('signupPassword').value;

  const nextButton = document.getElementById('nextButton');
  const errorText = document.getElementById('errorText');

  if (fullName && username && phoneNumber && signupEmail && gender && signupPassword) {
    nextButton.removeAttribute('disabled');
    errorText.textContent = '';
  } else {
    nextButton.setAttribute('disabled', 'true');
    errorText.textContent = 'Please fill in all required fields.';
  }
}

// aaaaaa
document.addEventListener("DOMContentLoaded", function() {
  showRandomInformationPage();
});

let previousPageIndex = -1;

function showRandomInformationPage() {
  const pages = document.querySelectorAll(".information-page");
  let randomPageIndex = Math.floor(Math.random() * pages.length);

  // Ensure the next random page is different from the previous one
  while (randomPageIndex === previousPageIndex) {
    randomPageIndex = Math.floor(Math.random() * pages.length);
  }

  previousPageIndex = randomPageIndex;

  pages.forEach((page, index) => {
    if (index === randomPageIndex) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
}


  /*aaaaaaaaa*/

  function openPaymentPopup() {
    // Show the payment overlay
    document.getElementById("paymentOverlay").classList.add("visible");
  }

  function handlePayment() {
    // Perform validation checks here
    var fullName = document.querySelector("input[placeholder='Enter your Full Name']").value;
    var email = document.querySelector("input[placeholder='Enter your Email']").value;
    var paymentOption = document.getElementById("ss").value;
    var paymentVoucher = document.getElementById("fileInput").value;

    if (fullName.trim() === "" || email.trim() === "" || paymentOption === "" || paymentVoucher === "") {
      alert("Please fill all the required fields and upload the payment voucher.");
      return;
    }

    // Perform payment processing here. For this example, we'll simulate a successful payment after a delay.
    setTimeout(function() {
      handlePaymentSuccess();
    },);
  }

  function handlePaymentSuccess() {
    // Hide the payment overlay
    document.getElementById("paymentOverlay").classList.remove("visible");

    // Fill the input box and disable it for further input
    var paymentPageInput = document.getElementById("paymentPage");
    paymentPageInput.value = "Payment Successfully";
    paymentPageInput.classList.add("disabled-input");
  }

//register or payment page error


function registerUser() {
  const paymentPageInput = document.getElementById("paymentPage").value.trim();

  // Check if the paymentPageInput is not empty
  if (paymentPageInput !== "") {
      // Process user registration here (e.g., send form data to the server)
      // For this example, we'll just show an alert indicating successful registration.
      alert("User registered successfully!");


      // Redirect to the "dd.html" page after successful registration
      window.location.href = "dd.html";
  } else {
      alert("Please go to the payment page and complete the payment process first.");
  }
}

