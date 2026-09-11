/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

console.log('test');

//Stores a list of objects containing famous quotes from Black women scholars and the sources

const quotes = [
  {
    quote: "I really don't think life is about the I-could-have-beens. Life is only about the I-tried-to-do. I don't mind the failure but I can't imagine that I'd forgive myself if I didn't try.",
    source: "Nikki Giovanni",
    citation: "Conversations with Nikki Giovanni",
    year: 1992
  },
  {
    quote: "The function, the very serious function of racism is distraction. It keeps you from doing your work. It keeps you explaining, over and over again, your reason for being. It keeps you from going into the depths of your own heart. It keeps you from growing.",
    source: "Toni Morrison",
    citation: "Portland State University Speech 'A Humanist View'",  
    year: 1975
  },
  {
    quote: "Feminism is a movement to end sexism, sexist exploitation, and oppression.",
    source: "bell hooks",
    citation: "Feminism Is for Everybody: Passionate Politics",
    year: 2000
  },
  {
    quote: "The master's tools will never dismantle the master's house. They may allow us temporarily to beat him at his own game, but they will never enable us to bring about genuine change.",
    source: "Audre Lorde",
    citation: "Letter to a friend",
    year: 1984
  },
  {
    quote: "No one is going to give you the education you need to overthrow them. Nobody is going to teach you your true history, teach you your true heroes, if they know that that knowledge will help set you free.",
    source: "Assata Shakur",
    citation: "Assata: An Autobiography",
    year: 1987
  } 
];

//Generates a random number to pull and return a random quote object from array

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

//Formats the HTML and prints it to page

function printQuote() {
  const randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>`;
  html += `<p class="source">${randomQuote.source}`;
  
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  
  html += `</p>`;
  
  document.getElementById('quote-box').innerHTML = html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);