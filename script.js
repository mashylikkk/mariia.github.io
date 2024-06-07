document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=8')
.then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                data.forEach((cat, index) => {
                    const rect = document.getElementById(`rect${index + 1}`);
                    if (rect) {
                        const img = document.createElement('img');
                        img.src = cat.url;
                        img.style.width = '100%';
                        img.style.height = '100%';
                        img.style.objectFit = 'cover';
                        rect.appendChild(img);
                    }
                });
            } else {
                console.error('No data received from API');
            }
        })
        .catch(error => console.error('Error fetching cat images:', error));
});

