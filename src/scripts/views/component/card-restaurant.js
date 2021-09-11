import CONFIG from '../../globals/config';

class CardRestaurant extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  get restaurant() {
    return this._restaurant;
  }

  render() {
    this.innerHTML = `
      <style>
        .card {
          position: relative;
          overflow: hidden;
          box-shadow: 0 3px 8px 3px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          padding-bottom: 16px;
        }
        .card .image {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }
        .card .image img {
          width: 100%;
          height:100%;
          object-fit: cover;
          filter: brightness(0.5);
        }
        .image:hover img {
          transform: scale(1.15);
          filter: brightness(1);
        }
        .card .city, .card .rating {
          z-index: 9;
        }
        .card .city {
          text-decoration: none;
          color: #fff;
          position: absolute;
          overflow: hidden;
          display: flex;
          height: 44px;
          padding: 0 16px;
          align-items: center;
          top: 0;
          left: 0;
          background: #222;
          border-bottom-right-radius: 12px;
        }
        .card .city img {
          width: 22px;
          margin: -6px 4px 0 0;
        }
        .card .rating {
          position: absolute;
          display: flex;
          height: 44px;
          align-items: center;
          color: #fff;
          top: 0;
          right: 0;
          padding: 0 16px;
          background: #222;
          border-bottom-left-radius: 12px;
        }
        .card .rating img {
          width: 20px;
          margin: -6px 6px 0 0;
        }
        .card .content {
          padding: 6px 16px 16px 16px;
        }
        .card .content .name {
          display: block;
          text-decoration: none;
          font-weight: bold;
          color: #222;
          margin-bottom: 6px;
          height: 44px;
          line-height: 44px;
          font-size: 18px;
        }
        .card .content .name:hover {
          color: #FFC107;
        }
        .card .content .description {
          text-align: justify;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 22px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 6;
        }      
      </style>
      <section class="card restaurant-item">
        <picture class="city">
          <source type="image/webp" srcset="icon/gps.webp">
          <img src="icon/gps.png"
            alt="location"/> ${this.restaurant.city}
        </picture>
        <picture class="rating">
          <source type="image/webp" srcset="icon/star.webp">
          <img src="icon/star.png"
            alt="rating"/> ${this.restaurant.rating}
        </picture>
        <a href="#/detail/${this.restaurant.id}">
          <div class="image">
            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/small/${this.restaurant.pictureId}" alt="${this.restaurant.name}"/>
          </div>
        </a>
        <div class="content">
          <div class="restaurant__title">
            <a href="#/detail/${this.restaurant.id}" class="name">${this.restaurant.name}</a>
          </div>
          <p class="description">${this.restaurant.description}</p>
        </div>
      </section>
    `;
  }
}

customElements.define('card-restaurant', CardRestaurant);
