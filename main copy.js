function preload()
{

}
function setup()
{
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();

tint_color="";

}
function draw()
{
    image (video,230,150,220,200);
    fill(245,0,0);
    stroke(225,0,0);
    rect(30, 20, 55, 55, 20);
    rect(560, 20, 55, 55, 20);
    rect(30, 400, 55, 55, 20);
    rect(560, 400, 55, 55, 20);

    fill(0, 128, 0);
    rect (90, 40, 460, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0)
    rect (90, 40, 460, 20);
   
    rect (90, 420, 460, 20);

    rect (50, 90, 20, 300);
    
    rect (580, 90, 20, 300);

}


function take_snapshot()
{
    save ('image.png');
}

