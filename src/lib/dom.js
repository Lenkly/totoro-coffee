export function createElement(tagName, attributes = {}) {
  const element = document.createElement(tagName);
  Object.keys(attributes).forEach(attributeKey => {
    element[attributeKey] = attributes[attributeKey];
  });
  return element;
}

export function appendContent(parent, content) {
  if (Array.isArray(content)) {
    content.forEach(element => {
      parent.appendChild(element);
    });
  } else {
    if (typeof content === 'undefined') {
      const emptyElement = createElement('div');
      parent.appendChild(emptyElement);
    } else {
      parent.appendChild(content);
    }
  }
}
