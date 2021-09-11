class FormReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        #send-review{
          display: block;
          width: 60%;
          margin:0 auto;
        }
        #send-review label{
          display: block;
          margin: 12px 0;
        }
        #send-review #name{
          padding: 16px;
          border-radius:4px;
          margin-bottom:16px;
          width: 100%;
          border: none;
          box-shadow: 0 3px 8px 3px rgba(0, 0, 0, 0.1);
        }
        #send-review #review{
          display:block;
          border-radius:4px;
          margin-bottom:16px;
          border: none;
          box-shadow: 0 3px 8px 3px rgba(0, 0, 0, 0.1);
          width: 100%;
          padding:16px;
        }
        .send-btn{
          display:block;
          border: none;
          padding: 16px 36px;
          border-radius: 6px;
          font-size: 16px;
          margin-top: 8px;
          margin-bottom: 52px;
          box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.1);
        }
        .send-btn:hover{
          cursor:pointer;
          background:#FFC107;
          color:#fff;
        }
        @media only screen and (max-width:920px){
          #send-review{
            width: 100%;
          }
          #send-review .send-btn{
            width:60%;
            margin:8px auto 52px auto;
          }
        }
      </style>
      <form id="send-review">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="name"/>
        <label for="review">Review</label>
        <textarea id="review" name="review" rows="10" cols="50" placeholder="review"></textarea>
        <button type="submit" class="send-btn">Send</button>
      </form>
    `;
  }
}

customElements.define('form-review', FormReview);
