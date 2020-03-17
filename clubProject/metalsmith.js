const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const plug = require('./infoPlugin.js');
var layouts = require('metalsmith-layouts');
console.log("Starting Processing!");
Metalsmith(__dirname)
	.metadata({
		author: "Emmanuel",
		myClass: "CS351",
	})
	.source('./src')
	.destination('./build')
	.clean(true)
	.ignore(["*.png","*.jpg","*!.js","*.dat1"])
	
	.use(plug())
	.use(markdown())
	.use(plug())
	.use(layouts({
		default: "base.njk",
		directory: "layouts",
		pattern: ["Patterns for what to put through the layout and what not to", 
					"*.html", "!*.txt", "!*.css"]
	}))
	.build(function(err,files){
		if(err){ 
			throw err;
		}
		else{
			console.log(`Finished Processing: ${Object.keys(files)}`);
		}
	});
