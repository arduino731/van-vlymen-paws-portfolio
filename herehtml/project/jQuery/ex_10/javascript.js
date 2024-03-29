$(document).ready(function(){

	pressBtn('#shaker');

	$('#shaker').on('click', function(){
		$('h1').text('Shake, shake, shake...');
		$('h1').addClass('shake');

		setTimeout(function(){
			var roll1 = makeDieFace('#die_1');
			var roll2 = makeDieFace('#die_2');

			$('h1').removeClass('shake');

			if (roll1+roll2 == 2){
				$('h1').text('Snake eyes!');
			} else {
				$('h1').text(roll1 + roll2);				
			}

		}, 1000);
	})

	function pressBtn(button) {
		$('#shaker').on('mousedown', function() {
			$(this).removeClass('btn_up');
			$(this).addClass('btn_down');
			$(this).addClass('btn_down2');
		});
		$('#shaker').on('mouseup', function() {
			$(this).removeClass('btn_down');
			$(this).addClass('btn_up');
		});
	}

	function makeDieFace(diceId){
		var roll = Math.floor(Math.random() * 6 + 1);
		var all = diceId + ' .pip';
		var pip_1 = diceId + '_pip_1';
		var pip_2 = diceId + '_pip_2';
		var pip_3 = diceId + '_pip_3';
		var pip_4 = diceId + '_pip_4';
		var pip_5 = diceId + '_pip_5';
		var pip_6 = diceId + '_pip_6';
		var pip_7 = diceId + '_pip_7';
		
		if (roll == 1){
			$(all).hide();
			$(pip_4).show();
		}
		if (roll == 2){
			$(all).hide();
			$(pip_1 + ', ' + pip_7).show();
		}
		if (roll == 3){
			$(all).hide();
			$(pip_1 + ', ' + pip_4 + ', ' + pip_7).show();
		}
		if (roll == 4){
			$(all).show();
			$(pip_2 + ', ' + pip_4 + ', ' + pip_6).hide();
		}
		if (roll == 5){
			$(all).show();
			$(pip_2 + ', ' + pip_6).hide();
		}
		if (roll == 6){
			$(all).show();
			$(pip_4).hide();
		}

		return roll;
	}


});