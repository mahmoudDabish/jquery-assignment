function openNav() {
    $("#mySidenav").width(250);
    $("#main").css("margin-left", "250px");
  }

  function closeNav() {
    $("#mySidenav").width(0);
    $("#main").css("margin-left", "0");
  }



  var eventDate = new Date("2024-12-31").getTime();

  var countdownInterval = setInterval(function() {
    var currentDate = new Date().getTime();
    var timeRemaining = eventDate - currentDate;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))+" d";
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+" h";
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))+" m";
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)+" s";

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").innerHTML = "0";
      document.getElementById("hours").innerHTML = "0";
      document.getElementById("minutes").innerHTML = "0";
      document.getElementById("seconds").innerHTML = "0";
    }
  }, 1000);


$(document).ready(function() {
    $(".accordion-header").click(function() {
        $(this).next(".accordion-content").slideToggle();
        $(".accordion-content").not($(this).next()).slideUp();
    });
});


function updateCharacterCount() {
    var textarea = document.getElementById('myTextarea');
    var charCountSpan = document.getElementById('charCount');
    var charCountMessage = document.getElementById('charCountMessage');
    var maxChars = 100;
    var currentChars = textarea.value.length;
    var remainingChars = maxChars - currentChars;
    charCountSpan.textContent = remainingChars;

    if (remainingChars === 0) {
        charCountMessage.textContent = "your available character finished";
    }
}