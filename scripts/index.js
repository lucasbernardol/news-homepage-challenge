const menuOverlayRef = document.querySelector('[data-id="menu-overlay"]');

const burguerOpenRef = document.querySelector('[data-id="menu-open"]');
const burguerCloseRef = document.querySelector('[data-id="menu-close"]');

const _HIDDEN_CLASSNAME = 'hidden';

const hasClassName = (element, classname) => {
  return element.classList.contains(classname);
};

const removeClassName = (element, classname) => {
  return element.classList.remove(classname);
};

const addClassName = (element, classname) => {
  return element.classList.add(classname);
};

const burgerMenuOpen = () => {
  if (hasClassName(menuOverlayRef, _HIDDEN_CLASSNAME)) {
    // remove
    removeClassName(menuOverlayRef, _HIDDEN_CLASSNAME);
  }
};

function main() {
  /**
   * Events
   */
  burguerOpenRef.addEventListener('click', (event) => burgerMenuOpen(event));
  burguerCloseRef.addEventListener('click', (_event) => {
    addClassName(menuOverlayRef, _HIDDEN_CLASSNAME);
  });
}

window.addEventListener('load', () => {
  return main();
});
