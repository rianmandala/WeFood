import RestaurantSource from '../../data/restaurant-sources';
import FormHelper from '../../utils/form-helper';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import '../component/detail-restaurant';
import '../component/jumbotron-detail';
import '../component/app-review';
import '../component/form-review';
import '../component/like-button';

const Detail = {
  async render() {
    return `
      <style>
        .reviews h2{
          text-align:center;
          color:#222;
          font-size: 20px;
          margin: 48px 0 32px 0;
        }
        .reviews .consumer{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 24px;
        }
        @media only screen and (max-width:920px){
          .reviews h2{
            text-align:center;
          }
          .reviews .consumer{
            grid-template-columns: 1fr 1fr;
          }
        }
        @media only screen and (max-width:666px) {
          .reviews .consumer{
            grid-template-columns: 1fr;
          }
        }
      </style>
      <div class="jumbotron-container"></div>
      <article id="restaurant-list">
        <div id="restaurant"></div>
        <div class="reviews">
          <h2>Reviews</h2>
          <form-review></form-review>
          <div class="consumer"></div>
        </div>
      </article>
      <div id="likeButtonContainer"></div>
      
    `;
  },
  async afterRender() {
    try {
      const { restaurant, message } = await this.getDetailRestaurant();
      if (restaurant) {
        LikeButtonPresenter.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant,
        });
        this.createJumbotronDetail(restaurant);
        this.createDetailRestaurant(restaurant);
        this.createReviewConsumer(restaurant.customerReviews);
        document.documentElement.scrollTop = 0;
        FormHelper._submitForm({ form: document.querySelector('#send-review') });
      }
      return message;
    } catch (error) {
      return error.message;
    }
  },

  async getDetailRestaurant() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    return RestaurantSource.detailRestaurant(id);
  },

  createJumbotronDetail(restaurant) {
    const jumbotronDetail = document.createElement('jumbotron-detail');
    jumbotronDetail.jumbotron = {
      background: restaurant.pictureId,
      title: restaurant.name,
    };
    document.querySelector('.jumbotron-container').appendChild(jumbotronDetail);
  },

  createDetailRestaurant(restaurant) {
    const detailRestaurant = document.createElement('detail-restaurant');
    detailRestaurant.restaurant = restaurant;
    document.querySelector('#restaurant').appendChild(detailRestaurant);
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
};

export default Detail;
