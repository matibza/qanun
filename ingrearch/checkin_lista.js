

let a = document.getElementById('a1');
let b = document.getElementById('a2');
let c = document.getElementById('a3');
let d = document.getElementById('a4');
let e = document.getElementById('a5');

function blanqueo() {
		for (var i = 1; i <= 25;) {
		  ac = 'a' + i;
		  i++;
			document.getElementById(ac).style.backgroundColor = '#f4f5f7';
		}
} 
function fila() {
		for (var i = 1; i <= 25;) {
		  ac = 'a' + i;
		  i++;
			if (i <= 6){
			document.getElementById(ac).style.backgroundColor = '#f57c00';
			}
		}
} 
function fila2() {
		for (var i = 1; i <= 25;) {
		  ac = 'a' + i;
		  i++;
			if ((i > 6) && (i <= 11)){
			document.getElementById(ac).style.backgroundColor = '#f57c00';
			}
		}
} 
function fila3() {
		for (var i = 1; i <= 25;) {
		  ac = 'a' + i;
		  i++;
			if ((i > 11) && (i <= 16)){
			document.getElementById(ac).style.backgroundColor = '#f57c00';
			}
		}
} 
function fila4() {
		for (var i = 1; i <= 25;) {
		  ac = 'a' + i;
		  i++;
			if ((i > 16) && (i <= 21)){
			document.getElementById(ac).style.backgroundColor = '#f57c00';
			}
		}
} 
function fila5() {
		for (var i = 1; i <= 25;) {
		  ac = 'a' + i;
		  i++;
			if ((i > 21) && (i <= 26)){
			document.getElementById(ac).style.backgroundColor = '#f57c00';
			}
		}
} 


