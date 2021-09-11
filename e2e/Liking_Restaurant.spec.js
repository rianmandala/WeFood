const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async (I) => {
  I.seeElement('.problem');
  I.see("Sorry, it looks like you haven't added a favorite before", '.problem__title');
  I.amOnPage('/');
  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likeFirstRestaurant = locate('.restaurant__title a').first();
  const likeFirstRestaurantTitle = await I.grabTextFrom(likeFirstRestaurant);

  assert.strictEqual(firstRestaurantTitle, likeFirstRestaurantTitle);
  I.refreshPage();
  I.waitForElement(locate('.restaurant__title a').first(), 2);
  I.click(locate('.restaurant__title a').first());

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see("Sorry, it looks like you haven't added a favorite before", '.empty-favorite');
});
