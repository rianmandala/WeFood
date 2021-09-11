class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .app-bar {
          display: flex;
          position: absolute;
          justify-content: space-between;
          align-items: center;
          background: transparent;
          padding: 24px 60px;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 999;
        }
        .app-bar .brand img {
          width: 160px;
        }
        .app-bar .btn-menu {
          background: none;
          border: none;
          display: none;
          width: 44px;
          height: 44px;
        }
        .app-bar .btn-menu img {
          width: 26px;
        }
        .app-bar .btn-menu:hover {
          cursor: pointer;
        }
        .app-bar .navigation ul {
          display: flex;
          margin: 0;
          padding: 0;
          margin: 0;
        }
        .app-bar .navigation li {
          list-style-type: none;
        }
        .app-bar .navigation li a {
          display: inline-block;
          position: relative;
          text-decoration: none;
          height: 44px;
          line-height: 44px;
          padding: 0 16px;
          margin-left: 18px;
          color: #fff;
          font-size: 20px;
        }
        .app-bar .navigation li a:after {
          content: "";
          display: block;
          position: absolute;
          background: #FFC107;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 16px;
          transition: width 0.3s ease-in-out;
        }
        .app-bar .navigation li a:hover:after {
          width: 50% !important;
        }
        .app-bar.sticky-nav, .app-bar.fixed-nav {
          position: fixed;
          background: #222;
          top: 0;
          left: 0;
          padding: 8px 60px;
        }
        .app-bar.sticky-nav .brand img, .app-bar.fixed-nav .brand img{
          width: 140px;
        }
        .app-bar.sticky-nav .topnav a, .app-bar.fixed-nav .topnav a {
          font-size: 16px;
        }
        .app-bar .open {
          transform: translateX(0) !important;
        }
        @media only screen and (max-width:920px){
          .app-bar {
            padding: 16px 32px !important;
          }
          .app-bar .brand img {
            width: 150px !important;
          }
          .app-bar .btn-menu {
            display: inline-block !important;
          }
          .app-bar .navigation {
            background: #222;
            position: fixed;
            width: 250px;
            height: 100%;
            padding: 16px;
            transform: translateX(-260px);
            top: 0;
            left: 0;
            z-index: 99999;
          }
          .app-bar .navigation ul {
            list-style-type: none;
            display: block !important;
            margin: 0;
            padding: 0;
          }
          .app-bar .navigation ul a {
            text-decoration: none;
            color: #fff;
            display: block;
            position: relative;
            padding: 0 12px;
            margin-bottom: 10px;
            height: 44px;
            line-height: 44px;
          }
          .app-bar .navigation ul a:after {
            content: "";
            display: block;
            position: absolute;
            background: #FFC107;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 12px;
            transition: width 0.3s ease-in-out;
          }
          .app-bar .navigation ul a:hover:after {
            width: 50% !important;
          }
          .app-bar.sticky-nav, .app-bar.fixed-nav {
            padding: 8px 16px !important;
          }
          .app-bar.sticky-nav .brand img, .app-bar.fixed-nav .brand img {
            width: 130px !important;
          }          
        }
        @media only screen and (max-width:666px) {
          .app-bar {
            padding: 16px !important;
          }
          .app-bar .brand img {
            width: 140px !important;
          }
          .app-bar.sticky-nav, .app-bar.fixed-nav {
            padding: 6px 16px !important;
          }
          .app-bar.sticky-nav .brand img, .app-bar.fixed-nav .brand img {
            width: 140px !important;
          }          
        }
      </style>
      <header class="app-bar">
        <a href="index.html" class="brand">
          <picture>
            <source type="image/webp" srcset="images/logo.webp">
            <img src="images/logo.png" alt="logo wefood"/>
          </picture>
        </a>
        <button class="btn-menu" id="hamburgerButton" aria-label="menu hamburger">
          <picture>
            <source type="image/webp" srcset="icon/menu2.webp">
            <img src="icon/menu2.png" alt="menu hamburger open"/>
          </picture>
        </button>
        <nav id="navigationDrawer" class="navigation">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="/#/favorite">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/rianmandala/" target="_blank" rel="noopener">About Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
