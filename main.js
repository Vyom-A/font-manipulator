function setup() {
video = createCapture(VIDEO);
canvas = createCanvas(560,430)
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function preload(){

}
function draw () {
video.size(700,430);
background("red");
//canvas.center();
canvas.position(800,150);
video.position(60,150);
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
}
}
function modelLoaded () {
console.log("PoseNet is Initialized");
}