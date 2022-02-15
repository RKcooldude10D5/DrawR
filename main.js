var x= 0;
var y= 0;
var drawcircle="";
var drawrect="";
var speechrecognition= window.webkitSpeechRecognition;
var recognition= new speechrecognition();
function start(){
    document.getElementById("status").innerHTML="Ayo this thing listening";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("status").innerHTML="Da speech has been recognized as" + content;
    if (content=="circle"){
        x= Math.floor(Math.random()* 900);
        y= Math.floor(Math.random()* 600);
        document.getElementById("status").innerHTML="Farted drawing circle";
        drawcircle="set";
    }
    if (content=="rectangle"){
        x= Math.floor(Math.random()* 900);
        y= Math.floor(Math.random()* 600);
        document.getElementById("status").innerHTML="Farted drawing rectangle";
        drawrect="set";
    }
}
function setup(){
    var canvas= createCanvas(900, 600);
}
function draw(){
    r= Math.floor(Math.random()* 255);
    g= Math.floor(Math.random()* 255);
    b= Math.floor(Math.random()* 255);
    fill(r, g, b);
    if(drawcircle=="set"){
        radius= Math.floor(Math.random()* 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML="Circle go farted";
        drawcircle="";
    }
    if(drawrect=="set"){
        
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML="Rectangle go farted";
        drawrect="";
    }
}