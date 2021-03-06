const contentful = require("contentful");

const { REACT_APP_SPACE_ID, REACT_APP_CONTENTFUL_ENV, REACT_APP_ACCESS_TOKEN } =
  process.env;

const client = contentful.createClient({
  space: REACT_APP_SPACE_ID,
  environment: REACT_APP_CONTENTFUL_ENV,
  accessToken: REACT_APP_ACCESS_TOKEN,
});

export default client;
