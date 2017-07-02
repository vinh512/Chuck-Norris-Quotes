// creates an instance of the XMLHttpRequest object
var xhr = new XMLHttpRequest();

// The onreadystatechange function is called every time the readyState changes.
xhr.onreadystatechange = function() {
  // when readyState is 4 and status is 200, the response is ready
  if (xhr.readyState === 4 && xhr.status === 200) {

    // converts response (string) into a JSON format
    var response = JSON.parse(xhr.responseText)

    // store the main div element to append elements
    var mainDiv = document.querySelector('main');

    // create an img element, set src to icon pic from JSON, add class to shake
    var imgIcon = document.createElement('img');
    imgIcon.setAttribute('src', response.icon_url);
    imgIcon.classList.add('hvr-buzz-out');

    // create a blank div, add a class to it, then populate div with quote
    var quoteDiv = document.createElement('div');
    quoteDiv.classList.add('quote-container')
    quoteDiv.innerHTML = response.value;

    // append the icon and quote to the main div
    mainDiv.appendChild(imgIcon);
    mainDiv.appendChild(quoteDiv);
  }
}

// XMLHttpRequest object's open method prepares the request
xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

// sends the prepared request to the server
xhr.send(null);
