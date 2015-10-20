
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
    if(Date.parse(events[i].date) > Date.now()){
      console.log(Date.parse(events[i].date) +" is more than " + Date.now() + " KEEP IT");
      newArray.push(events[i]);
    }
    else{
      console.log(Date.parse(events[i].date) +" is less than " + Date.now() + " SKIP IT");
    }
  }

  return newArray;
}
