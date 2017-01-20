
// track position of element
var pos = 0;

function left(){
  pos += 100;
  var elem = document.getElementById('animate');
  elem.style.left = pos + 'px';
}
function right(){
  pos -= 100;
  var elem = document.getElementById('animate');
  elem.style.left = pos + 'px';
}




// $(document).ready(function(){
//
//   $('.resource-image').click(function(){
//     scrollLeft();
//     alert('clicked');
//   });
//
//
//
// });

// call this f every 5 milisec.
// var id = setInterval(frame, 5);
// if pos 100 stop setInterval from running
// and set elem pos using css back to 0
// else move 1px left using css
// function frame(){
//   if (pos === 500){
//     clearInterval(id);
//     pos = 0;
//     elem.style.left = pos + 'px';
//   } else {
//     for (var i=0; i<100; i++){
//       pos++;
//       elem.style.left = pos + 'px';
//     }
//
//   }
// }
