// creates an instance of the XMLHttpRequest object
var xhr = new XMLHttpRequest();

// The onreadystatechange function is called every time the readyState changes.
xhr.onreadystatechange = function() {
  // when readyState is 4 and status is 200, the response is ready
  if (xhr.readyState === 4 && xhr.status === 200) {

    // converts response (string) into a JSON format
    var response = JSON.parse(xhr.responseText)

    // grabs the container element
    var quoteDiv = document.getElementById('quote-container');

    // sets the quote inside the quote div
    quoteDiv.innerHTML = '<img class="hvr-buzz-out" src="' + response.icon_url + '" />' + response.value
  }
}

// XMLHttpRequest object's open method prepares the request
xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

// sends the prepared request to the server
xhr.send(null);
