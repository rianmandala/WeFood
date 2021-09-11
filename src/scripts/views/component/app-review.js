class AppReview extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  get review() {
    return this._review;
  }

  render() {
    this.innerHTML = `
      <style>
        .card-review{
          padding: 22px 16px 32px 16px;
          background:  #fff;
          height: 140px;
          box-shadow: 0 3px 8px 1px rgba(0,0,0,0.1);
          border-top-right-radius: 40px;
          border-bottom-left-radius: 40px;
        }
        .card-review .name-review{
          font-weight: bold;
          color: #FFC107;
        }
        .card-review .date-review{
          color: rgb(200,200,200);
          font-size: 12px;
        }
        .card-review .comment-review{
          color:#444;
          margin-top: 12px;
          line-height:22px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      </style>
      <div class="card-review">
        <p>
          <span class="name-review">${this.review.name}</span> 
        </p>
        <p>
          <span class="date-review">${this.review.date}</span>
        </p>
        <p class="comment-review">${this.review.review}</p>
      </div>
    `;
  }
}

customElements.define('app-review', AppReview);
