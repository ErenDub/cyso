let f = 0;
function popup (wid) {
	let popID = document.getElementById (wid);
	let popClose = document.getElementsByClassName ('popup');
	if (f != 0){
		for (var i = 0; i < popClose.length; i++){
            popClose[i].style.display = 'none';
		}
	}

	if (f == 0){
        popID.style.display = 'block';
		f++;
	}
	else{
        popID.style.display = 'none';
		f--;
	}
}
