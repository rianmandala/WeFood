import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import ToastHelper from './toast-helper';
import '../views/component/like-button';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  _renderLike() {
    // eslint-disable-next-line quotes
    this._likeButtonContainer.innerHTML = `<like-button icon="like" aria-label="like this restaurant"></like-button>`;
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
      ToastHelper.init({
        message: 'Successfully add favorite',
        background: '#21bf73',
      });
    });
  },

  _renderLiked() {
    // eslint-disable-next-line quotes
    this._likeButtonContainer.innerHTML = `<like-button icon="unlike" aria-label="unlike this restaurant"></like-button>`;
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
      ToastHelper.init({
        message: 'Successfully delete favorite',
        background: '#21bf73',
      });
    });
  },

  async _isRestaurantExist(id) {
    return FavoriteRestaurantIdb.getRestaurant(id);
  },
};

export default LikeButtonPresenter;
