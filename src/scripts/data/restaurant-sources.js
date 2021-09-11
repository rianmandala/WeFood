import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJSON = await response.json();
    return responseJSON;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON;
  }
}

export default RestaurantSource;
