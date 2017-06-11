const axios = require("axios");

// Helper Functions (in this case the only one is runQuery)
const helpers = {

  searchArticles: function (queryString) {

    console.log(queryString);

    // Figure out the geolocation
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + require("../../config/keys").nyt + queryString;

    return axios.get(queryURL).then((response) => {
      console.log(response);
      return response.data.results[0].formatted;
    });

  }

  saveArticle: function(article) {

    return axios.post("/api", article).then((err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  getHistory: function() {

    return axios.get("/api").then(function(data) {
      if (err) {
        console.log(err);
      }
      return data;
    })
  }

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
