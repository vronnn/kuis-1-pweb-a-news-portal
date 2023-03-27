const signupForm = document.getElementById("signupForm");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("message");
const submitbtn = document.getElementById("submitbtn");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value;
  if (email.trim() === "") {
    alert("Please enter your email");
    return;
  } else {
    message.textContent = `Thank you for signing up ${email.replace(
      "@gmail.com",
      ""
    )}!`;
    signupForm.style.display = "none";
    emailInput.style.display = "none";
    submitbtn.style.display = "none";
    message.style.display = "block";
  }
});
