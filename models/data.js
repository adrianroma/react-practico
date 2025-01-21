const { reject } = require('promise');
var fs = require("fs");
const fsPromises = require('fs').promises;
const setData = async (body) => {

  fs.writeFile('./store/data.json', body, function () {
    console.log('saved');
  });

}

const getData = async () => {

  let data = fs.readFileSync('./store/data.json');
  data = JSON.parse(data);
  return data;

}

const getInfo = async () => {

  let data = fs.readFileSync('./store/info.json');
  data = JSON.parse(data);
  return data;

}

module.exports = { getData,setData, getInfo};