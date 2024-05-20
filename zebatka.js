function drawGear(ctx, x, y, numTeeth, r0, r1, r2) {
    var angle = Math.PI * 2 / numTeeth;
    ctx.strokeStyle = 'white'; // Ustawienie koloru konturu na biały
    ctx.fillStyle = 'white'; // Ustawienie koloru wypełnienia na biały
    ctx.beginPath();
    for (var i = 0; i < numTeeth; i++) {
        ctx.lineTo(x + r0 * Math.cos(i * angle), y + r0 * Math.sin(i * angle));
        ctx.lineTo(x + r1 * Math.cos(i * angle + angle / 4), y + r1 * Math.sin(i * angle + angle / 4));
        ctx.lineTo(x + r2 * Math.cos(i * angle + angle / 2), y + r2 * Math.sin(i * angle + angle / 2));
        ctx.lineTo(x + r1 * Math.cos(i * angle + 3 * angle / 4), y + r1 * Math.sin(i * angle + 3 * angle / 4));
    }
    ctx.closePath();
    ctx.stroke();

    // Rysowanie 5 okrągłych otworów
    for (var i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(x + r0 * Math.cos(i * 2 * Math.PI / 5), y + r0 * Math.sin(i * 2 * Math.PI / 5), r0 / 10, 0, 2 * Math.PI);
        ctx.fill();
    }
}

var canvas = document.getElementById('zebatka');
var ctx = canvas.getContext('2d');

drawGear(ctx, 200, 200, 20, 50, 70, 100);
