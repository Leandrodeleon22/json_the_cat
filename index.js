const fetchBreedDescription = require("./breedFetcher");

const argv = process.argv.slice(2);
const breedName = argv[0];

fetchBreedDescription(breedName, (err, desc) => {
  if (err) {
    console.log("Error fetch details", err);
  }
  console.log(desc);
});
