document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let fileInput = document.getElementById('fileInput');
    let file = fileInput.files[0];
    
    if (!file) {
        alert('Please select an image to upload.');
        return;
    }

    // Create a FormData object to hold the file
    let formData = new FormData();
    formData.append('file', file);

    // Send the file to the backend via Fetch API
    fetch('/api/ocr/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultSection').style.display = 'block';
        let resultMessage = document.getElementById('resultMessage');
        
        if (data.success) {
            resultMessage.classList.remove('alert-info');
            resultMessage.classList.add('alert-success');
            resultMessage.innerHTML = `<strong>Match Found!</strong> ${data.message}`;
        } else {
            resultMessage.classList.remove('alert-success');
            resultMessage.classList.add('alert-danger');
            resultMessage.innerHTML = `<strong>Mismatch Detected!</strong> ${data.message}`;
        }

        resultMessage.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error processing the image. Please try again.');
    });
});
