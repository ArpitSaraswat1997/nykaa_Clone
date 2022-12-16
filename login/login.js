let userUrl = `https://nyka-json-server.onrender.com/nykaaRegUser`;
// Get
let getRegUser = async () => {
  let res = await fetch(userUrl);
  let data = await res.json();
  return data;
};
// Get ends here

const lowerCase = new RegExp("(?=.*[a-z])");
const upperCase = new RegExp("(?=.*[A-Z])");
const hasNum = new RegExp("(?=.*[0-9])");
const specialChar = new RegExp("(?=.*[!@#$%^&*])");
const fourChar = new RegExp("(?=.{4,})");
const hasAt = new RegExp("(?=.*@)");

let inputEmail = document.querySelector("#user-email");
let inputPassword = document.querySelector("#user-password");
let proceedBtn = document.querySelector("#proceedBtn");
let loginBtn = document.querySelector("#loginBtn");

proceedBtn.addEventListener("click", verifyEmail);

loginBtn.addEventListener("click", verifyUser);

async function verifyUser(event) {
  event.preventDefault();

  let email = inputEmail.value;
  let password = inputPassword.value;

  let isValidPass =
    lowerCase.test(password) &&
    upperCase.test(password) &&
    hasNum.test(password) &&
    specialChar.test(password) &&
    fourChar.test(password);

  if (!isValidPass) return;

  let allUsers = await getRegUser();
  // console.log(allUsers);
  let flag = false;
  allUsers.forEach((nykaaUser) => {
    if (email == nykaaUser.email && password == nykaaUser.password) {
      flag = true;
      alert("Login Successful");
      let user = nykaaUser.name;
      let username = user.toUpperCase();
      localStorage.setItem("loginstatus", 1);
      localStorage.setItem("username", username);
      window.location.href = "../index.html";
      // return;
    }
  });
  if (!flag) {
    alert("Invalid Email or Password");
  }
}

async function verifyEmail(event) {
  event.preventDefault();
  let email = inputEmail.value;
  if (!hasAt.test(email)) {
    return;
  }

  let allUsers = await getRegUser();

  if (allUsers.length == 0) {
    localStorage.setItem("recentUser", JSON.stringify(email));
    window.location.href = "./signup.html";
    return;
  }

  let flag = false;
  allUsers.forEach((nykaaUser) => {
    if (email == nykaaUser.email) {
      inputEmail.value = email;
      document.querySelector("#password-div").style.display = "block";
      proceedBtn.style.display = "none";
      loginBtn.style.display = "block";
      flag = true;
      return;
    }
  });
  if (!flag) {
    localStorage.setItem("recentUser", JSON.stringify(email));
    window.location.href = "./signup.html";
  }
}

//   Form Validation

inputEmail.addEventListener("input", validateEmail);
inputPassword.addEventListener("input", validatePassword);

function validateEmail() {
  let userEmail = inputEmail.value;

  if (userEmail.length < 3 || !hasAt.test(userEmail)) {
    document.querySelector("#email-message").textContent = "Enter Valid Email";
  } else {
    document.querySelector("#email-message").textContent = "";
  }
}

function validatePassword() {
  let userPassword = inputPassword.value;
  let passMessage = document.querySelector("#password-messege");

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
//   Form Validation ends here
