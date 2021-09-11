import 'regenerator-runtime'; /* for async await transpile */
import './views/component/app-bar';
import App from './views/app';
import '../styles/main.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
  });

  window.addEventListener('hashchange', () => {
    console.log('ini hash change');
    // document.querySelector('app-loading').style.display = 'fixed';
    app.renderPage();
  });

  const swRegister = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js').then(() => {
        console.log('service worker successfully registered');
      }).catch((err) => {
        console.log('service worker failed to register', err);
      });
    } else {
      console.log("your browser dosn't support service worker");
    }
  };

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });

  window.onscroll = () => {
    const appBar = document.querySelector('.app-bar');
    const docElScrollTop = document.documentElement.scrollTop;
    if (docElScrollTop > (appBar.scrollHeight)) {
      appBar.classList.add('sticky-nav');
    } else {
      appBar.classList.remove('sticky-nav');
    }
  };
});
