let displayOrNot = true;
let mybtn = document.getElementById('navbtn');
let myLinks = document.getElementsByClassName('displayNav');

mybtn.onclick=()=>{
	
	if(displayOrNot){
		displayOrNot = false;
		myLinks[0].style.display = 'none';
	}
	else if(!displayOrNot){
		displayOrNot = true;
		myLinks[0].style.display = 'grid';

	}
	
}