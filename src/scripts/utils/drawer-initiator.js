const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toogleDrawer(event, drawer);
    });
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
    const navigations = document.querySelectorAll('#navigationDrawer a');
    navigations.forEach((navigation) => {
      navigation.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    });
  },

  _toogleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
