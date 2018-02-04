var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x = canvas.width/2;
var y = canvas.height/2-50;

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

function degToRad(degree) {
    return (Math.PI/180)*degree;
}



function draw() {

    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var milli = d.getMilliseconds();
    var newSec = sec + (milli/1000);
    c.lineCap = "round";


    
    
    //drawing line on 12 clock
    c.save();
    c.beginPath();
    c.translate(x, y-140);
    c.fillStyle = "red";
    c.font = '20px serif';
    c.fillText('12', -10, 10);
    c.stroke();
    c.restore();

   //drawing line on 3 clock
    c.save();
    c.beginPath();
    c.translate(x+140, y);
    c.strokeStyle = "white";
    c.lineWidth = 2;
    c.moveTo(0,0);
    c.lineTo(-10,0);
    c.stroke();
    c.restore();

    //Drawing line on 6 clock
    c.save();
    c.beginPath();
    c.translate(x, y+140);
    c.strokeStyle = "white";
    c.lineWidth = 2;
    c.moveTo(0,0);
    c.lineTo(0,-10);
    c.stroke();
    c.restore();

    //drawing line on 9 clock
    c.save();
    c.beginPath();
    c.translate(x-140, y);
    c.strokeStyle = "white";
    c.lineWidth = 2;
    c.moveTo(0,0);
    c.lineTo(-10,0);
    c.stroke();
    c.restore();

    //sec
    c.beginPath();
    c.strokeStyle = '#28D1FA';
    c.lineWidth = 5;
  c.arc(x,y,180,degToRad(270),degToRad((newSec*6) - 90));
    c.stroke();

    //min
    c.beginPath();
    c.strokeStyle = '#DE6F60';
    c.lineWidth = 5;
    c.arc(x,y,165,degToRad(270),degToRad( (min + (sec/60))*6-90));
    c.stroke();

    //hour
    c.beginPath();
    c.strokeStyle = 'blue';
    c.lineWidth = 5;
    c.arc(x,y,150,degToRad(270),degToRad( (hr+(min/60))*30 - 90));
    c.stroke();

    //sec pointer
    c.save();
    c.translate(x,y);
    c.rotate( degToRad(sec*6) );
    c.beginPath();
    c.moveTo(0,45);
    c.lineTo(0,-130);
    c.strokeStyle = '#28D1FA';
    c.lineWidth = 2;
    c.stroke();
    c.restore();

    //min pointer
    c.save();
    c.translate(x,y);
    c.rotate( degToRad( (min + (sec/60))*6));
    c.beginPath();
    c.moveTo(0,35);
    c.lineTo(0,-120);
    c.strokeStyle = '#DE6F60';
    c.lineWidth = 4;
    c.lineCap = "butt";
    c.stroke();
    c.restore();

    //center circle
    c.beginPath();
    c.strokeStyle = "blue";
    c.lineWidth = 3;
    c.arc(x,y,10,0,2*Math.PI);
    c.fillStyle = 'blue';
    c.fill();
    c.stroke();

    //hr pointer
    c.save();
    c.translate(x,y);
    c.rotate( degToRad( (hr + (min/60) )*30 ) );
    c.beginPath();
    c.moveTo(0,30);
    c.lineTo(0,-100);
    c.strokeStyle = 'blue';
    c.lineWidth = 6;
    c.lineCap = "butt";
    c.stroke();
    c.restore();

}

function animate() {

    c.clearRect(0,0,canvas.width,canvas.height);
    draw();
}

setInterval(animate,40);