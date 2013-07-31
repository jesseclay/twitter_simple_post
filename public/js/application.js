$(document).ready(function() {
  $('#tweet').on('submit', function(e) {
    e.preventDefault();
    $.ajax ({
      url: this.action,
      method: this.method,
      data: $(this).serialize()
    }).done(function(msg) {
      $('.tweet_result').append("Tweet Successful!");
    }).fail(function(msg){
      $('.tweet_result').append("You suck, dumbass.");
    }).always(function(){
      $('.tweet_result').fadeIn(1000);
    });
  });

});
