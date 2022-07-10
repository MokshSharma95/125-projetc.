LeftWrisx=0;
RightWristx=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,450);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded(){
    console.log("poseNet is Initialised")

}

function gotPoses(results){
    if(results.length > 0)
    {
    
        console.log(results);       

        LeftWrisx = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWrisx - RightWristx);

        console.log("LeftWrisx = " + LeftWrisx + " RightWristx = "+ RightWristx + " difference = " + difference);
    }
    }

function draw(){
    background('#6C91C2');
    document.getElementById("text_px").innerHTML = "Font size of the Text will be = " + difference +"px";
    textSize(difference);
    fill('difference');
    text('Peter', 50, 400);
}
