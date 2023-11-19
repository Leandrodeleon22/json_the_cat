const request = require("request");

const fetchBreedDescription = function (breedName, callBack) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        return console.log(error);
      }

      const data = JSON.parse(body);

      if (data.length === 0) return console.log("not found");

      const { description } = data[0];

      callBack(error, description);
    }
  );
};

// console.log(fetchBreedDescription("siberian", (e, d) => console.log(e, d)));

module.exports = fetchBreedDescription;
