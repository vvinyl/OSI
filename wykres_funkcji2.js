let canvas = document.getElementById('wykres2');
let ctx = canvas.getContext('2d');

canvas.style.background = "white";

let width = canvas.width;
let height = canvas.height;

let scaleX = width / (2 * Math.PI); // Skalowanie do szerokości canvas
let scaleY = height / 2; // Skalowanie do wysokości canvas

// Przesunięcie do środka canvas
ctx.translate(width / 2, height / 2);

// Odbicie względem osi OX
ctx.scale(1, -1);

// Rysowanie osi
ctx.beginPath();
ctx.moveTo(-width / 2, 0);
ctx.lineTo(width / 2, 0);
ctx.moveTo(0, -height / 2);
ctx.lineTo(0, height / 2);
ctx.stroke();

// Rysowanie wykresu
ctx.beginPath();
for(let x = -Math.PI; x < Math.PI; x += 0.01) {
    let y = Math.sin(2 * x) * Math.cos(3 * x) + 0.5 * x - 0; // Wartość c to 0
    ctx.lineTo(x * scaleX, y * scaleY);
}
ctx.stroke();
