fetch('https://localhost:8000/api/get-product')
    .then(response => response.json())
    .then(json => console.log(json))