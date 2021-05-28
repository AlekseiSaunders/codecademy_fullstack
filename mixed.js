let quoteNum = quotes.length - 1;
let medNum = meditation.length - 1;
let lengthNum = medLength.length - 1;
let quoteIndex = Math.floor(Math.random() * quoteNum);
let meditationIndex = Math.floor(Math.random() * medNum);
let lengthIndex = Math.floor(Math.random() * lengthNum);
const generateQuote = function () {
  console.log(
    `Your Zen quote to consider is \n\n"${quotes[quoteIndex]}." \n${meditation[meditationIndex]} for a minimum of ${medLength[lengthIndex]} minutes.\nRemember to relax in all things.`
  );
};
generateQuote();
