import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
      <div class="jumbotron-container"></div>
      <article id="restaurant-list">
        <h1 class="tag" id="explore">Favorite restaurant</h1>
        <div id="list-card"></div>
      </article>
    `;
  },
  async afterRender() {
    const favoriteRestaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const listCard = document.querySelector('#list-card');
    console.log('ini favorite restaurant', favoriteRestaurant);
    if (favoriteRestaurant.length) {
      this.createJumbotronDetail(favoriteRestaurant[0]);
      listCard.innerHTML = `
        <skeleton-card-restaurant></skeleton-card-restaurant>
        <skeleton-card-restaurant></skeleton-card-restaurant>
        <skeleton-card-restaurant></skeleton-card-restaurant>
      `;
      setTimeout(() => {
        listCard.innerHTML = '';
        favoriteRestaurant.forEach((restaurant) => {
          const cardRestaurant = document.createElement('card-restaurant');
          cardRestaurant.restaurant = restaurant;
          listCard.appendChild(cardRestaurant);
        });
      }, 800);
      return 'success';
    }
    return 'empty favorites';
  },
  createJumbotronDetail(restaurant) {
    const jumbotronDetail = document.createElement('jumbotron-detail');
    jumbotronDetail.jumbotron = {
      background: restaurant.pictureId,
      title: restaurant.name,
    };
    document.querySelector('.jumbotron-container').appendChild(jumbotronDetail);
  },
};

export default Favorite;
