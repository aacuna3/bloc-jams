<<<<<<< HEAD
var pointsArray= document.getElementsByClassName('point');

<<<<<<< assignment-9-events
var animatePoints = function (points) {
     var revealPoint =  function (index) {
=======
var animatePoints = function(points) {
     var revealPoint =  function(index) {
=======
var pointsArray = document.getElementsByClassName ('point');

var animatePoints = function (points) {
     var revealPoint =  function (index) {
>>>>>>> assignment-8-animation
>>>>>>> local
         points[index].style.opacity = 1;
         points[index].style.transform = "scaleX(1) translateY(0)";
         points[index].style.msTransform = "scaleX(1) translateY(0)";
         points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
}
for (var i = 0; i < points.length; i++) {
  revealPoint(i);
}
 };

 window.onload = function () {
   if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }

   var sellingPoints = document.getElementsByClassName('selling-points')[0];
   var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

<<<<<<< assignment-9-events
window.addEventListener ('scroll', function(event){
=======
<<<<<<< HEAD
window.addEventListener('scroll', function(event){
>>>>>>> local
  if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
               animatePoints(pointsArray);
           }
         });
=======
window.addEventListener ('scroll', function(event) {
  if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
               animatePoints(pointsArray);
           }
      });
>>>>>>> assignment-8-animation
 }
