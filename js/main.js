console.log('hi');

  // creates a new request object
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    console.log('hi')
    if (xhr.readyState === 4 && xhr.status === 200) {

      var response = JSON.parse(xhr.responseText)
      var quoteDiv = document.getElementById('quote');

      quoteDiv.innerHTML = '<div>' + response.value + '</div>';

      console.log(response);
    }
  }

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.send(null);
