module.exports = function(events, options){
  var futureEvents = futureOnly(events);

  var sortedEvents = futureEvents.slice(0).sort( function(a,b){
    return sorted = Date.parse(a.date) - Date.parse(b.date);
  });
  return options.fn(sortedEvents);
}

function futureOnly(events){
  var newArray = [];
  for (var i=0; i < events.length; i++){
    var nowMinusOneDay = Date.now() - 86400000;
    if(Date.parse(events[i].date) > nowMinusOneDay){
      newArray.push(events[i]);
    }
  }

  return newArray;
}
