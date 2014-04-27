//正確答案播放音效&動畫
function correct_answer() {
	show_mouse_position();
	$(".right_answer").unbind('click' , correct_answer);
	$(".quiz-window-2").unbind('click' , wrong_answer);
	$('.correct').css("display", "block");
	clearInterval(counter);
	$('#pause').attr('disabled', true);
	$('.time-bar').animate({width: "445px"}, 800);
};

function wrong_answer() {
	show_mouse_position();
	$(".right_answer").unbind('click' , correct_answer);
	$(".quiz-window-2").unbind('click' , wrong_answer);
	$('.wrong').css("display", "block");
	clearInterval(counter);
	$('#pause').attr('disabled', true);
	$('.time-bar').animate({width: "445px"}, 800);		
};

function time_up() {
	$(".right_answer").unbind('click' , correct_answer);
	$(".quiz-window-2").unbind('click' , wrong_answer);
	$('.wrong').css("display", "block");
	clearInterval(counter);
	$('#pause').attr('disabled', true);
	$('.time-bar').animate({width: "445px"}, 800);		
};

function position_right_answer() {
	$(".right_answer").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + current_q_number[0] );
	$(".right_answer").css('marginTop' , current_q_number[1] );
	$(".right_answer").css('width' , current_q_number[2] );
};

//時間棒條
function timer() {
	$(".time-bar").animate({width: "-=5"}, 0);
	//答案逐漸顯露出來
	$(".quiz-window-2").animate({opacity: "+=.001"}, 0);
	if ($(".time-bar").width() < 1) {
		time_up()
	} else {
		$(".time-bar").css('opacity', 1);
	};
	$('.time-bar').css('background-color', function(){
		return "rgb(0,0,0)";
	});
};

function position_windows() {
	$(".quiz-window-2").css('marginLeft' , $(".quiz-window").css('marginLeft'));
	$(".quiz-window-3").css('marginLeft' , $(".quiz-window").css('marginLeft'));
	$(".correct").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + 110);
	$(".wrong").css('marginLeft' , parseInt($(".quiz-window").css('marginLeft')) + 150);
}

function test() {
	document.write("123");
};

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

function show_mouse_position() {
	var mouse_position = [0,0];
	mouse_position[0] = event.pageX - parseInt($(".quiz-window").css('marginLeft')) - 15;
	mouse_position[1] = event.pageY - 15;
	$(".quiz-window").append("<div class='mouse_position'></div>");
	$('.mouse_position').css('marginLeft', mouse_position[0]);
	$('.mouse_position').css('marginTop', mouse_position[1]);
}