// Get all buttons with class="btn" inside the container
// Loop through the buttons and add the active class to the current/clicked button
//for (var i = 0; i < btns.length; i++) {
//  btns[i].addEventListener("click", function() {
//    var current = document.getElementsByClassName("active");
    // current[0].className = current[0].className.replace(" active", "");
//    console.log('active ',current)
//    this.className += " active";
//  });
//} 
// var curActive = document.querySelectorAll(".active")
// console.log('active links ', curActive)

// function activeLink(e) {
//   console.log('hey')
//  var curActive = document.querySelectorAll(".active")
//  console.log('active links ', curActive)
//}

function navClicks() {
  alert('hey')
  console.log('hey')
  var curActive = document.getElementsByClassName(".active"); 
  console.log('active',curActive)
  curActive.className.replace(" active", "")

}