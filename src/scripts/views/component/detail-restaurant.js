import CONFIG from '../../globals/config';

class DetailRestaurant extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    console.log('ini adalah restaurant', this._restaurant);
    this.render();
  }

  get menuCategory() {
    const menus = this._restaurant.categories.map((category) => category.name);
    return menus.join(', ');
  }

  get restaurant() {
    return this._restaurant;
  }

  // eslint-disable-next-line class-methods-use-this
  drinksParse({ drinks }) {
    const drinksArray = drinks.map((drink) => drink.name);
    return drinksArray.join(', ');
  }

  render() {
    this.innerHTML = `
      <style>
        .top-content{
          display:flex;
        }
        .card__image{
          background-color: rgb(240,240,240) ;
          width: 400px;
          height:280px;
          border-radius: 6px;
          overflow:hidden;
        }
        .card__image img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
        .top-content .content{
          margin-left:24px;
        }
        .top-content .content th{
          border: 1px solid rgb(240,240,240);
          text-align: left;
          padding: 10px 26px;
          background: #FFC107;
          color: #fff;
        }
        .top-content .content td{
          border: 1px solid rgb(240,240,240);
          padding: 12px;
          background: rgb(240,240,240);
          color: #333;
        }
        .description h2{
          color:#222;
          font-size: 20px;
          margin: 16px 0 8px 0;
        }
        .description p{
          line-height:22px;
        }
        @media only screen and (max-width:666px){
          .top-content{
            flex-direction:column;
          }
          .card__image{
            width:100%;
          }
          .top-content .content {
            margin-left: 0;
            margin-top: 12px;
          }
        }
      </style>
      <section class="card">
        <div class="top-content">
          <div class="card__image">
            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/small/${this.restaurant.pictureId}" alt="${this.restaurant.name}"/>
          </div>
          <table class="content">
            <tr>
              <th>Rating</th>
              <td>${this.restaurant.rating}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>${this.restaurant.address}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>${this.restaurant.city}</td>
            </tr>
            <tr>
              <th>Categories</th>
              <td>${this.menuCategory}</td>
            </tr>
            <tr>
              <th>Drinks</th>
              <td>${this.drinksParse({ drinks: this.restaurant.menus.drinks })}</td>
            </tr>
            <tr>
              <th>Foods</th>
              <td>${this.drinksParse({ drinks: this.restaurant.menus.foods })}</td>
            </tr>
          </table>
        </div>
        <div class="description">
          <h2>Description</h2>
          <p>${this.restaurant.description}</p>
        </div>
      </section>
    `;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
