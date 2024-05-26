 // Skrypt do rysowania wykresu w Canvas o id "wykres"
 const canvas1 = document.getElementById('wykres');
 const ctx1 = canvas1.getContext('2d');
 const width1 = canvas1.width;
 const height1 = canvas1.height;
 const c1 = 1;

 const scaleX1 = 20;
 const scaleY1 = 20;
 const offsetX1 = width1 / 2;
 const offsetY1 = height1 / 2;

 function drawAxes(ctx, offsetX, offsetY, width, height) {
     ctx.beginPath();
     ctx.moveTo(0, offsetY);
     ctx.lineTo(width, offsetY);
     ctx.moveTo(offsetX, 0);
     ctx.lineTo(offsetX, height);
     ctx.strokeStyle = '#000';
     ctx.stroke();
 }

 function drawGraph(ctx, offsetX, offsetY, scaleX, scaleY, c, func) {
     ctx.beginPath();
     ctx.moveTo(0, offsetY);

     for (let x = -offsetX / scaleX; x < offsetX / scaleX; x += 0.1) {
         let y = func(x, c);
         let canvasX = x * scaleX + offsetX;
         let canvasY = -y * scaleY + offsetY;
         ctx.lineTo(canvasX, canvasY);
     }

     ctx.strokeStyle = 'red';
     ctx.stroke();
 }

 function func1(x, c) {
     return Math.sin(x) + 0.5 * x - c;
 }

 drawAxes(ctx1, offsetX1, offsetY1, width1, height1);
 drawGraph(ctx1, offsetX1, offsetY1, scaleX1, scaleY1, c1, func1);

 // Skrypt do rysowania wykresu w Canvas o id "wykres2"
 const canvas2 = document.getElementById('wykres2');
 const ctx2 = canvas2.getContext('2d');
 const width2 = canvas2.width;
 const height2 = canvas2.height;
 const c2 = 1;

 const scaleX2 = 20;
 const scaleY2 = 20;
 const offsetX2 = width2 / 2;
 const offsetY2 = height2 / 2;

 function func2(x, c) {
     return Math.sin(2 * x) * Math.cos(3 * x) + 0.5 * x - c;
 }

 function drawGraph2(ctx, offsetX, offsetY, width, height, func, c) {
     const xMin = -Math.PI;
     const xMax = Math.PI;
     const yMin = -2;
     const yMax = 2;

     ctx.save();
     ctx.translate(offsetX, offsetY);
     ctx.scale(1, -1);

     ctx.beginPath();
     ctx.moveTo(
         (xMin * width) / (xMax - xMin),
         ((func(xMin, c) - yMin) * height) / (yMax - yMin)
     );

     for (let x = xMin; x <= xMax; x += 0.01) {
         let y = func(x, c);
         ctx.lineTo(
             (x * width) / (xMax - xMin),
             ((y - yMin) * height) / (yMax - yMin)
         );
     }

     ctx.strokeStyle = 'blue';
     ctx.stroke();

     ctx.restore();
 }

 drawAxes(ctx2, offsetX2, offsetY2, width2, height2);
 drawGraph2(ctx2, offsetX2, offsetY2, width2, height2, func2, c2);