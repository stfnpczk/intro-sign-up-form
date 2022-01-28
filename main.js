const form = document.getElementById("form");
const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const nodeList = [firstName, lastName, email, password];

/*--------------------------------------------------
preliminary helper functions for event listener
----------------------------------------------------*/

// Check inputs are filled out
const isEmpty = (inputArray) => {
  inputArray.forEach((input) => {
    if (!input.value) {
      displayError(
        input,
        `${input.getAttribute("placeholder")} cannot be empty`
      );
    }
  });
};

const checkEmail = (input) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(input.value)) {
    displayError(input, "Looks like this is not an email");
  }
};

const displayError = (input, errorMessage) => {
  const inputContainer = input.parentElement;
  inputContainer.classList = "form__input-container error";
  const message = inputContainer.querySelector("small");
  message.innerText = errorMessage;
};

const removeError = (input) => {
  const inputContainer = input.parentElement;
  inputContainer.classList.remove("error");
};

/*----------------------------
      event listeners
----------------------------*/
form.addEventListener("submit", (e) => {
  e.preventDefault();

  isEmpty(nodeList);

  if (email.value) {
    checkEmail(email);
  }
});

nodeList.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value) {
      removeError(input);
    }
  });
});
