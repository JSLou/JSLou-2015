module.exports = function(date, options){
  if (isFuture(date)){
    return options.fn(this);
  }
  return options.inverse(this);
}

function isFuture(date){
  return Date.parse(date) > Date.now();
}
