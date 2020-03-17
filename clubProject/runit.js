const nunjucks = require('nunjucks');
const fs = require('fs');  // The file system module

//list of files
let files = ["index.html", "about.html", "login.html", "activities.html","members.html"]

let srcDir ="./src/";
let outDir="./build/";

// Tells nunjucks where to look for templates and set any options
nunjucks.configure('views', { autoescape: false });

for (let x of files){
	let contents = fs.readFileSync(srcDir + x);
	let outString = nunjucks.render('base.njk', {mainContent: contents});
	fs.writeFileSync(outDir + x, outString);
	console.log("Wrote file" + x);
}
