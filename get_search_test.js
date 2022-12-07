const { I } = inject();

const assert = require('assert');
const Joi = require('joi');

const schema = Joi.object().keys({
  id: Joi.number().integer().required(),
  label_id: Joi.string().regex(/^\d{2}-\d{3}-\d{4}$/).required(),
  shipping_tracking_code: Joi.string().required()
});

Feature('Search API GET tests');

Scenario('Make a successful API call and verify response header @search_api_test, @P0 @regression', async () => {
	await I.sendGetRequest('http://localhost:4000/shipping_data/');
  // matches 200, 201, 202, ... 206
	I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(['id', 'label_id', 'shipping_tracking_code']);
});

Scenario('Verify a not found call @search_api_test, @P0 @regression', async () => {
	I.sendGetRequest('http://localhost:4000/shipping_data/100001');
  // matches 400..451
	I.seeResponseCodeIsClientError();
});

Scenario('Verify getting a single label information matches json schema payload. @search_api_test, @P0 @regression', async () => {
	const res = await I.sendGetRequest('http://localhost:4000/shipping_data/1');
  I.seeResponseCodeIs(200);
  I.seeResponseMatchesJsonSchema(schema);
  I.seeResponseContainsJson(
    {
    id: 1,
    label_id: "47-561-8310",
    shipping_tracking_code: "5796955810"
    }
  )

});

Scenario('Verify getting a single label information passing label_id @search_api_test, @P0 @regression', async () => {
	const res = await I.sendGetRequest('http://localhost:4000/shipping_data?label_id=47-561-8310');
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson(
    {
    id: 1,
    label_id: "47-561-8310",
    shipping_tracking_code: "5796955810"
    }
  )
});

Scenario('Verify information passing bad label_id @search_api_test, @P0 @regression', async () => {
	const res = await I.sendGetRequest('http://localhost:4000/shipping_data?label_id=47-xyz-8310');
  // Bad data should return a 400 status code
  I.seeResponseCodeIsClientError();
});
