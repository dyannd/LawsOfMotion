//When clicking the Formula button
$(".formula").click(function() {
  //Change the formula button color to red:
  $(".formula").addClass("button-clicked");
  $(".formula").removeClass("button-gradient");
  //Change the details button color to gradient:
  $(".states").addClass("button-gradient");
  //Slide up and change text and slide down
  $(".des-text").slideToggle("fast");
  setTimeout(function() {
    $(".des-text").html("<p> <b><i>F<sub>A</sub></i></b> = -<b><i>F<sub>B</sub></i></b>. Where <b><i>F<sub>A</sub></i></b> is the force of A exerting on B, and <b><i>F<sub>B</sub></i></b> is the force of B exerting on A. </p>");
    $(".des-text").slideToggle();
  }, 300);


});


//When clicking the Details button
$(".states").click(function() {
  //Change the formula button color to red:
  $(".states").addClass("button-clicked");
  $(".states").removeClass("button-gradient");
  //Change the function button color to gradient:
  $(".formula").addClass("button-gradient");
  //Slide up and change text and slide down
  $(".des-text").slideToggle("fast");

  setTimeout(function() {
    $(".des-text").html("<p>All forces between any two objects exist in equal magnitude and opposite direction. This simply means when A exerts a force on B, then B is also applying an opposite force on A with equal strength.</p> <p>Note how the cue ball stops immidiately when hitting the target ball, assuming they have the same mass. The reason being at collision, the net force on the cue ball is zero (since it is applying the same amount of force as being applied by the target ball).</p><p>(Note that, the stick is applying a stun shot. Read more about spin and how it affects an object's direction on impact at Hyperphysics). </p>");
    $(".des-text").slideToggle();
  }, 300);


});


//slider value changes
$('input[type=range]').on('input', function() {
  //Change the description force value
  let slidervalue = $('input[type=range]').val();
  $(".slidevalue").text(slidervalue / 10 + "N");
  //Calculate new height of stick background (how far the stick is from the ball), a unit increase of slider equals 5px
  var lenperinput = slidervalue * 5 + 70;
  $(".pool-stick-background").css("height", lenperinput + "px");
});


//When clicking the ball
$(".white-ball").click(function() {
  //Get the red dot's position relative to the whiteball, if it is approx 13 (when the red dot is in the center), then carryout the animation, else pass and wait for user to reset the animations
  var dotPosition = Math.round($(".red-dot").position().top);
  if (dotPosition === 13) {

    //Get the slider's value
    var slidervalue = $('input[type=range]').val();
    //Calculate the animation time ranging from 0.5s -> 2.5s for each input value
    var animation_time = (1.25 / (slidervalue) + 0.25).toFixed(1);
    //Convert animation time to a String to integrate in animations
    var timerollin = animation_time.toString();
    //Same as the above module
    var background_height = slidervalue * 5 + 70;
    //*Calculate time takes for the white ball to get to the red one (same velocity, d=1/3 -> animation time is only 1/3)
    var timeWhiteball = ((animation_time / 5).toFixed(1)).toString();
    //Set the time that the ball would disappear in the hole
    var timedis = (animation_time / 1.6).toString();
    //Acceleration = force / .2 kg with 2 decimal values
    var acceleration = ((slidervalue / 10) / 0.2).toFixed(2);
    var stracceleration = acceleration.toString();



    //Update the Accelerometer text with Animations
    $(".accelerometervalue1").text(stracceleration[0] + stracceleration[1]);
    $(".accelerometervalue1").css("animation", "changingacceleration 1s");

    setTimeout(function() {
      $(".accelerometervalue2").text(stracceleration[2]);
      $(".accelerometervalue2").css("animation", "changingacceleration 1s");
    }, 100)
    setTimeout(function() {
      $(".accelerometervalue3").text(stracceleration[3]);
      $(".accelerometervalue3").css("animation", "changingacceleration 1s");
    }, 200);

    //Delete the animations
    setTimeout(function() {
      $(".accelerometervalue1").css("animation", "");
      $(".accelerometervalue2").css("animation", "");
      $(".accelerometervalue3").css("animation", "");
    }, 1201);

    //Stick hitting animation, returning the height that is approx the white ball's position
    $(".pool-stick-background").animate({
      height: '50px'
    }, 100);
    //Return stick to original position
    $(".pool-stick-background").animate({
      height: background_height.toString()
    }, 100);



    $(".white-ball").css("animation", "whiteBalltoRedBall " + timeWhiteball + 's' + " ease-in ");
    $(".white-ball").css("animation-fill-mode", " forwards");

    setTimeout(function() {
      $(".red-ball").css("animation", "ballRolltoRail " + timerollin + 's' + " ease-out ");
      $(".white-ball").css("animation", "whiteAfter 1.5s  ease-out ");
      $(".red-dot").css("animation", "redDotAfter 1.5s ease-out ");
      $(".white-ball").css("animation-fill-mode", " forwards");
      $(".red-dot").css("animation-fill-mode", " forwards");
      $(".red-ball").css("animation-fill-mode", " forwards");
      //Red ball hitting the rail animation after 10ms of the rollinRail animation time
      setTimeout(function() {
        $(".red-ball").css("animation", "hittingrail " + timedis + 's' + " linear ");
        $(".red-ball").css("animation-fill-mode", " forwards");
      }, animation_time * 1000 + 100);


    }, (animation_time / 5).toFixed(1) * 1000 + 10);
  } else {
    return null;
  }
});
//Clicking the reset button
$(".reset").click(function() {
  //Hiding the balls from the screen
  $(".red-ball").animate({opacity:'0'},500);
  $(".white-ball").animate({opacity:'0'},500);
  $(".red-dot").animate({opacity:'0'},500);

  //Deleting the ball's animations -> return to original pos after making the white ball disappear;
  setTimeout(()=>{
    $(".white-ball").css("animation", "");
    $(".red-dot").css("animation", "");
    $(".red-ball").css("animation", "");
  },500);


  setTimeout(function() {
    $(".red-ball").animate({opacity:'1'},500);
      $(".white-ball").animate({opacity:'1'},500);
        $(".red-dot").animate({opacity:'1'},500);
  }, 1000);


})
