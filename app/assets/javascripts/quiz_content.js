//Change questions with different stage
if (window.location.pathname == '/stage1') {
	var s1 = { "marginLeft": 390 , "marginTop": -380, "width": 150, "height": 230, "revealing_speed": "0", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/1.jpg")', "rightAnswer": 'none'};
	var s2 = { "marginLeft": 506 , "marginTop": -150, "width": 40, "height": 80, "revealing_speed": "0", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/2.jpg")', "rightAnswer": 'none'};
	var s3 = { "marginLeft": 390 , "marginTop": -180, "width": 80, "height": 80, "revealing_speed": "0", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/3.jpg")', "rightAnswer": 'none'};
	var s4 = { "marginLeft": 420 , "marginTop": -240, "width": 60, "height": 80, "revealing_speed": "0", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/4.jpg")', "rightAnswer": 'none'};
	var s5 = { "marginLeft": 540 , "marginTop": -400, "width": 50, "height": 55, "revealing_speed": "0", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/5.jpg")', "rightAnswer": 'none'};
	var s6 = { "marginLeft": 165 , "marginTop": -348, "width": 110, "height": 348, "revealing_speed": "0", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/6.jpg")', "rightAnswer": 'none'};
	var s7 = { "marginLeft": 340 , "marginTop": -156, "width": 48, "height": 55, "revealing_speed": "0", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/7.jpg")', "rightAnswer": 'none'};
	var s8 = { "marginLeft": 50 , "marginTop": -220, "width": 130, "height": 135, "revealing_speed": "0", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/8.jpg")', "rightAnswer": 'none'};
	var s9 = { "marginLeft": 420 , "marginTop": -312, "width": 42, "height": 55, "revealing_speed": "0", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/9.jpg")', "rightAnswer": 'none'};
	var s10 = { "marginLeft": 300 , "marginTop": -200, "width": 40, "height": 50, "revealing_speed": "0", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/10.jpg")', "rightAnswer": 'none'};
	var qs = [0, s1];
	var arr = [s2, s3, s4, s5, s6, s7, s8, s9, s10];
	for (var a = 0 ; a < 9 ; a++){
		var randomNumber = Math.floor(Math.random() * arr.length);
		var pushToArray = arr[randomNumber];
		arr.splice(randomNumber,1);
		qs.push(pushToArray);
	}
} else if(window.location.pathname == '/stage2') {
	var q1 = { "marginLeft": 520 , "marginTop": -400, "width": 80, "height": 70, "revealing_speed": "+=.0055", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/1-1.jpg")', "rightAnswer": 'url("/assets/1-2.png")'};
	var q2 = { "marginLeft": 70 , "marginTop": -235, "width": 105, "height": 155, "revealing_speed": "+=.004", "correct_left_modifier": 50, "backgroundImage": 'url("/assets/2-1.jpg")', "rightAnswer": 'url("/assets/2-2.png")'};
	var q3 = { "marginLeft": 38 , "marginTop": -265, "width": 160, "height": 155, "revealing_speed": "+=.002", "correct_left_modifier": 100, "backgroundImage": 'url("/assets/3-1.jpg")', "rightAnswer": 'url("/assets/3-2.png")'};
	var q4 = { "marginLeft": 365 , "marginTop": -135, "width": 58, "height": 70, "revealing_speed": "+=.003", "correct_left_modifier": 200, "backgroundImage": 'url("/assets/4-1.jpg")', "rightAnswer": 'url("/assets/4-2.png")'};
	var q5 = { "marginLeft": 195 , "marginTop": -340, "width": 35, "height": 55, "revealing_speed": "+=.005", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/5-1.jpg")', "rightAnswer": 'url("/assets/5-2.png")'};
	var q6 = { "marginLeft": 237 , "marginTop": -18, "width": 15, "height": 18, "revealing_speed": "+=.01", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/6-1.jpg")', "rightAnswer": 'url("/assets/6-2.png")'};
	var q7 = { "marginLeft": 270 , "marginTop": -175, "width": 60, "height": 80, "revealing_speed": "+=.004", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/7-1.jpg")', "rightAnswer": 'url("/assets/7-2.png")'};
	var q8 = { "marginLeft": 118 , "marginTop": -155, "width": 45, "height": 45, "revealing_speed": "+=.004", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/8-1.jpg")', "rightAnswer": 'url("/assets/8-2.png")'};
	var q9 = { "marginLeft": 210 , "marginTop": -225, "width": 130, "height": 125, "revealing_speed": "+=.004", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/9-1.jpg")', "rightAnswer": 'url("/assets/9-2.png")'};
	var q10 = { "marginLeft": 0 , "marginTop": 0, "width": 0, "height": 0, "revealing_speed": "+=.001", "correct_left_modifier": 0, "backgroundImage": 'url("/assets/10-1.jpg")', "rightAnswer": 'url("")'};
	var qs = [0, q1];
	var arr = [q2, q3, q4, q5, q6, q7, q8, q9, q10];
	for (var a = 0 ; a < 9 ; a++){
		var randomNumber = Math.floor(Math.random() * arr.length);
		var pushToArray = arr[randomNumber];
		arr.splice(randomNumber,1);
		qs.push(pushToArray);
	}
};
