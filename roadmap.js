var rA;
var rB;
var rC;

function toggleRoadmapType(){
  var radioButton = document.getElementById("roadmapType");

  // var dayRateInput = document.getElementById("roadmapType");

  if (document.getElementById('three').checked){
      var rA = 100;
      var rB = 200;
      var rC = 0;
      console.log(rC);
    }else{
      var rA = 100;
      var rB = 200;
      var rC = 300;
      console.log(rC);
    }
    drawRoadmap(rA, rB, rC);
}

function drawRoadmap(rA, rB, rC){
  var canvas = document.getElementById("myCanvas");

  var ctxA = canvas.getContext("2d");
    ctxA.beginPath();
    ctxA.arc(0, 0, rA, 0, 0.5 * Math.PI);
    ctxA.stroke();

  var ctxB = canvas.getContext("2d");
    ctxB.beginPath();
    ctxB.arc(0, 0, rB, 0, 0.5 * Math.PI);
    ctxB.stroke();

  var ctxC = canvas.getContext("2d");
    ctxC.beginPath();
    ctxC.arc(0, 0, rC, 0, 0.5 * Math.PI);
    ctxC.stroke();
}
