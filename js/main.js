// var factDiv = document.getElementsByClassName('quote-container')[0];
var factDiv = document.getElementById('fact');

function loadFact() {
  // creates an instance of the XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // adds hide class to hide the fact in order to display just the load icon
  factDiv.classList.add('hide');

  // The onreadystatechange function is called every time the readyState changes.
  xhr.onreadystatechange = function() {

    // when readyState is 4 and status is 200, the response is ready
    if (xhr.readyState === 4 && xhr.status === 200) {

      // converts response (string) into a JSON format
      var response = JSON.parse(xhr.responseText)

      // ensures the first letter of the fact is always a capital letter
      response = response.value.charAt(0).toUpperCase() + response.value.slice(1);

      // removes the load icon
      document.getElementById("loading").innerHTML = '';

      // makes the fact visible again by removing hide div
      factDiv.classList.remove('hide');

      // create a blank div, add a class to it, then populate div with quote
      factDiv.innerHTML = response.value.charAt(0).toUpperCase() + response.value.slice(1);
    }
  };

  // inserts the load icon
  document.getElementById("loading").innerHTML = '<img src="img/load-icon.gif" />'; // Set here the image before sending request

  // XMLHttpRequest object's open method prepares the request
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

  // sends the prepared request to the server
  xhr.send(null);
}

loadFact();
