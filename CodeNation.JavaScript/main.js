const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const fetchRandomProgrammingQuoteAsync = async () => {
  let response = await fetch(
    'http://quotes.stormconsultancy.co.uk/random.json'
  );
  let data = await response.json();
  return data;
};

const updateQuote = data => {
  quote.innerText = data.quote;
  author.innerText = `-- ${data.author}`;
};
setInterval(() => {
  fetchRandomProgrammingQuoteAsync().then(data => updateQuote(data));
}, 10 * 1000);
