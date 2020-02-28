function loadEvents(){
	
	const tableElem = document.getElementById('MyTable');
	const tableRow = tableElem.getElementsByTagName('tbody');
	events.forEach(function(item,current){
		const newRow = document.createElement('tr');
		const nameElem = document.createElement('td');
		const elemText = document.createTextNode(item.name);
		nameElem.appendChild(elemText);
		newRow.appendChild(nameElem);
		
		const locInfo = document.createElement('td');
		const locList = document.createElement('ul');
		item["dates"].forEach(function(temp,index){// second index of current item stores location
			const newLoc = document.createElement('li');
			const locText = document.createTextNode(temp);
			newLoc.appendChild(locText);
			locList.appendChild(newLoc);
		});
		locInfo.appendChild(locList);
		newRow.appendChild(locInfo);
		
		const eventTime = document.createElement('td');
		const timeText = document.createTextNode(item.time);
		eventTime.appendChild(timeText);
		newRow.appendChild(eventTime);
		
		tableRow[0].appendChild(newRow);
	});
	
};

window.onload = function(){
	loadEvents();
};