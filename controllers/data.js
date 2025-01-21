'use strict';

const fsPromises = require('fs').promises;
const model = require('../models/data');
var fs = require("fs");

const getInfo = (req, res) => {
    

    model.getInfo(req.params)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).send(error.message);
        });
}


const getData = (req, res) => {
    

            model.getData(req.params)
                .then((result) => {
                    res.json(result);
                })
                .catch((error) => {
                    res.status(500).send(error.message);
                });
      

}


const setData = (req, res) => {
 
    
    if(Buffer.isBuffer(req.body)){
        const b = Buffer.from(req.body,'utf8'); 
        req.body =  b.toString(); // example
        req.body =  req.body.replace(/[\n\r\t\s]+/g, ' ');
        
        }else{
            req.body = JSON.stringify(req.body);
        }

        console.log(req.body);

        model.setData(req.body).then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).send(error.message);
        });

}






module.exports = { setData, getData, getInfo};
