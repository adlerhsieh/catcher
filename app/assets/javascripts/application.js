// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
var switch_id = 0;
var current_opacity = 0;
var counter = clearInterval(timer);
var current_q_number = 0;
var revealing_speed = qs[current_q_number].revealing_speed;
var change = 0;
var unit1 = "";

$(document).ready(function() {
	$(".quiz-window-3").css('display', 'none');
	position_windows();
	change_quiz();
	//$(".right_answer").css('opacity' , 0.5 );
});

$(window).resize(function(){
	position_windows();
	position_right_answer() ;
});

