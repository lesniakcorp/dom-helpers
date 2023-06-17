/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {Array|string} classNames  - list or name of CSS class
 * @param  {object} attributes        - any attributes
 *
 * @returns {Element}
 */
function make(tagName, classNames = null, attributes = {}) {
  const el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (const attrName in attributes) {
    el[attrName] = attributes[attrName];
  }

  return el;
}

/**
 * @param  {HTMLElement} el
 * @param  {string} className
 *
 * @returns {boolean}
 */
function hasClass(el, className) {
  return el.classList.contains(className);
}

/**
 * @param  {HTMLElement} el
 * @param  {string} className
 *
 * @returns {void}
 */
function addClass(el, className) {
  return el.classList.add(className);
}

/**
 * @param  {HTMLElement} el
 * @param  {string} className
 *
 * @returns {void}
 */
function removeClass(el, className) {
  return el.classList.remove(className);
}

/**
 * @param  {HTMLElement} el
 * @param  {string} className
 * @param  {boolean} force
 *
 * @returns {boolean}
 */
function toggleClass(el, className, force) {
  return el.classList.toggle(className, force);
}

module.exports = { make, hasClass, addClass, removeClass, toggleClass };
