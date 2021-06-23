//When clicking the Formula button
$("#formula").click(function() {
  //Change the formula button color to red:
  $("#formula").addClass("button-clicked");
  $("#formula").removeClass("button-gradient");
  //Change the details button color to gradient:
  $("#states").addClass("button-gradient");
  //Slide up and change text and slide down
  $(".des-text").slideToggle("fast");
  setTimeout(function() {
    $(".des-text").html("<p>&#8721<b><i>F</i></b> =m<b><i>a</i></b>.</p><br><p>Where &#8721<b><i>F</i></b> is net forces, m is the object's mass, and <b><i>a</i></b> stands for acceleration. The acceleration should have the same direction of the net force and also proporional to its magnitude. </p>");
    $(".des-text").slideToggle();
  }, 300);


});


//When clicking the Details button
$("#states").click(function() {
  //Change the formula button color to red:
  $("#states").addClass("button-clicked");
  $("#states").removeClass("button-gradient");
  //Change the function button color to gradient:
  $("#formula").addClass("button-gradient");
  //Slide up and change text and slide down
  $(".des-text").slideToggle("fast");

  setTimeout(function() {
    $(".des-text").html("<p>The acceleration of an object is positively correlated with the net force applied and inversely proportional to the mass of the object.</p> <p>Try playing with the cue ball on the left to see how acceleration changes when we apply an alternate force on the ball! (Note that the figure is not made for real scaling). </p>");
    $(".des-text").slideToggle();
  }, 300);


});


//slider value changes
$('input[type=range]').on('input', function() {
  //Change the description force value
  let slidervalue = $('input[type=range]').val();
  $(".slidevalue").text(slidervalue / 10 + "N");
  //Calculate new height of stick background (how far the stick is from the ball),  a unit increase of slider equals 8px
  var newHeight = (slidervalue * 8 + 62);
  $(".pool-stick-background").css("height", newHeight + "px");
});


//When clicking the ball
$(".white-ball").click(function() {
  var slidervalue = $('input[type=range]').val();
  //Calculate the animation time from 0.5s (largest input) to 2s (smallest input)
  var animation_time = (1.25 / (slidervalue) + 0.25).toFixed(1);
  var timerollin = animation_time.toString();
  //Like in the previous module
  var background_height = slidervalue * 8 + 62;

  //Set the time that the ball would disappear in the hole
  var timedis = (animation_time / 1).toString();



  //Acceleration = force / .2 kg with 2 decimal values
  var acceleration = ((slidervalue / 10) / 0.2).toFixed(2);
  var stracceleration = acceleration.toString();
  console.log(typeof(stracceleration[0] + stracceleration[1]));

  // //Empty the animation to emit flickering when redoing the cycle
  // $(".white-ball").css("animation", "");
  // $(".red-dot").css("animation", "");


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

  //Stick hitting animation
  $(".pool-stick-background").animate({
    height: '10px'
  }, 100);
  //Return stick to original pos
  $(".pool-stick-background").animate({
    height: background_height.toString()
  }, 100);

  //Wait for 70ms to play ball animation to make it looks like the stick hit the ball
  setTimeout(function() {
    $(".white-ball").css("animation", "rolltohole " + timerollin + 's' + " ease-out forwards");
    $(".red-dot").css("animation", "dotrolltohole " + timerollin + 's' + " ease-out forwards");
    $(".white-ball").css("-webkit-animation", "rolltohole " + timerollin + 's' + " ease-out forwards");
    $(".red-dot").css("-webkit-animation", "dotrolltohole " + timerollin + 's' + " ease-out forwards");
 
  }, 70)

 


});
