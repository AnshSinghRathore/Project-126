music1 = "";
music2 = "";

function preload()
{
    music1=loadSound("Mission-Impossible-4-Theme.mp3");
    music2=loadSound("Harry-Potter-Theme.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,600,500);
}