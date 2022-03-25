leftWristX = 0;
rightWristX = 0;
difference = 0;
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

textSize(difference);
fill('blue');
text('Vyom',50,400);

}
function gotPoses(results){
if(results.length > 0){
console.log(results);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);

document.getElementById("fontSize").innerHTML = difference + "px";
console.log("Left wrist x " + leftWristX);
console.log("Right wrist x " + rightWristX);
console.log("Difference " + difference);

}
}
function modelLoaded () {
console.log("PoseNet is Initialized");
}