// window.onclick = function(event) {
//     if (!event.target.matches('.collapsible)) {
//             var coll1 = document.getElementsByClassName("collapsible");
//             var i;

//             for (i = 0; i < coll1.length; i++) {
//             coll[i].addEventListener("click", function() {
//                 this.classList.toggle("active");
//                 var content = this.nextElementSibling;
//                 if (content.style.display === "block") {
//                 content.style.display = "none";
//                 } else {
//                 content.style.display = "block";
//         }
//     })
// }



// /* When the user clicks on the button, 
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("mycollapsible").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var collapsible = document.getElementsByClassName("collapsible-content");
//       var i;
//       for (i = 0; i < collapsible.length; i++) {
//         var opencollapsible = collapsible[i];
//         if (opencollapsible.classList.contains('show')) {
//           opencollapsible.classList.remove('show');
//         }
//       }
//     }
//   }

  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }