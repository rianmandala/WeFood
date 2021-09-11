class AppToast extends HTMLElement {
  set attributeToast(attributes) {
    this._message = attributes.message;
    this._background = attributes.background;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .toast{
          position:fixed;
          bottom:0;
          left:16px;
          transform: translateY(100px);
          padding:16px 24px;
          border-radius: 6px;
          overflow: hidden;
          background:${this._background};

        }
        .toast.open{
          animation:open .5s ease-in-out .2s;
          animation-fill-mode: forwards;
        }
        .toast.close{
          animation:close .5s ease-out;
          animation-fill-mode: forwards;
        }
        @keyframes open {
          from {transform: translateY(100px)}
          to {transform: translateY(-16px)}
        }
        @keyframes close {
          from {transform: translateY(0)}
          to {transform: translateY(100px)}
        }
        .toast p{
          color: #fff;
        }
      </style>
      <div class="toast">
        <p>${this._message}</p>
      </div>
    `;
  }
}

// eslint-disable-next-line no-unused-expressions
customElements.get('app-toast') || customElements.define('app-toast', AppToast);
