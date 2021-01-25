
<script src="assets/js/bootstrap.min.js"></script>
$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  $('[data-toggle="popover"]').popover();

});




// Call carousel manually
$('#myCarouselCustom').carousel();

// Go to the previous item
$("#prevBtn").click(function(){
    $("#myCarouselCustom").carousel("prev");
});
// Go to the previous item
$("#nextBtn").click(function(){
    $("#myCarouselCustom").carousel("next");
});

<script type="text/javascript">
$('.carousel').carousel({
     interval: 8000,
     pause: true,
     wrap: false
    
});
</script>
