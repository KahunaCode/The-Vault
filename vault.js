'use strict';
module.exports = function() {

var key;
var value;

function setValue(key,value){
  key=key;
  value=value;
  }
function getValue(key){
  if(key){
    return value;
  }
  else{
    return null;
  }
}


return{
  setValue:setValue,
  getValue:getValue
};


};