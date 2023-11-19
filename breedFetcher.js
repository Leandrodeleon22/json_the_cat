const request = require("request");
const argv = process.argv.slice(2);
const query = argv[0];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
  (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    const data = JSON.parse(body);
    if (data.length === 0) return console.log("not found");
    const { description } = data[0];
    console.log(description);
  }
);
