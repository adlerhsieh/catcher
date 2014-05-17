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
//= require bootstrap
//= require_tree .
var switch_id = 0;
var current_opacity = 0;
var counter = clearInterval(timer);
var current_q_number = 2;
var change = 0;
var entering = 1;
var current_stage = 0;
var login = false;
var stage_scoring = 0;
var current_right_answer_number = 0;
var unit1 = "";
var unit2 = "";
var user_current_stage_score = 0;
var stage_time = 0;

$(window).resize(function(){
	position_windows();
	position_right_answer();
});

