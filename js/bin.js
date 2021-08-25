let f = 0;
function popup (wid) {
	let popID = document.getElementById (wid);
	let popClose = document.getElementsByClassName ('popup');
	if (f != 0){
		for (var i = 0; i < popClose.length; i++){
			popClose[i].style.opacity = '0';
		}
		popID.style.opacity = '1';
	}

	if (f == 0){
		popID.style.opacity = '1';
		f++;
	}
	else{
		popID.style.opacity = '0';
		f--;
	}
}
