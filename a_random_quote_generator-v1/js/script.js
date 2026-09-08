/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * It consists of property quote, source, year, citation, tags
***/

const quotes = [
  {
    quote: "The future depends on what you do today",
    source: "Mahatma Gandhi",
    tags: ["History","Inspiration"]
  },
  {
    quote: "The only way to do great work is to love what you do.",
    source: "Steve Jobs",
    year: 2005
  },
  {
    quote: "It always seems impossible until it's done",
    source: "Nelson Mandela",
    citation: "https://www.nelsonmandela.org/",
    citationName: "Long Walk to Freedom",
    year: 2001
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    source: "Franklin D. Roosevelt"
  },
  {
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston Churchill",
    citation: "https://www.winstonchurchill.org/",
    citationName: "Speech to the House of Commons",
    year: 1949
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    source: "Lao Tzu"
  }
]


/***
 * `getRandomQuote` function
 * Generate random index number 
 
 Parameter 
  -  None

  Return
    - quotes[randomNumber]
***/

function getRandomQuote (){
  let randomNumber = Math.floor(Math.random()* quotes.length);
  return quotes[randomNumber];
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);