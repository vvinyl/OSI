var canvas = document.getElementById('wykres');
var ctx = canvas.getContext('2d');

canvas.style.background = "white";

var scale = 20; // Skala dla osi x i y
var c = 2; // Wartość c w równaniu

// Przesunięcie do środka canvas
ctx.translate(canvas.width / 2, canvas.height / 2);

// Rysowanie osi x i y
ctx.beginPath();
ctx.moveTo(-canvas.width / 2, 0);
ctx.lineTo(canvas.width / 2, 0);
ctx.moveTo(0, -canvas.height / 2);
ctx.lineTo(0, canvas.height / 2);
ctx.strokeStyle = 'black';
ctx.stroke();

// Rysowanie wykresu funkcji
ctx.beginPath();
ctx.moveTo(-canvas.width / 2, -scale * (Math.sin(-canvas.width / (2 * scale)) + 0.5 * -canvas.width / (2 * scale) - c));
for (var x = -canvas.width / 2; x <= canvas.width / 2; x++) {
    var y = Math.sin(x / scale) + 0.5 * x / scale - c;
    ctx.lineTo(x, -y * scale); // Minus y, ponieważ osie y są odwrócone w canvas
}
ctx.strokeStyle = 'red';
ctx.stroke();
