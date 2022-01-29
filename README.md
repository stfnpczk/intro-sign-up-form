# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

<br>

![](./design/desktop-preview.jpg)


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*



### Links

- [Frontend Mentor - solution URL](https://www.frontendmentor.io/solutions/intro-component-signup-form-using-scss-and-flexbox-bU8RHuRzx)
- [Live Demo](https://stfnpczk.github.io/intro-sign-up-form/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- JavaScript
- BEM methodology
- Flexbox
- Mobile-first workflow


### What I learned

**1)** Toggle styling with and without error using classList and class chaining:


- `classList`: property to manipulate DOMTokenList 


**js**
```js
const displayError = (input, errorMessage) => {
  const inputContainer = input.parentElement;
  inputContainer.classList = "form__input-container error";
};

const removeError = (input) => {
  const inputContainer = input.parentElement;
  inputContainer.classList.remove("error");
};
```
<br>

- `chain classes` : target element by chaining

**scss**
```scss
   &__input-container.error &__error-message {
     display: block;
     (...)
   }

  &__input-container &__error-message {
    display: none;
  }
```

<br><br>

**2)** Loop over and manipulate nodelist elements


```js
const isEmpty = (nodelist) => {
  nodelist.forEach((input) => {
    if (!input.value) {
      displayError(input,`${input.getAttribute("placeholder")} cannot be empty`);
    }
  });
};
```




### Useful resources

- [classList --> MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) 
- [class chaining --> css-tricks](https://css-tricks.com/multiple-class-id-selectors/)


## Author
- Frontend Mentor - [@stfnpczk](https://www.frontendmentor.io/profile/stfnpczk)


