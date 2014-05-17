//正確答案播放音效&動畫
function correct_answer() {
	stage_scoring = stage_scoring + 1;
	$('#stage_score').text("得分：" + stage_scoring);
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
	//make sure users don't have  the following variable > 1 at the beginning of the next r section q
	current_right_answer_number = 0;	
};

function time_up() {
	$(".right_answer").unbind('click' , correct_answer);
	$(".quiz-window-2").unbind('click' , wrong_answer);
	$(".instruction_point").css('display', 'none');
	$('.wrong').css("display", "block");
	clearInterval(counter);
	$('#pause').attr('disabled', true);
	$('.time-bar').animate({width: "340px"}, 800);
	setTimeout(function(){change_quiz()}, 1000);			
};

function adding_correct_answer() {
	$(this).unbind('click', adding_correct_answer);
	$(this).css('border', '5px solid yellow');
	if (current_right_answer_number < 4 ) {
		current_right_answer_number = current_right_answer_number + 1;
	} else {
		correct_answer();
		current_right_answer_number = 0;
	}
}

function position_right_answer() {
	if (qs[current_q_number].backgroundImage.indexOf('_') != -1) {
		$("#right_answer_id_1").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + qs[current_q_number].right_answer1_marginLeft );
		$("#right_answer_id_1").css('marginTop' , qs[current_q_number].right_answer1_marginTop );
		$("#right_answer_id_1").css('width' , qs[current_q_number].right_answer1_width );
		$("#right_answer_id_1").css('height' , qs[current_q_number].right_answer1_height );
		$("#right_answer_id_2").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + qs[current_q_number].right_answer2_marginLeft );
		$("#right_answer_id_2").css('marginTop' , qs[current_q_number].right_answer2_marginTop );
		$("#right_answer_id_2").css('width' , qs[current_q_number].right_answer2_width );
		$("#right_answer_id_2").css('height' , qs[current_q_number].right_answer2_height );
		$("#right_answer_id_3").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + qs[current_q_number].right_answer3_marginLeft );
		$("#right_answer_id_3").css('marginTop' , qs[current_q_number].right_answer3_marginTop );
		$("#right_answer_id_3").css('width' , qs[current_q_number].right_answer3_width );
		$("#right_answer_id_3").css('height' , qs[current_q_number].right_answer3_height );
		$("#right_answer_id_4").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + qs[current_q_number].right_answer4_marginLeft );
		$("#right_answer_id_4").css('marginTop' , qs[current_q_number].right_answer4_marginTop );
		$("#right_answer_id_4").css('width' , qs[current_q_number].right_answer4_width );
		$("#right_answer_id_4").css('height' , qs[current_q_number].right_answer4_height );
		if (qs[current_q_number].right_answer_number > 4) {
			$("#right_answer_id_5").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + qs[current_q_number].right_answer5_marginLeft );
			$("#right_answer_id_5").css('marginTop' , qs[current_q_number].right_answer5_marginTop );
			$("#right_answer_id_5").css('width' , qs[current_q_number].right_answer5_width );
			$("#right_answer_id_5").css('height' , qs[current_q_number].right_answer5_height );
		}
	} else {
		$(".right_answer").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + qs[current_q_number].marginLeft );
		$(".right_answer").css('marginTop' , qs[current_q_number].marginTop );
		$(".right_answer").css('width' , qs[current_q_number].width );
		$(".right_answer").css('height' , qs[current_q_number].height );
	}
};

//時間棒條
function timer() {
	$(".time-bar").animate({width: "-=0"}, 0);
	//答案逐漸顯露出來
	$(".quiz-window-2").animate({opacity: revealing_speed}, 0);
	if ($(".time-bar").width() < 1) {
		time_up();
	} else {
		$(".time-bar").css('opacity', 1);
	};
};

function position_windows() {
	document.getElementById("quiz-window-1-id").style.marginLeft = $(window).width()/2 - $(".quiz-window").width()/2 + "px";
	unit1 = parseInt(document.getElementById("quiz-window-1-id").style.marginLeft);
	document.getElementById("quiz-window-2-id").style.marginLeft = unit1  + "px";
	document.getElementById("quiz-window-3-id").style.marginLeft = unit1  + "px";
	document.getElementById("correct-id").style.marginLeft = unit1 + 110 + "px";
	document.getElementById("back-to-menu-id").style.marginLeft = unit1 + 225  + "px";
	document.getElementById("back-to-menu-id-2").style.marginLeft = unit1 + 225  + "px";
	document.getElementById("continue-in-frame").style.marginLeft = unit1 + 225  + "px";
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
		$('#continue-in-frame').css('display', 'block');
		//切換佈景顏色
		$('.quiz-window').css('background-color', '#979292');
		$('.quiz-window').css('opacity', '0');
		current_opacity = $('.quiz-window-2').css('opacity');
		$('.quiz-window-2').css('opacity', '0');
		$(".quiz-window-3").css('display', 'static');
		$(".back-to-menu").css('display', 'block');
		$(".instruction_point").css('display', 'none');
		$(".right_answer_multiple").css('border', 'none');
		//停止棒條
		clearInterval(counter);
		switch_id = 1;
	} else {
		$('#continue').text("暫停");
		$('#continue').attr('class', 'btn btn-primary btn-lg');
		$('#continue').attr('id', 'pause');
		$('#continue-in-frame').css('display', 'none');
		//切換佈景顏色
		$('.quiz-window').css('background-color', 'none');
		$('.quiz-window').css('opacity', '1');
		$('.quiz-window-2').css('opacity', current_opacity);
		$(".quiz-window-3").css('display', 'none');
		$(".back-to-menu").css('display', 'none');
		counter = setInterval(timer, stage_time);
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
	//check if user has answered 10 qs
	if (current_q_number < 10) {
		current_q_number = current_q_number + 1;
		$('.quiz-window').css('background-image', qs[current_q_number].backgroundImage);
		$(".right_answer_multiple").css('border', 'none');
		$(".right_answer_multiple").css('display', 'none');
		//check if the q is from section 3
		if (qs[current_q_number].backgroundImage.indexOf('_') != -1) {
			$('.quiz-window-2').css('opacity', '1');
			$(".right_answer_multiple").css('display', 'static');
			$('.right_answer_multiple').bind('click', adding_correct_answer);
		} else {
			$(".right_answer").bind('click' , correct_answer);
			$('.quiz-window-2').css('opacity', '0');
		}
		$('.quiz-window-2').css('background-image', qs[current_q_number].rightAnswer);
		$('#pause').attr('disabled', false);
		$(".quiz-window-2").bind('click' , wrong_answer);
		$('.correct').css("display", "none");
		$('.wrong').css("display", "none");
		position_right_answer();
		revealing_speed = qs[current_q_number].revealing_speed;
		counter = setInterval(timer, stage_time);
	} else {
		$('.quiz-window').css('opacity', '0');
		$('.quiz-window-2').css('opacity', '0');
		$('#pause').attr('disabled', true);
		$('.correct').css("display", "none");
		$('.wrong').css("display", "none");
		$(".quiz-window-3").css('display', 'static');
			if (user_current_stage_score > 4) {
				$(".quiz-window-3").css('background-image', 'url("/assets/stage_done.png")');
			} else if (stage_scoring > 4) {
				$(".quiz-window-3").css('background-image', 'url("/assets/stage_done_win.png")');
			} else {
				$(".quiz-window-3").css('background-image', 'url("/assets/stage_done_lose.png")');
			};
		$(".back-to-menu").css('display', 'none');
		$("#back-to-menu-id-2").css('display', 'static');
	};
};
