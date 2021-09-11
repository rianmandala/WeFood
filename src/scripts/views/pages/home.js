import '../component/card-restaurant';
import '../component/jumbotron-home';
import '../component/skeleton-card-restaurant';
import RestaurantSource from '../../data/restaurant-sources';

const Home = {
  async render() {
    return `
      <jumbotron-home></jumbotron-home>
      <article id="restaurant-list">
        <h1 class="tag" id="explore">Explore restaurant</h1>
        <div id="list-card">
          <skeleton-card-restaurant></skeleton-card-restaurant>
          <skeleton-card-restaurant></skeleton-card-restaurant>
          <skeleton-card-restaurant></skeleton-card-restaurant>
          <skeleton-card-restaurant></skeleton-card-restaurant>
          <skeleton-card-restaurant></skeleton-card-restaurant>
          <skeleton-card-restaurant></skeleton-card-restaurant>
        </div>
      </article>
    `;
  },
  async afterRender() {
    try {
      const { restaurants, message } = await RestaurantSource.listRestaurant();
      const listCard = document.querySelector('#list-card');
      setTimeout(() => {
        if (restaurants) {
          listCard.innerHTML = '';
          restaurants.forEach((restaurant) => {
            const cardRestaurant = document.createElement('card-restaurant');
            cardRestaurant.restaurant = restaurant;
            listCard.appendChild(cardRestaurant);
          });
        }
      }, 800);
      return message;
    } catch (error) {
      return error.message;
    }
  },
};

export default Home;
