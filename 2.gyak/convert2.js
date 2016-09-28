//hibas az egesz kod???

"use strict";

const fs = require('fs'); //filesystem library
const jimp = require('jimp');
const DataStore = require('nedb-promise');

const path = 'images/';
const db = new DataStore({
    filename: 'images.nedb',
    autoload: true,
});

function readdir(path){
    return new Promise(function(resolve, reject){
        fs.readdir(path, function(err, files){
            if(err) reject(err);
            else resolve(files);
        });
    });
}

db.remove({}, {multi: true})
    .then(numRemoved => {
        return readdir(path);
    })
    .then(files => {
        return Promise.all(files.map(fileName => processFile(fileName)))
    })
    .then(() => {
        console.log('Vege');
    });

function processFile(fileName){
    return jimp.read(path + fileName)
        .then(image => {
            const {width, height} = image.bitmap; //ugyanaz mint a felette levo ket sor
            return db.insert({fileName, width, height})
        })
        .then(insertedImage => {
            image.resize(100, jimp.AUTO); //keparany megtartasa: AUTO
                image.write(`converted/${insertedImage._id}.png`);
        })
        .then(() => {
            console.log(filaNeame, "completed converting");
        })
}