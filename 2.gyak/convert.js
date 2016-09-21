const fs = require('fs'); //filesystem library
const jimp = require('jimp');
const DataStore = require('nedb');

const db = new DataStore({
    filename: 'images.nedb',
    autoload: true,
});

db.remove({}, {multi: true}, function(err, numremoved){
    if(err) throw err;
    fs.readdir('images/', function(err, files){ //konyvtarolvasas
        if(err) throw err;
        files.forEach(function (fileName){
            //console.log(fileName);
            jimp.read(`images/${fileName}`, function(err, image){
                if(err) throw err;
                //const width = image.bitmap.width;
                //const height = image.bitmap.height;
                const {width, height} = image.bitmap; //ugyanaz mint a felette levo ket sor
                //console.log(width, height);
                db.insert({fileName, width, height}, function(err, insertedImage){
                    if(err) throw err;
                    image.resize(100, jimp.AUTO); //keparany megtartasa: AUTO
                    image.write(`converted/${insertedImage._id}.png`, function(err){
                        if(err) throw err;
                        console.log(fileName, 'completed converting');
                    });
                });
            });
        });
        consolde.log('Vege');
    });
});