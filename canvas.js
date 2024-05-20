var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var tab = [10, 30, 50, 120];
var total = tab.reduce((a, b) => a + b, 0);
var startAngle = 0;

for (var i = 0; i < tab.length; i++) {
    var sliceAngle = 2 * Math.PI * tab[i] / total;
    var endAngle = startAngle + sliceAngle;

    // Utwórz gradient
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');

    // Narysuj fragment wykresu
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2, startAngle, endAngle);
    ctx.closePath();

    // Wypełnij gradientem
    ctx.fillStyle = gradient;
    ctx.fill();

    startAngle += sliceAngle;
}
