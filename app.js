function fetchData() {

  fetch("https://x9yxbl5ntc.execute-api.eu-west-2.amazonaws.com/prod/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => takeData(json));
}

function takeData(val) {

  document.getElementById('visitor').innerHTML = val.Attributes.numberOfVisitors;
}

fetchData();