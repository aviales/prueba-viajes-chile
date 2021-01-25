
$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;
console.log(gato)
      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });
});

  $('[data-toggle="popover"]').popover();




