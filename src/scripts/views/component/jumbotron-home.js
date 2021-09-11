class JumbotronHome extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .jumbotron{
          width:100%;
          height:100%;
          background-color: rgb(240,240,240) ;
          font-family: sans-serif;
          padding: 0;
          margin: 0;
          height: 100vh;
          display: flex;
          position:relative;
          align-items: flex-end;
          padding-bottom: 32px;
          padding-left: 60px;
          color: #fff;
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
          width: 40%;
          z-index:2;
        }
        .jumbotron .content h1 {
          font-size: 42px;
        }
        .jumbotron .content h1 .marker {
          color: #FFC107;
        }
        .jumbotron .content p {
          margin-top: 16px;
        }
        .jumbotron .content .look {
          background: #FFC107;
          color: #222;
          font-weight: bold;
          border: none;
          height: 44px;
          padding: 0 22px;
          border-radius: 6px;
          margin-top: 24px;
          text-decoration: none;
          display: inline-block;
          line-height: 44px;
        }
      
        @media only screen and (max-width:920px){
          .jumbotron{
            padding-left: 32px !important;
            padding-bottom: 32px !important;
          }
          .jumbotron .content{
            width: 60% !important;
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
            width: 80% !important;
            text-align: center !important;
            h1{
              font-size:32px !important;
            }
          }
        }
      </style>
      <div class="jumbotron">
        <picture>
          <source type="image/webp" 
                  srcset="./images/heros/hero-image_2-small.webp" 
                  media="(max-width: 600px">
          <source type="image/webp" 
                  srcset="./images/heros/hero-image_2-large.webp" 
                  media="(min-width: 601px)">
          <source type="image/jpg" 
                  srcset="./images/heros/hero-image_2-small.jpg" 
                  media="(max-width: 600px">
          <source type="image/jpg" 
                  srcset="./images/heros/hero-image_2-large.jpg" 
                  media="(min-width: 601px)">
          <img class="jumbotron__image" alt="jumbotron header image">
        </picture>
        <div class="content">
          <h1>Trouble finding a 
            restaurant to <span class="marker">eat</span>
          </h1>
          <p>Take it easy, we will provide recommendations for the best restaurants for you, from all corners of Indonesia starting from the best, most popular, to the current trend.</p>
          <a href="#explore" class="look">Take a look</a>
        </div>
      </div>
      
    `;
  }
}

customElements.define('jumbotron-home', JumbotronHome);
