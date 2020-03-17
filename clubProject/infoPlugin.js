function infoPlugin(){
	return function(files, metalsmith, done){
		setImmediate(done);
		console.log(JSON.stringify(files,replacer4Buffer,2));
		Object.keys(files).forEach(function(file){
			let data = files[file];
			console.log(data.contents.toString());
		});
	};
	
}

function replacer4Buffer(key,value){
	if(key === 'contents'){
		return this[key].toString();
	}else{
		return value;
	}
}

module.exports = infoPlugin;
