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
    $(".des-text").html("<p>&#8721<b><i>F</i></b> = 0   &#8660   <b><i>dv</i></b>/dt = 0.</p><br><p>Where &#8721<b><i>F</i></b> is net forces, <b><i>v</i></b> is velocity, and <b><i>dv</i></b>/dt stands for acceleration. When a ball rests on the table, its force of gravity equals to the force exerted by the table surface, so their net total is zero. </p>");
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
    $(".des-text").html("<p>An object will not change its motion unless acted by a net external force. This means if the sum of total forces acting on an object does not change, the object keeps resting if initially at rest, or keep moving if initially in motion without speeding up or slowing down.</p><p>When a pool ball rests on the table, it stays there until you hit it. (Try it!)</p>");
    $(".des-text").slideToggle();
  }, 300);


});

//Pool stick
$(".white-ball").click(function(){
  $(".white-ball").css("animation","none");
  $(".red-dot").css("animation","none");
  $(".pool-stick-background").css("animation","none");

  setTimeout(function(){
    //Stick hitting animation
    $(".pool-stick-background").css("animation","stickbackgroundmove 0.2s");

    setTimeout(function(){
      //Ball rolling animation
      $(".white-ball").css("animation","ballroll 2s linear");
      $(".red-dot").css("animation","rollupPad 2s linear");
    },50);


},100);


});
