const updatedEl = document.getElementById("update-cont");
const thanksEl = document.getElementById("thanks-cont");
const emailBtn = document.getElementById("email-button");
const thanksBtn = document.getElementById("thanks-button");
const form = document.querySelector("form");
const errorMessage = document.getElementById("error-message");
const email = document.getElementById("email");
const thanksEmail = document.getElementById("thanks-inner");

thanksBtn.addEventListener("click", (e) => {
  e.preventDefault();
  thanksEl.classList.add("hidden");
  updatedEl.classList.remove("hidden");
});

emailBtn.addEventListener("click", (e) => {
  if (
    email.value === "" ||
    email.value == null ||
    !email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    errorMessage.innerText = "Valid email required";
    email.style.border = "1px solid var(--Red)";
    email.style.backgroundColor = "var(--Red-100)";
    email.style.color = "var(--Red)";
    errorMessage.classList.add("error-message");
  } else {
    updatedEl.classList.add("hidden");
    thanksEl.classList.remove("hidden");
    thanksEmail.innerText = `${email.value}`;
  }
  e.preventDefault();
});
