let displayOrNot = true;
let varbtn = document.getElementById('navbtn');
let myLinks = document.getElementsByClassName('displayNav');

varbtn.onclick=()=>{
	
	if(displayOrNot){
		displayOrNot = false;
		myLinks[0].style.display = 'none';
	}
	else if(!displayOrNot){
		displayOrNot = true;
		myLinks[0].style.display = 'grid';

	}
	
}
