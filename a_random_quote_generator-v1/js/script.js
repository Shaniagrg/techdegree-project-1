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

/*
* `getRandomColor`
* Everytime new code genereates it will generate new background color

Parameter
  - None
Return
  - randomColor
*/

function getRandomColor(){
  //each variable will generate number between 0 to 255
  const red = Math.floor(Math.random()* 256);
  const green = Math.floor(Math.random()* 256);
  const blue = Math.floor(Math.random()* 256);

  //each random number generated in the variable red,green and blue will combine to get the rgb
  const randomColor = `rgb(${red}, ${green}, ${blue})`;

  return randomColor;
}
/***
 * `getRandomQuote` function
 * Generate random index number 
 
 Parameter 
  -  None

  Return
    - quotes[randomNumber]
***/

function getRandomQuote (){
  const randomNumber = Math.floor(Math.random()* quotes.length);
  return quotes[randomNumber];
}


/***
 * `printQuote` function
 * save the quote inside a variable and + if year or citation then print the quote
 
Parameter
  - None

Return 
  - None
***/

function printQuote(){

  //Store the random quote in randomQuote
  const randomQuote = getRandomQuote();

  document.body.style.backgroundColor = getRandomColor();

  let quoteHtml = `<p class="quote"> ${randomQuote.quote} </p>
                   <p class="source">${randomQuote.source} `;

  //checks if the year exist in randomquote and then prints                
  if (randomQuote.year){
    quoteHtml += `<span class="year"> ${randomQuote.year} </span>`;
  }  
  
  //checks if the citation exist in randomquote and then prints   
  if (randomQuote.citation){
    quoteHtml += `<span class="citation"> 
                    <a target = "_blank" href = "${randomQuote.citation}">${randomQuote.citationName}</a> 
                  </span>`;
  }

  //checks if the tags exist in randomquote and then prints  
  if (randomQuote.tags){
    quoteHtml += `<span> ${randomQuote.tags.join(', ')}</span>`
  }

  //close the p tag so that everything is included within it
  quoteHtml += '</p>';
  document.getElementById('quote-box').innerHTML = quoteHtml; 
}
printQuote();

//It prints a new quote to the page at regular intervals of 10 seconds
setInterval(printQuote, 10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);