const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const updateQuote = data => {
  console.log('reached', data);
  quote.innerText = data.quote;
  author.innerText = `-- ${data.author}`;
};
// setInterval(() => {
//   fetchRandomProgrammingQuoteAsync().then(data => updateQuote(data));
// }, 10 * 1000);
