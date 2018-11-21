/**
 * Author : John Perri Cruz 
 * www.johnperricruz.com 
 *
 * INSTALLATION :
 *
 * 1. install nodejs
 * 2. npm install sharp
 * 3. yarn add sharp (This will install nodejs, please read documentation) https://yarnpkg.com/lang/en/docs/install/#debian-stable
 * 
 * src : https://github.com/lovell/sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

var dir = 'img';     //Change this path
var imgQuality = 40; //Adjust Quality here

fs.readdir(dir, (err, files) => {
  files.forEach(file => {
    var ext = path.extname(file);
    if(ext == '.jpg' || ext == '.png'){ //Change extention if applicable
    	try{
    		sharp(dir+'/'+file).jpeg({ quality: imgQuality }).toBuffer(function(err, buffer) {
			    fs.writeFile(dir+"/"+file, buffer, function(e) {
			    	console.log(file+'................................100%');
			    });
			});
    	}catch(e){
    		console.log(e);
    	}
    }
  });
});

//TO RUN : node optimize-image.js