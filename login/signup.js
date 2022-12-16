// Get and Post
let getRegUser = async (url) => {
  let res = await fetch(url);
  let data = await res.json();
  return data;
};

let postRegUser = async (url, body) => {
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-type": "application/json" },
  });
  alert("Signup Successful");
  console.log("Added Data");
  window.location.href = "./login.html";
};
// Get and Post
let userUrl = `https://nyka-json-server.onrender.com/nykaaRegUser`;
let nameInput = document.querySelector("#user-name");
let numberInput = document.querySelector("#user-number");
let emailInput = document.querySelector("#user-email");
let passwordInput = document.querySelector("#user-password");
let regBtn = document.querySelector("#registerBtn");
const lowerCase = new RegExp("(?=.*[a-z])");
const upperCase = new RegExp("(?=.*[A-Z])");
const hasNum = new RegExp("(?=.*[0-9])");
const specialChar = new RegExp("(?=.*[!@#$%^&*])");
const fourChar = new RegExp("(?=.{4,})");

showUserEmail();
function showUserEmail() {
  let userMail = JSON.parse(localStorage.getItem("recentUser")) || "";
  emailInput.value = userMail;
}
//   Form Validation
nameInput.addEventListener("input", validateName);
numberInput.addEventListener("input", validateNumber);
passwordInput.addEventListener("input", validatePassword);

function validateName() {
  let userName = nameInput.value;
  let nameMessage = document.querySelector("#name-message");
  if (userName.length == 0) {
    nameMessage.textContent = "PLEASE ENTER NAME";
  } else {
    nameMessage.innerHTML = "";
  }
}

function validateNumber() {
  let userNum = numberInput.value;
  let flag = true;
  for (let ele of userNum) {
    if (!hasNum.test(ele)) flag = false;
  }
  let numMessage = document.querySelector("#number-message");
  if (userNum.length == 10 && flag) {
    numMessage.textContent = "";
  } else {
    numMessage.innerHTML = "ENTER A VALID MOBILE NUMBER";
  }
}

function validatePassword() {
  let userPassword = passwordInput.value;
  let passMessage = document.querySelector("#password-message");

  if (
    lowerCase.test(userPassword) &&
    upperCase.test(userPassword) &&
    hasNum.test(userPassword) &&
    specialChar.test(userPassword) &&
    fourChar.test(userPassword)
  ) {
    passMessage.textContent = "";
  } else if (userPassword.length < 4) {
    passMessage.textContent = "PLEASE ENTER MINIMUM 4 CHARACTER";
  } else {
    passMessage.textContent = "PLEASE ENTER VALID PASSWORD";
  }
}
// Form Validation Ends here

// New User Registration
let registerBtn = document.querySelector("#registerBtn");
registerBtn.addEventListener("click", registerNewUser);
function registerNewUser(event) {
  event.preventDefault();
  let userName = nameInput.value;
  let userNum = numberInput.value;
  let userEmail = emailInput.value;
  let userPassword = passwordInput.value;

  let flag = true;
  for (let ele of userNum) {
    if (!hasNum.test(ele)) flag = false;
  }

  let isValidName = userName.length > 0;
  let isValidNum = userNum.length == 10 && flag;
  let isValidPass =
    lowerCase.test(userPassword) &&
    upperCase.test(userPassword) &&
    hasNum.test(userPassword) &&
    specialChar.test(userPassword) &&
    fourChar.test(userPassword);
  if (isValidName && isValidNum && isValidPass) {
    let user = {
      name: userName,
      phoneNumber: userNum,
      email: userEmail,
      password: userPassword,
    };

    postRegUser(userUrl, user);
    nameInput.value = "";
    numberInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  } else {
    alert("Failed");
  }
}
// if click on cross..

// New User Registration ends here
