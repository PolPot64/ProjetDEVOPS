function fetchData() {
    fetch('http://localhost:8080/api-endpoint') // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {
            document.getElementById('data').innerText = JSON.stringify(data);
        })
        .catch(error => console.error('Error:', error));
}