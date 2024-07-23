var i1 = 0;
var txt1 = 'QUOTIDIEN LE SAHEL'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i1 < txt.length) {
    document.getElementById("logo1").innerHTML += txt1.charAt(i1);
    i1++;
    setTimeout(typeWriter, speed);
  }
}