module.exports = ({ env }) => ({
    // the url where the heroku app will run 
    url: env('MY_HEROKU_URL'),
  });