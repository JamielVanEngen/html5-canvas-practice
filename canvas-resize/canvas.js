var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100,100,100,100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(400,400,100,100);

// Drawing line

// the beginPath method tells the progam to ignore the preceding lines and begin animating the following
c.beginPath();
c.moveTo(50, 300);
// Where will the line go to.
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "Red";
c.stroke();

c.beginPath();
// Arc / circle
// arc(x: Int, y: Int, radius: int, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false));
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
