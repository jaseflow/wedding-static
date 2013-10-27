


$(function() {

  $('#action').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750,
      scrollOffset: 30,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      begin: function() {
          //I get fired when the animation is starting
      },
      end: function() {
          //I get fired when the animation is ending
      },
      scrollChange: function($currentListItem) {
          //I get fired when you enter a section and I pass the list item of the section
      }
  });

  $('.landing__action').click(function(e) {
    e.preventDefault();
    $('.landing').css('-webkit-transform','translateY(-100%)');
    $('.content').css('opacity','1');
  });


});