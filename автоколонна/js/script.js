document.getElementById('toggle-button').addEventListener('click', function() {
    let moreText = document.getElementById('more-text');
    let button = document.getElementById('toggle-button');
    let dots = document.getElementById('remove')

    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'block';
        button.style.display = 'none'
        dots.style.display = 'none'
    }
});

document.getElementById('back-button').addEventListener('click', function() {
    let moreText = document.getElementById('more-text');
    let button = document.getElementById('toggle-button');
    let dots = document.getElementById('remove')

    if (moreText.style.display === 'block') {
        moreText.style.display = 'none';
        button.style.display = ''
        dots.style.display = ''
    }
});