class UnexpectedProblem extends HTMLElement {
  set problemAttribute(attribute) {
    this._image = attribute.image;
    this._title = attribute.title;
    this._className = attribute.className;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        .problem{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; 
          height:100vh;
        }
        .problem__image{
          width: 50%;
          margin-bottom: 32px;
        }
        .problem__image img{
          max-width:100%;
        }
        .problem p{
          width:80%;
          text-align:center;
          line-height: 22px;
          color: #333;
        }
        @media only screen and (max-width:666px){
          .problem img{
            width:80%;
          }
        }
      </style>
      <div class="problem ${this._className}">
        <picture class="problem__image">
          <source srcset="${this._image}.webp">
          <img src="${this._image}.png" alt="${this._className}" />
        </picture>
        <p class="problem__title">${this._title}</p> 
      </div>
    `;
  }
}

customElements.define('unexpected-problem', UnexpectedProblem);
