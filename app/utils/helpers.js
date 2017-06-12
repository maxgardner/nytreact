import axios from "axios";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

  search: (query) => {

    // Figure out the geolocation
    let queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${require("../../config/keys").nyt}${query}`;
    return axios.get(queryUrl).then((response) => {
      if (response.data.response.docs.length === 0) {
        return;
      }
      return response.data.response.docs;
    });

  },

  save: (article) => {

    return axios.post("/api", article).then((err) => {
      if (err) {
        console.log(err);
      }
    });
  },

  getHistory: () => {

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
