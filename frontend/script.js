function fetchData() {
    fetch('http://localhost:8080/api-0.0.1/api/Bids', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer test'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('data').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
}