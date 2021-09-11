const assert = require('assert');

Feature('Consumer Review');

Before((I) => {
  I.amOnPage('/');
});

Scenario('review one restaurant', async (I) => {

  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());

  I.seeElement('#name');
  I.fillField('#name', 'rian mandala');
  const consumerName = await I.grabValueFrom('#name');
  I.seeElement('#review');
  I.fillField('#review', 'mantap, rekomendasi lah pokoknya');
  const consumerReview = await I.grabValueFrom('#review');
  I.seeElement('.send-btn');
  I.click('.send-btn');
  I.refreshPage();
  I.seeElement('.consumer');
  const successConsumerName = await I.grabTextFrom(locate('.name-review').withText(consumerName).last());
  assert.strictEqual(consumerName, successConsumerName);
  const successConsumerReview = await I.grabTextFrom(locate('.comment-review').withText(consumerReview).last());
  assert.strictEqual(consumerReview, successConsumerReview);
});
