const button = document.querySelector("button");

button.addEventListener("click", async function (e) {
  e.preventDefault();
  const res = await axios.get("/meditation.json");
  let quoteNum = res.data.quotes.length - 1;
  let medNum = res.data.meditation.length - 1;
  let lengthNum = res.data.medLength.length - 1;
  addQuote(res.data.quotes);
  addMeditation(res.data.meditation);
  addTime(res.data.medLength);
});

const addQuote = function (quote) {
  const quoteDiv = document.getElementById("quote");
  quoteDiv.append(quote);
};
const addMeditation = function (meditation) {
  const meditationDiv = document.getElementById("meditation");
  meditationDiv.append(meditation);
};
const addTime = function (time) {
  const timeDiv = document.getElementById("time");
  timeDiv.append(time);
};
