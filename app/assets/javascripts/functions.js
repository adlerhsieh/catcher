//正確答案播放音效&動畫
function correct_answer() {
	stage1_scoring = stage1_scoring + 1;
	$('#stage1_score').text("得分：" + stage1_scoring);
	$(".quiz-window-2").css('opacity', 1);
	$(".right_answer").unbind('click' , correct_answer);
	$(".quiz-window-2").unbind('click' , wrong_answer);
	$('.correct').css("display", "block");
	clearInterval(counter);
	$('#pause').attr('disabled', true);
	$('.time-bar').animate({width: "340px"}, 800);
	setTimeout(function(){change_quiz()}, 1000);
};

function wrong_answer() {
	//show_mouse_position();
	$(".right_answer").unbind('click' , correct_answer);
	$(".quiz-window-2").unbind('click' , wrong_answer);
	$('.wrong').css("display", "block");
	clearInterval(counter);
	$('#pause').attr('disabled', true);
	$('.time-bar').animate({width: "340px"}, 800);
	setTimeout(function(){change_quiz()}, 1000);	
};

function time_up() {
	$(".right_answer").unbind('click' , correct_answer);
	$(".quiz-window-2").unbind('click' , wrong_answer);
	$('.wrong').css("display", "block");
	clearInterval(counter);
	$('#pause').attr('disabled', true);
	$('.time-bar').animate({width: "340px"}, 800);
	setTimeout(function(){change_quiz()}, 1000);			
};

function position_right_answer() {
	$(".right_answer").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + qs[current_q_number].marginLeft );
	$(".right_answer").css('marginTop' , qs[current_q_number].marginTop );
	$(".right_answer").css('width' , qs[current_q_number].width );
	$(".right_answer").css('height' , qs[current_q_number].height );
};

//時間棒條
function timer() {
	$(".time-bar").animate({width: "-=1"}, 0);
	//答案逐漸顯露出來
	$(".quiz-window-2").animate({opacity: revealing_speed}, 0);
	if ($(".time-bar").width() < 1) {
		time_up()
	} else {
		$(".time-bar").css('opacity', 1);
	};
};

function position_windows() {
	document.getElementById("quiz-window-1-id").style.marginLeft = $(window).width()/2 - $(".quiz-window").width()/2 + "px";
	unit1 = parseInt(document.getElementById("quiz-window-1-id").style.marginLeft);
	document.getElementById("quiz-window-2-id").style.marginLeft = unit1  + "px";
	document.getElementById("quiz-window-3-id").style.marginLeft = unit1  + "px";
	document.getElementById("correct-id").style.marginLeft = unit1 + 110  + "px";
	document.getElementById("back-to-menu-id").style.marginLeft = unit1 + 225  + "px";
	document.getElementById("wrong-id").style.marginLeft = unit1 + 150  + "px";
	//$(".wrong").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + 150);
	//$(".back-to-menu").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + 225);
	//$(".correct").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + 110);
	//$(".quiz-window-3").css('left' , parseInt($(".quiz-window").css('marginLeft')));
	//$(".quiz-window-2").css('left' , parseInt($(".quiz-window").css('marginLeft')));	
	
	//document.getElementById("menu_box_id").style.marginLeft = $(window).width()/2 - $(".menu_box").width()/2 + "px";
	//unit2 = parseInt(document.getElementById("menu_box_id").style.marginLeft);
	//document.getElementById("frame_game_id").style.marginLeft = unit1  + "px";
	//document.getElementById("frame_game_id").style.marginLeft = unit1  + "px";
}

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
		$(".back-to-menu").css('display', 'block');
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
		$(".back-to-menu").css('display', 'none');
		counter = setInterval(timer, 30);
		switch_id = 0;
	};
};

//function show_mouse_position() {
//	var mouse_position = [0,0];
//	mouse_position[0] = event.pageX - parseInt($(".quiz-window").css('marginLeft')) - 15;
//	mouse_position[1] = event.pageY - 15;
//	$(".quiz-window").append("<div class='mouse_position'></div>");
//	$('.mouse_position').css('marginLeft', mouse_position[0]);
//	$('.mouse_position').css('marginTop', mouse_position[1]);
//}

function change_quiz() {
	if (current_q_number < 3) {
		current_q_number = current_q_number + 1;
		$('.quiz-window').css('background-image', qs[current_q_number].backgroundImage);
		$('.quiz-window-2').css('background-image', qs[current_q_number].rightAnswer);
		$('.quiz-window-2').css('opacity', '0');
		$('#pause').attr('disabled', false);
		$(".right_answer").bind('click' , correct_answer);
		$(".quiz-window-2").bind('click' , wrong_answer);
		$('.correct').css("display", "none");
		$('.wrong').css("display", "none");
		position_right_answer()
		revealing_speed = qs[current_q_number].revealing_speed;
		counter = setInterval(timer, 30);
	} else {
		$('.quiz-window').css('opacity', '0');
		$('.quiz-window-2').css('opacity', '0');
		$('#pause').attr('disabled', true);
		$('.correct').css("display", "none");
		$('.wrong').css("display", "none");
		$(".quiz-window-3").css('display', 'static');
		$(".quiz-window-3").css('background-image', 'url("/assets/stage_done.png")');
		$(".back-to-menu").css('display', 'block');
	}
}
