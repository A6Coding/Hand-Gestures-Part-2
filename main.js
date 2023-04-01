predictedHandGesture = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

Webcam.attach("#camera");

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
};

camera = document.getElementById("camera");

console.log("ml5 version:", ml5.version);

classfier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yb1QsD_Yd/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model is ready!");
}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "The following hand gesture looks like " + predictedHandGesture;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}