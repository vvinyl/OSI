var canvas = document.getElementById('przebieg');
var ctx = canvas.getContext('2d');

var width = 50; // Szerokość fali
var height = 20; // Wysokość fali
var offset = 0; // Przesunięcie fali

ctx.beginPath();
for (var x = 0; x < canvas.width; x++) {
    if ((x + offset) % (2 * width) < width) {
        ctx.lineTo(x, height);
    } else {
        ctx.lineTo(x, canvas.height - height);
    }
}
ctx.stroke();
