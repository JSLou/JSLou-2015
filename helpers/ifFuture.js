module.exports = function(date, options){
  if (isFuture(date)){
    return options.fn(this);
  }
  return options.inverse(this);
}

function isFuture(date){
  var nowMinusOneDay = Date.now() - 86400000
  return Date.parse(date) > nowMinusOneDay;
}
