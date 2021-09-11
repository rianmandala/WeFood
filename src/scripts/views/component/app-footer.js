class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        footer, .footer__container {
          position:relative;
        }
        .footer__container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          column-gap: 16px;
          padding: 48px 60px 0 60px;
          color: #fff;
          z-index:1;
        }
        footer .background-footer, .background-footer-image{
          position:absolute;
          top:0;
          left:0;
          width: 100%;
          height: 100%;
          z-index:0;
          overflow:hidden;
        }
        .background-footer-image{
          object-fit: cover;
          z-index: -1;
          filter: brightness(0.6);
          width:100%;
        }
        footer .logo img {
          width: 160px;
        }
        footer .tag {
          font-weight: bold;
          margin-bottom: 12px;
        }
        footer .contact, footer .nav-footer, footer .social-media {
          line-height: 24px;
        }
        footer .nav-footer {
          padding-left: 60px;
        }
        footer .nav-footer ul {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
        footer .nav-footer ul a {
          text-decoration: none;
          display: block;
          color: #fff;
          height: 44px;
          line-height: 44px;
          margin-bottom: 2px;
        }
        footer .nav-footer ul a:hover {
          color: #FFC107;
        }
        footer .social-media .tag {
          margin-bottom: 6px;
        }
        footer .social-media a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
        }
        footer .social-media a img {
          width: 32px;
          transition: 0.3s;
        }
        footer .social-media a img:hover {
          transform: scale(1.2);
        }
        footer .copyright {
          border-top: 1px solid #fff;
          text-align: center;
          grid-column: 1/5;
          margin-top: 60px;
          padding: 12px 0;
        }

        @media only screen and (max-width:920px){
          .footer__container{
            grid-template-columns: 1fr 1fr 1fr !important;
            column-gap: 0 !important;
            padding-left: 32px !important;
            padding-right: 32px !important;
          }
          footer .social-media{
            grid-row-start: 2;
            grid-column: 1/5;
          }
          footer .copyright{
            margin-top:32px !important;
            grid-column: 1/5 !important;
          }
        }

        @media only screen and (max-width:666px) {
          .footer__container {
            grid-template-columns: 1fr !important;
            row-gap: 24px;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          footer .logo, footer .contact, footer .nav-footer, footer .social-media {
            padding: 0 16px !important;
          }
          footer .tag {
            margin-bottom: 6px !important;
          }
          footer .social-media {
            grid-row-start: auto;
            grid-column: auto !important;
          }
          footer .copyright {
            margin-top: 32px !important;
            grid-column: auto !important;
          }
          
        }
      
      </style>
      <footer>

        <picture class="background-footer">
          <source type="image/webp" 
                  srcset="./images/heros/hero-image_4-small.webp" 
                  media="(max-width: 600px">
          <source type="image/webp" 
                  srcset="./images/heros/hero-image_4-large.webp" 
                  media="(min-width: 601px)">
          <source type="image/jpg" 
                  srcset="./images/heros/hero-image_4-small.jpg" 
                  media="(max-width: 600px">
          <source type="image/jpg" 
                  srcset="./images/heros/hero-image_4-large.jpg" 
                  media="(min-width: 601px)">
          <img  class="background-footer-image" alt="footer image">
        </picture>
        <div class="footer__container">
          <article class="logo">
            <a href="#">
              <picture>
                <source type="image/webp" srcset="images/logo.webp">
                <img src="images/logo.png" alt="logo wefood"/>
              </picture>
            </a>
          </article>
          <article class="contact">
            <p class="tag">Contact</p>
            <p>Address : Desa namo tualang, Kec.biru-biru, Kab.Deli serdang</p>
            <p>Tel : +6283198924523</p>
            <p>Email : rianmandala959@gmail.com</p>
          </article>
          <article class="nav-footer">
            <p class="tag">Menu</p>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="/#/favorite">Favorite</a></li>
              <li><a href="https://www.linkedin.com/in/rianmandala/" target="_blank" rel="noopener">About Us</a></li>
            </ul>
          </article>
          <article class="social-media">
            <p class="tag">Foolow Us</p>
            <a href="https://web.facebook.com/rian.mandala.10/" rel="noopener" target="_blank">
              <picture>
                <source type="image/webp" srcset="icon/facebook.webp">
                <img src="./icon/facebook.png"
                  alt="facebook">
              </picture>
            </a>
            <a href="https://www.instagram.com/rian_mandala95/" rel="noopener" target="_blank">
              <picture>
                <source type="image/webp" srcset="icon/instagram.webp">
                <img src="icon/instagram.png"
                  alt="instagram">
              </picture>
            </a>
            <a href="https://www.linkedin.com/in/rianmandala/" rel="noopener" target="_blank">
              <picture>
                <source type="image/webp" srcset="icon/linkedin.webp">
                <img src="icon/linkedin.png"
                  alt="linkedin">
              </picture>
            </a>
          </article>
          <article class="copyright">
            <p>&copy;Copyright 2020 - WeFood</p>
          </article>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
