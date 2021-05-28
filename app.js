const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  addQuote();
  addMeditation();
  addTime();
  /* let quoteNum = res.data.quotes.length - 1;
  let medNum = res.data.meditation.length - 1;
  let lengthNum = res.data.medLength.length - 1;*/
});

const addQuote = async function () {
  const quoteDiv = document.getElementById("quote");
  const res = await getData();
  quoteDiv.append(res.data.quotes);
};
const addMeditation = async function () {
  const meditationDiv = document.getElementById("meditation");
  const res = await getData();
  meditationDiv.append(res.data.meditation);
};
const addTime = async function () {
  const timeDiv = document.getElementById("time");
  const res = await getData();
  timeDiv.append(res.data.medLength);
};
const getData = function () {
  return axios.get("/meditation.json");
};
