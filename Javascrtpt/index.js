var dropdowns = document.querySelector('.username');
var drpdowns1=document.querySelector('.Resume');

  drpdowns1.addEventListener('mouseover', function() {
 dropdowns.style.transform = 'translateY(-10px)';
  setTimeout(function() {
    dropdowns.style.display = 'block';
     drpdowns1.style.display="none";
  }, 300);
  });
  dropdowns.addEventListener('mouseout', function() {
//  dropdowns.style.opacity = 0;
  dropdowns.style.transform = 'translateY(-10px)';
  setTimeout(function() {
    dropdowns.style.display = 'none';
     drpdowns1.style.display="block";
  }, 300);
     // dropdowns.style.display = 'none';
    
  });

  var i = 0;
var txt1 = 'I Can Create Cool Website.';
var txt2 = 'I Can Build Java Based Console Apps.';
var speed = 100;

function typeWriter() {
  if (i < txt1.length) {
    document.getElementById("work-animation").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (i == txt1.length) {
    i = 0;
    document.getElementById("work-animation").innerHTML = '';
    typeWriter2();
  }
}

function typeWriter2() {
  if (i < txt2.length) {
    document.getElementById("work-animation").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter2, speed);
  } else if (i == txt2.length) {
    i = 0;
    document.getElementById("work-animation").innerHTML = '';
    typeWriter();
  }
}

typeWriter();

function myFunction() {
 
  var x = document.getElementById("mySidepanel");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
