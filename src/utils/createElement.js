const createElement = ({
  tagName = 'div',
  text = '',
  classes = [],
  attributes = {},
  listeners = [],
  children = []
}) => {
  const element = document.createElement(tagName);

  /** set text content */
  element.textContent = text;

  /** add classes */
  element.classList.add(...classes);

  /** set attributes */
  for (const [ key, value ] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }

  /** add event listeners */
  for (const { event, callback } of listeners) {
    element.addEventListener(event, callback);
  }

  /** create and append children */
  for (const childElement of createBulkElement(children)) {
    element.appendChild(childElement);
  }

  return element;
};


export const createBulkElement = (elements) => {
  return elements.map((element) => createElement(element));
};


export default createElement;
