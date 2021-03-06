var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

startclick = ;

function start_click(){
startclick = ++1
}

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
}

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result" + startclick).innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';

    });
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
   
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
