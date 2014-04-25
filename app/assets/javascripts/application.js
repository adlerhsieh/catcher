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
var counter = setInterval(timer, 30);

//按下暫停按鈕，切換按鈕顏色，佈景顏色，停止棒條
function pause_switch() {
	if (switch_id == 0) {
		//切換按鈕顏色
		$('#pause').text("繼續");
		$('#pause').attr('class', 'btn btn-danger btn-lg');
		$('#pause').attr('id', 'continue');	
		//切換佈景顏色
		$('.quiz-window').css('background-color', '#979292');
		$('.quiz-window').css('opacity', '0');
		current_opacity = $('.quiz-window-2').css('opacity');
		$('.quiz-window-2').css('opacity', '0');
		$(".quiz-window-3").css('display', 'static');
		//停止棒條
		clearInterval(counter);
		switch_id = 1;
	} else {
		$('#continue').text("暫停");
		$('#continue').attr('class', 'btn btn-primary btn-lg');
		$('#continue').attr('id', 'pause');
		//切換佈景顏色
		$('.quiz-window').css('background-color', 'none');
		$('.quiz-window').css('opacity', '1');
		$('.quiz-window-2').css('opacity', current_opacity);
		$(".quiz-window-3").css('display', 'none');
		counter = setInterval(timer, 30);
		switch_id = 0;
	};
};

//時間棒條
function timer() {
	$(".time-bar").animate({width: "-=1"}, 0);
	//答案逐漸顯露出來
	$(".quiz-window-2").animate({opacity: "+=.0005"}, 0);
	if ($(".time-bar").width() < 1) {
		$(".time-bar").css('opacity', 0);
	} else {
		$(".time-bar").css('opacity', 1);
	};
};

$(document).ready(function() {
	$(".quiz-window-2").css('margin-left' , $(".quiz-window").css('margin-left'));
	$(".quiz-window-3").css('margin-left' , $(".quiz-window").css('margin-left'));
	$(".quiz-window-3").css('display', 'none');
});

$(window).resize(function(){
	$(".quiz-window-2").css('margin-left' , $(".quiz-window").css('margin-left'));
	$(".quiz-window-3").css('margin-left' , $(".quiz-window").css('margin-left'));
});