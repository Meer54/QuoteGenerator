var quotes = [
  {
  text: 'The saddest thing about love is that not only that it cannot last forever, but that heartbreak is soon forgotten.',
  author: 'Wiliam Faulker'
},
{
  text: 'Love is like a puzzle. When you\'re in love, all the pieces fit, but when your heart gets broken, it takes a while to get everything back together',
  auhtor: 'Unkown'
},
{
  text: 'Loneliness and the feeling of being unwanted is the terrible proverty',
  author: 'Mother Teressa'
},
{
  text: 'Love is never lost. If not reciprocated, it will flow back and soften and purify the heart',
  author: 'Washington Irving'
},
{
  text: 'The saddest love is to love someone, to know that they still want you, but the circumstances don\'t let you have them',
  author: 'Anonymous'
},
{
  text: 'Sometimes, the person you\'d take a bullet for ends upbeing the one behind the gun.',
  author: 'Tupac Shakur'
},
{
  text: 'The greatest pain that comes from the love is loving someone you can never have',
  author: 'Unknown'
},
{
  text: 'Loneliness is a sign you are desperate need of yourself',
  auhtor: 'Rupi Kaur'
},
{
  text: 'the worst feeling is not being lonely, but being forgotten by someone you can\'t forget',
  author: 'Unknown'
}, 
{
  text: 'Breakups hurt, but losing someone who doesn\'t respect and appreciate you is a gain, not a loss',
  author: 'Unknown'
},
{
  text: 'Breakups are like broken mirrors. It\'s better to leave it broken than hurt yourself trying to fix it',
  author: 'Unknown'
},
  {
    text: 'The saddest thing about love is that it doesn\'t always last, but the memories do',
    author: 'Unknown'
  },
];

function generateQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  document.getElementById('quote-text').innerHTML = randomQuote.text;
}

document.GetElementById('generate-button').addEventListener('click', generateQuote);
