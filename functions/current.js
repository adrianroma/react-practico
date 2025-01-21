var moment = require('moment');
const system = require('../config/systemConfig');

function getTest() {

    return {'response':'success'};
}

function getDates(){


    var datetime = moment().format('YYYY-MM-DDThh:mm:ss.ms');
  
    var futuredatetime = moment().add(30, 'days').format('YYYY-MM-DDThh:mm:ss.ms');
  
     return {'from':datetime,'to':futuredatetime}
  
  
  }


  function getDateNow(){


    var datetime = moment().format('YYYY-MM-DDThh:mm:ss.ms');
  
  
     return {'now':datetime}
  
  
  }

  function checkHeaders(headers){

    try{
    if(1==1)
     {
        console.log(headers);
        return true;
     }else{
        return false;
     }
    } catch( error){
        console.log(err);
        return false;
    }
     

}


module.exports = { getTest, getDates, getDateNow, checkHeaders}