function load(){
	document.getElementById('btn').onclick = () =>{
			let name = document.getElementById('name').value;
			let current = document.getElementById('ThanksDialogue');
			current.className = 'showDialogue'; // creates class
			
			const newElem = document.createElement('h3');// create heading
			const newtxt = document.createTextNode("Thank You for Subscribing " + name);
			newElem.appendChild(newtxt);
			
			const pElem = document.createElement('p');// create <p> element
			pElem.appendChild(document.createTextNode("We'll keep in contact through your email: " + usr.value));
			
			
			const closebtn = document.createElement('button');// create close button
			const btntxt = document.createTextNode("close");
			closebtn.appendChild(btntxt);
			
			// create contents of new window
			current.appendChild(newElem);
			current.appendChild(pElem);
			current.appendChild(closebtn);
			
			
			// show Thank Dialogue Window
			let showWindow = document.getElementsByClassName('mymodal');
			showWindow[0].style.display = 'grid';
			
			// remove Dialogue Window
			closebtn.onclick = () =>{
				showWindow[0].style.display = 'none';
			};
		};
};
window.onload = function(){
	load();
};