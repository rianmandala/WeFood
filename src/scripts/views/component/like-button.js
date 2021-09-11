class LikeButton extends HTMLElement {
  connectedCallback() {
    this._icon = this.getAttribute('icon');
    this._ariaLabel = this.getAttribute('aria-label');
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        #likeButton{
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          color:${this._iconColor};
          box-shadow: 0 4px 7px 2px rgba(0,0,0,0.1);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index:99999;
        }
        #likeButton:hover{
          cursor:pointer;
        }
        #likeButton img{
          width:24px;
        }
      </style>
      <button id="likeButton" aria-label="${this._ariaLabel}">
        <picture>
          <source type="image/webp" srcset="./icon/${this._icon}.webp">
          <source type="image/png" srcset="./icon/${this._icon}.png">
          <img src="./icon/${this._icon}.webp" alt="${this._ariaLabel}"/>
        </picture>
      </button>
    `;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('like-button') || customElements.define('like-button', LikeButton);
