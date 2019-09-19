const SELECTED_FRUIT = "Apple";
const WORD_TO_PREPEND = "Only";

function isEquals(first, second) {
  return first === second ? true : false;
}

function isElement(element) {
  const result = element instanceof Element || element instanceof HTMLDocument;
  if (!result) {
    console.warn("You must provide valid HTML Element");
  }
  return result;
}

function prependText(initialString, textToPrepend) {
  return textToPrepend + " " + initialString;
}

function createElement(value, elementType) {
  if (!elementType) {
    elementType = "li";
  }
  const element = document.createElement(elementType);
  element.innerHTML = value;
  return element;
}

function appendTo(containerName, element) {
  const selectedContainer = document.querySelector(containerName);

  if (!containerName || !selectedContainer || !element || !isElement(element)) {
    return;
  }

  return selectedContainer.appendChild(element);
}

const fruits = ["Banana", "Apple", "Orange", "Lemon"];

fruits.forEach(fruit => {
  if (isEquals(fruit, SELECTED_FRUIT)) {
    fruit = prependText(fruit, WORD_TO_PREPEND);
  }
  const element = createElement(fruit);
  appendTo("#jsFruitsContainer", element);
});
