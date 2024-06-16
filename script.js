function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('right-side-body').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}
