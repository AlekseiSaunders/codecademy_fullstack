const button = document.querySelector("button");
const getData = function () {
  return axios.get("/meditation.json");
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  addQuote();
  addMeditation();
  addTime();
});

const addQuote = async function () {
  const quoteDiv = document.getElementById("quote");
  const res = await getData();
  let quoteNum = res.data.quotes.length - 1;
  let quoteIndex = Math.floor(Math.random() * quoteNum);
  quoteDiv.append(res.data.quotes[quoteIndex]);
};
const addMeditation = async function () {
  const meditationDiv = document.getElementById("meditation");
  const res = await getData();
  let medNum = res.data.meditation.length - 1;
  let meditationIndex = Math.floor(Math.random() * medNum);
  meditationDiv.append(res.data.meditation[meditationIndex]);
};
const addTime = async function () {
  const timeDiv = document.getElementById("time");
  const res = await getData();
  let lengthNum = res.data.medLength.length - 1;
  let lengthIndex = Math.floor(Math.random() * lengthNum);
  timeDiv.append(res.data.medLength[lengthIndex]);
};
