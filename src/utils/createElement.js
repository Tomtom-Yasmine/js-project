
const createElement = ({ tagName, ...rest }) => {
  const element = document.createElement(tagName);

  if ('classList' in rest) {
    element.classList.add(...rest.classList);
  }

  if ('text' in rest) {
    element.textContent = rest.text;
  }

  if ('attributes' in rest) {
    for (const [key, value] of Object.entries(rest.attributes)) {
      element.setAttribute(key, value);
    }
  }

  if ('listeners' in rest) {
    for (const { event, callback } of rest.listeners) {
      element.addEventListener(event, callback);
    }
  }

  if ('children' in rest) {
    for (const e of createBulkElement(rest.children)) element.appendChild(e);
  }

  return element;
};

export const createBulkElement = (elements) => {
  const result = [];
  for (let element of elements) {
    result.push(createElement(element));
  }
  return result;
};


export default createElement;