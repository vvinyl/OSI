var canvas = document.getElementById('prostokat');
var ctx = canvas.getContext('2d');

// Utwórz gradient
var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'blue');

// Narysuj prostokąt z zaokrąglonymi rogami
function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

// Użyj funkcji do narysowania prostokąta
roundRect(ctx, 50, 50, 100, 200, 20); // Zmieniono szerokość na 100px i wysokość na 200px

// Wypełnij gradientem
ctx.fillStyle = gradient;
ctx.fill();
