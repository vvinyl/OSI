document.addEventListener('DOMContentLoaded', function() {
    const smallImages = document.querySelectorAll('.smallImg');
    const displayImg = document.querySelector('.displayImg');

    smallImages.forEach(img => {
        img.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const newImg = document.createElement('img');
            newImg.src = imgSrc;
            newImg.style.width = '300px';
            newImg.style.height = '300px';
            newImg.style.opacity = '0';
            newImg.style.transition = 'opacity 0.5s';
            displayImg.innerHTML = '';
            displayImg.appendChild(newImg);
            setTimeout(() => {
                newImg.style.opacity = '1';
            }, 100);
        });
    });
});