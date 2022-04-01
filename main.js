video = "";
status1 = "";


function preload() {
  video = createVideo("video.mp4");
  video.hide();

}

function draw() {
  image(video, 0, 0, 350, 300);
  
}

function setup() {
  canvas = createCanvas(350, 300);
  canvas.center();
  
}

function start() {
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML="status: Detecting Objects...";
}

function modelLoaded() {
  console.log('Model is loaded...');
  status1 = true;
  video.loop();
  video.speed(1);
  video.volume(1);
}