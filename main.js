function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    VIDEO = createCapture(VIDEO);
    VIDEO.center();
    VIDEO.size(300,300);
    poseNet = ml5.poseNet(VIDEO, modelLoaded);
    poseNet.on("pose",gotPose);
}

function draw(){
    image(video,100,80,300,250);
}

function take_snapshot(){
    save("my_picture.png");
}
function modelLoaded(){
    console.log("poseNet is Loaded");
}
function gotPose(){
    if(results.length>0){
        console.log(results);
        console.log("nose x :- "+results[0].pose.nose.x);
        console.log("nose y :- "+results[0].pose.nose.y);
    }
}