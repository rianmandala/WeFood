import CONFIG from '../globals/config';
import UrlParser from '../routes/url-parser';
import RestaurantSource from '../data/restaurant-sources';
import ToastHelper from './toast-helper';
import '../views/component/app-review';

const FormHelper = {
  _submitForm({ form }) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const consumerReview = {
        id: url.id,
        name: this._getValue({ event, name: 'name' }),
        review: this._getValue({ event, name: 'review' }),
      };
      fetch(`${CONFIG.BASE_URL}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(consumerReview),
      }).then(async () => {
        const { restaurant: currentRestaurant } = await this.getDetailRestaurant();
        this.createReviewConsumer(currentRestaurant.customerReviews);
        ToastHelper.init({
          message: 'Successfully add review',
          background: '#21bf73',
        });
      }).catch((error) => {
        console.log('error', error);
      });
      this._clearValue(event, 'name');
      this._clearValue(event, 'review');
    });
  },

  async getDetailRestaurant() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    return RestaurantSource.detailRestaurant(id);
  },

  createReviewConsumer(consumerReviews) {
    const consumerReviewContainer = document.querySelector('.consumer');
    consumerReviewContainer.innerHTML = '';
    consumerReviews.forEach((review) => {
      const appReviws = document.createElement('app-review');
      appReviws.review = review;
      consumerReviewContainer.appendChild(appReviws);
    });
  },

  _clearValue(event, name) {
    // eslint-disable-next-line no-param-reassign
    event.target[`${name}`].value = '';
  },

  _getValue({ event, name }) {
    return event.target[`${name}`].value;
  },
};

export default FormHelper;
