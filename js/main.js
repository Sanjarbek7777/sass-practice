var elHeaderOpen = document.querySelector(".header");
var elHeaderToggler = elHeaderOpen.querySelector(".button");

if( elHeaderToggler){
  elHeaderToggler.addEventListener("click", function(){
    elHeaderOpen.classList.toggle("sitenav-open");
  });
}