img=""
function preload(){
    img=loadImage("img.png")
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 75 ,75, 490, 330);
    image(img,0,0,640,540);
    
}

function take_snapshot(){
    save('pretty-photoframe.png');
}


