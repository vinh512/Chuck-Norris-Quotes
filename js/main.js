var factDiv = document.getElementById('fact');
var factContainer = document.getElementById('fact-container');
var loadIconContainer = document.getElementById('loading');

function loadFact() {
  // creates an instance of the XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // adds hide class to hide the fact in order to display just the load icon
  factContainer.classList.add('hide');

  // The onreadystatechange function is called every time the readyState changes.
  xhr.onreadystatechange = function() {

    // when readyState is 4 and status is 200, the response is ready
    if (xhr.readyState === 4 && xhr.status === 200) {

      // converts response (string) into a JSON format
      var response = JSON.parse(xhr.responseText)

      // removes the load icon
      loadIconContainer.innerHTML = '';

      // makes the fact visible again by removing hide style
      factContainer.classList.remove('hide');

      // ensures the first letter of the fact is always a capital letter
      response = response.value.charAt(0).toUpperCase() + response.value.slice(1);

      // stores last char of fact
      var lastChar = response.charAt(response.length-1);

      // if the last char isn't a punctuation, add a period
      if (lastChar !== '.' && lastChar !== '!' && lastChar !== '?') {
        response += '.';
      }

      // populate div with fact
      factDiv.innerHTML = response;
    }
  };

  // inserts the load icon
  loadIconContainer.innerHTML = '<img src="img/load-icon.gif" />'; // Set here the image before sending request

  // XMLHttpRequest object's open method prepares the request
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

  // sends the prepared request to the server
  xhr.send(null);
}

loadFact();
