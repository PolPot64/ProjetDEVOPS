function fetchData() {
    fetch('http://localhost:8080/api-0.0.1/api/openapi.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('data').innerText = JSON.stringify(data);
        })
        .catch(error => console.error('Error:', error));
}