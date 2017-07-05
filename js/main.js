var factDiv = document.getElementById('fact');
var factContainer = document.getElementById('fact-container');
var loadIcon = document.getElementById('loading');
var chuckIcon = document.getElementById('chuckIcon');

/*** IIFE makes chuck icon shake after a short duration ***/
(function() {
  setInterval(function() {
    toggleClass(chuckIcon, 'hvr-buzz-out');
  }, 2500);
})()

/*** toggles the class on a specified element ***/
function toggleClass(element, className) {
  // if the class exist on the element, remove it else add it
  element.classList.contains(className) ? element.classList.remove(className) : element.classList.add(className);
}

/*** capitalizes the first letter, adds a period if there is no punctuation ***/
function fixGrammar(fact) {
  // finds the last character at the end of the fact
  var lastChar = fact.charAt(fact.length - 1);

  // if the last character is not a punctuation, append a period
  if (lastChar !== '.' && lastChar !== '!' && lastChar !== '?') { fact += '.' }

  // return the fact with a starting capital letter
  return fact.charAt(0).toUpperCase() + fact.slice(1);
}

/*** makes an AJAX request to obtain a chuck norris fact ***/
function loadFact() {
  // creates an instance of the XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // hides the fact-containing div
  toggleClass(factContainer, 'hide');

  // The onreadystatechange function is called every time the readyState changes.
  xhr.onreadystatechange = function() {

    // when readyState is 4 and status is 200, the response is ready
    if (xhr.readyState === 4 && xhr.status === 200) {

      // converts response (string-like JSON) into a JSON format
      var response = JSON.parse(xhr.responseText)

      // hides the img element containing the load icon
      toggleClass(loadIcon, 'hide');

      // reveals the fact-containing div
      toggleClass(factContainer, 'hide');

      // inserts the modified fact into the
      factDiv.innerHTML = fixGrammar(response.value);
    }
  };

  // reveals the load icon
  toggleClass(loadIcon, 'hide');

  // XMLHttpRequest object's open method prepares the request
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

  // sends the prepared request to the server
  xhr.send(null);
}

// initialize
loadFact();
