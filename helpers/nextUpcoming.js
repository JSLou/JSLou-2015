
module.exports = function(events, options){
  var futureEvents = futureOnly(events);

  var sortedEvents = futureEvents.slice(0).sort( function(a,b){
    return sorted = Date.parse(a.date) - Date.parse(b.date);
  });
  console.log(sortedEvents);
  return options.fn(sortedEvents);
}

function futureOnly(events){
  var newArray = [];
  for (var i=0; i < events.length; i++){
    var nowMinusOneDay = Date.now() - 86400000;
    if(Date.parse(events[i].date) > nowMinusOneDay){
      //console.log(Date.parse(events[i].date) +" is more than " + nowMinusOneDay + " KEEP IT");
      newArray.push(events[i]);
    }
    else{
      //console.log(Date.parse(events[i].date) +" is less than " + nowMinusOneDay + " SKIP IT");
    }
  }

  return newArray;
}
