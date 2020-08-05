/**
 * js의 주석은 이렇게 생김 
 */

//ex18 문제  반올림 : point(123.456,2 ) =123.46 
//올림 : pointUp(123.456,2 ) =123.46 
//반림 : pointDown(123.456,2 ) =123.45

//소수 2자리, 소수 1자리, 정수, 일의자리, 십의자리 
	function point(number, digit) {
		return Math.round(number * Math.pow(10, digit)) / Math.pow(10, digit);
	}
	function pointUp(number, digit) {
		return Math.ceil(number * Math.pow(10, digit)) / Math.pow(10, digit);
	}
	function pointDown(number, digit) {
		return Math.floor(number * Math.pow(10, digit)) / Math.pow(10, digit);
	}
	
	
//ex19 문제. 정수를 정해진 자리수로 맞춰서 사용하기
// fillZero(number, 2) = 00, 01, 02, ...
// fillZero(number, 3) = 000, 001, 002, ...

	function fillZero(number, digit){
		var result = String(number);  //number +''; 
		while(result.length != digit) {
			result = '0' +result; 
		}
		return result;
	}
	
//ex20 문제, 날짜와 시간을 다음과 같은 형식으로 리턴하는 to12Times함수
//2020-05-08 금요일 오전 11:30 
	
	function to12Times(date){
		var year = date.getFullYear(); 
		var month = date.getMonth() + 1; 
		var day = date.getDate(); 
		var weekname = ['일','월','화','수','목','금','토'][date.getDay()];
		var hour =date.getHours();
		var ampm = hour<12 ? 'am': 'pm'; 
		var minute = date.getMinutes(); 
		
		return year +'-' + 
			fillZero(month,2) +'-' + fillZero(day,2) +' ' 
			+ weekname + '요일 ' +hour +':'+minute+ampm ;
		
	} 
	// 타이머 만들기 2020년 05월 08일 12시 15분 09초 
	 	function watch(){
	 		setTimeout(function(){
	 			var date= new Date(); 
	 			var year = date.getFullYear(); 
	 			var month = date.getMonth() +1; 
	 			var day = date.getDate(); 
	 			var hour = date.getHours();
	 			var min = date.getMinutes(); 
	 			var sec =date.getSeconds();
	 			
	 			var result = year+ '년 ' + fillZero(month,2) +'월 '+ 
	 			fillZero(day,2)+'일 '+hour+'시 '+ 
	 			fillZero(min,2)+ '분 ' +fillZero(sec,2) +'초 입니다 '; 	
	 		document.getElementById('clock').innerHTML = result; 
	 		watch();  
	 		},1000);
	};

	
	//ex22 d-day 만들기 
	function countDown(){
		setTimeout(function(){
			var d_day = new Date(2020,11,3); 
			var today = new Date(); 
			var date= new Date(); 
			
			var restTime = d_day.getTime()- today.getTime(); 
			restTime = parseInt(restTime / 1000);
			
			if(restTime <=0){
				document.getElementById('d-day').innerHTML ='D-day';
				return; 
			}
			var sec = restTime % 60;
			var min = parseInt(restTime / 60) % 60;
			var hour = parseInt(restTime / 3600) % 24;
			var day = parseInt(restTime / 3600 /24);
			
			//결과 
			var result = ''; 
			if(day != 0){
				result += day +'일 ';
			}
			result += hour+'시 '+ min + '분 ' +sec +'초 남음!' ;
			document.getElementById('d-day').innerHTML = result;
			//1일 내는 빨간색으로 표시 	
			if(day == 0){
				document.getElementById('d-day').style.color ='red';
			}
			countDown();  //재귀호출 
		}, 1000);
	}
	
	
	
	
	
	
	
	