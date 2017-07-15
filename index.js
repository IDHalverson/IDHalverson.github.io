$(document).ready(function(){

var q = {
  github: $("#github"),
  linkedIn: $("#linkedin"),
  twitter: $("#twitter"),
  email: $("#email"),
  allSections: $(".section"),
  mainTitle: $("#main-title"),
  aboutMe: $("#about-me"),
  portfolio: $("#portfolio"),
  contactInfo: $("#contact-info"),
  arrowLR: $(".arrow"),
  arrowLeft: $("#arrow-left"),
  arrowRight: $("#arrow-right"),
  arrowScroll: $("#arrow-scroll"),
  arrowConceal: $("#arrow-conceal"),
  button: $("button")
}


function interactivity() {
  q.arrowLeft.click(function(){
  if ($(".active").prev(".section").length) {
      $(".active").removeClass("active").prev(".section").addClass("active");
    }
    else {
      $(".active").removeClass("active")
      q.contactInfo.addClass("active");
    }
  });
  q.arrowRight.click(function(){
  if ($(".active").next(".section").length) {
      $(".active").removeClass("active").next(".section").addClass("active");
    }
    else {
      $(".active").removeClass("active")
      q.mainTitle.addClass("active");
    }
  });
  q.arrowScroll.click(function(){
    q.allSections.addClass("active");
    q.arrowScroll.hide();
    q.arrowConceal.show();
    q.arrowLR.hide();
  })
  q.arrowConceal.click(function(){
    q.allSections.removeClass("active");
    q.mainTitle.addClass("active");
    q.arrowConceal.hide();
    q.arrowScroll.show();
    q.arrowLR.show();
  })
  q.github.click(function(){
    window.location.href="https://www.github.com/IDHalverson";
  })
  q.linkedIn.click(function(){
    window.location.href="https://www.linkedin.com/in/ian-halverson-830714a4/";
  })
  q.twitter.click(function(){
    window.location.href="https://www.twitter.com/IDHalverson";
  })
  q.email.click(function(){
    window.location.href="mailto:idhalverson@gmail.com";
  })
  q.button.click(function(event){
    window.location.href=event.target.value;
  })
}

interactivity();


})
