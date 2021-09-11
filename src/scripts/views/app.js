import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import './component/unexpected-problem';
import './component/app-footer';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._initializeApp();
  }

  _initializeApp() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    document.querySelector('.app-bar').classList.add('fixed-nav');
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    try {
      this._content.innerHTML = await page.render();
      const statusAfterRender = await page.afterRender();
      if (statusAfterRender.toLowerCase().includes('not found')) {
        this.renderNotFound();
      } else if (statusAfterRender.toLowerCase().includes('failed to fetch')) {
        this.renderOffline();
      } else if (statusAfterRender.toLowerCase().includes('empty favorites')) {
        this.renderEmptyFavorite();
      } else {
        document.querySelector('.app-bar').classList.remove('fixed-nav');
      }
    } catch (error) {
      console.log('ini error', error);
    }
    console.log('ini perubahan halaman');
    if (!document.querySelector('app-footer')) {
      const appFooter = document.createElement('app-footer');
      document.body.appendChild(appFooter);
    }
  }

  renderNotFound() {
    const unexpectedProblem = document.createElement('unexpected-problem');
    unexpectedProblem.problemAttribute = {
      image: './images/not-found',
      title: "Sorry, we couldn't find what you were looking for anywhere",
      className: 'not-found',
    };
    this._content.innerHTML = '';
    this._content.appendChild(unexpectedProblem);
    document.documentElement.scrollTop = 0;
  }

  renderEmptyFavorite() {
    const unexpectedProblem = document.createElement('unexpected-problem');
    unexpectedProblem.problemAttribute = {
      image: './images/empty',
      title: "Sorry, it looks like you haven't added a favorite before",
      className: 'empty-favorite',
    };
    this._content.innerHTML = '';
    this._content.appendChild(unexpectedProblem);
    document.documentElement.scrollTop = 0;
  }

  renderOffline() {
    const unexpectedProblem = document.createElement('unexpected-problem');
    unexpectedProblem.problemAttribute = {
      image: './images/server-error',
      title: 'Oops, it looks like you are offline right now, load this page at least once while you are online',
      className: 'offline',
    };
    this._content.innerHTML = '';
    this._content.appendChild(unexpectedProblem);
    document.documentElement.scrollTop = 0;
  }
}

export default App;
