'use strict'

// const timer = document.getElementById("timer");

// function countdown() {

//   // let d = new Date();
//   // let n = d.toLocaleTimeString();
//   // let newTime = n;
//   // parseInt(newTime);  // не понимаю как выполнить #1
  

//   let newTime = timer.textContent--;
//   if (newTime === 0) {
//     alert("Вы победили в конкурсе");
//     //document.getElementById("img").click() // #2
//     clearInterval(timerId);
//   }
// }
// let timerId = setInterval(countdown, 1000);
//---------------------------------------------------------------------------------------
// let element = document.getElementById('timer');

// let startTimer = 30;

// let hh = 0;
// let mm = 1;
// let ss = 15;

// function changeTimer() {
// 	if (startTimer == 0) {
// 		clearInterval(interval);
// 		alert('Вы победили в конкурсе!');
// 	}
// 	element.textContent = startTimer;
// 	startTimer --;
// }

// function changeHMSTimer () {
// 	if (ss == 0) {

// 		if (mm == 0) {

// 			if(hh == 0) {
// 				clearInterval(interval);
// 				alert('Вы победили в конкурсе!');
// 				document.location.assign('https://www.garant.ru/files/4/7/609374/dogovor_autsorsing.doc');

// 				return;
// 			}

// 			mm = 59;
// 		}

// 		mm--;
// 		ss = 59;
// 	}

// 	ss--;
// 	element.textContent = `
// 	${hh < 10 ? '0' + hh : hh} :
// 	${mm < 10 ? '0' + mm : mm} :
// 	${ss < 10 ? '0' + ss : ss}`;
// }

// let interval
// //interval= setInterval(changeTimer, 100);
// interval = setInterval(changeHMSTimer, 100);
//------------------------------------------------------------------------------
// const output = document.querySelector('#timer');
// let newLocation = "https://netology.ru";
// const interval = 123;

// const start = new Date();

// function countdown(){
//     function addInsignZero(number, digitCount = 2) {
//         let string = `${number}`;
//         if (string.length < digitCount) {
//             string = '0' + addInsignZero(string, digitCount - 1);
//         }
//         return string;
//     }

//     let time = interval - Math.trunc((new Date() - start) / 1000);

//     if (time < 0) {
//         time = 0;
//     }

//     const seconds = time % 60;
//     const minutes = ((time - seconds) / 60) % 60;
//     const hours = Math.trunc(time / 3600);

//     output.textContent = addInsignZero(hours) + ':' + addInsignZero(minutes) + ':' + addInsignZero(seconds);

//     if (time > 0) {
//         setTimeout(countdown, 1000);
//     } else {
//         setTimeout(finish, 0);
//     }
// }

// function finish() {
//     alert('Вы победили в конкурсе!');
//     window.location = newLocation;
// }

// countdown(interval);