// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function (breed, done) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data.");
    if (!error) {
      done(data);
    } else {
      done(undefined);
    }
  });
};

// const done = (data) => console.log('Return value: ', data);

module.exports = breedDetailsFromFile;

// we try to get the return value
// const bombay = breedDetailsFromFile('Bombay', (data) => console.log('Return value: ', data));
