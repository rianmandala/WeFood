import CONFIG from '../../globals/config';

class JumbotronDetail extends HTMLElement {
  set jumbotron(jumbotron) {
    this._background = jumbotron.background;
    this._title = jumbotron.title;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .jumbotron{
          background-color: rgb(240,240,240) ;
          font-family: sans-serif;
          padding: 0;
          margin: 0;
          height: 60vh;
          display: flex;
          position:relative;
          align-items: center;
          justify-content:center;
          color: #fff;
        }
        .skeleton-jumbotron-header{
          position:absolute;
          top:0;
          left:0;
          z-index:0;
        }
        .jumbotron__image{
          object-fit: cover;
          z-index: 1;
          filter: brightness(0.45);
          position:absolute;
          left:0;
          top:0;
          width:100%;
          height:100%;
        }
        .jumbotron .content {
          z-index: 2;
        }
        .jumbotron .content h1 {
          font-size: 42px;
        }
      
        @media only screen and (max-width:920px){
          .jumbotron{
            padding-left: 32px !important;
            padding-bottom: 32px !important;
          }
        }

        @media only screen and (max-width:666px){
          .jumbotron{
            justify-content: center !important;
            align-items: center!important;
            padding-left: 0 !important;
            padding-bottom: 0 !important;
          }
          .jumbotron .content{
            width: 90%;
          text-align: center;
          }
          .jumbotron .content h1{
            font-size:32px !important;
          }
        }
      </style>
      <div class="jumbotron">
        <img class="jumbotron__image lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/large/${this._background}" 
        srcset="${CONFIG.BASE_IMAGE_URL}/small/${this._background} 480w, ${CONFIG.BASE_IMAGE_URL}/large/${this._background} 800w"
        sizes="(max-width: 600px) 480px, 800px" alt="jumbotron header image">
        <div class="content">
          <h1>Restaurant ${this._title}</h1>
        </div>
      </div>
      
    `;
  }
}

customElements.define('jumbotron-detail', JumbotronDetail);
