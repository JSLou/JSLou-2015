# JSLou website 2015

The official website for Louisville Kentucky's JavaScript community, established September 2013.
View the live site here: [JSLou.org](http://jslou.org).

## Before you start:

1. Read the section on 'How to contribute' to this project
2. Install [node.js](http://nodejs.org/)
3. Clone the project onto your local machine `git clone git@github.com:JSLou/JSLou-2015.git`

## How to contribute

* Check the [github issues](https://github.com/JSLou/JSLou-2015/issues) to see if any specific help is needed, there might be something that fits your skills!
* Other pull requests are always welcome, especially for errors or tyops you discover, adding cool new features to help the community, or adding future events to events.json (hint hint - help!).


## Adding an event:

* Events live in `data/events.json`, and they have several properties that are used by the event templates on the homepage and past events pages.
Every time you build the site a Handlebars helper will use the provided dates of the events to sort them into 3 categories, 'next event', 'upcoming events', and 'past events'.
* Copy the following event template JSON, add it to the top of the JSON array in `data/events.json`

  ### Event Template JSON
  ```
  {
    "firstName": "",
    "lastName": "",
    "day": "Wednesday",
    "date": "",
    "time": "7pm",
    "directions": "https://www.google.com/maps?f=q&hl=en&q=612+W+Washington+St.,+Louisville,+KY+40202,+KY,+us",
    "location": "Warp Zone Louisville",
    "meetup": "",
    "photo": "",
    "photoAlt": "",
    "links": [{
      "type": "",
      "url": ""
    }, {
      "type": "",
      "url": ""
    }, {
      "type": "",
      "url": ""
    }, {
      "type": "",
      "url": ""
    }],
    "title": "",
    "description": "",
    "attendance": 0,
    "rsvps": 0
  },
  ```
* after the event has been added try building using the process below.


## Building the site

This uses the [unfold static site generator](https://github.com/ericlathrop/unfold).
  * Run `npm install` (or `npm i` for short) from the root of this project to download all of the project's dependencies.
  * Run `npm run build` from the root of this project to tell unfold and handlebars to compile the html pages. Unfold uses the JSON data and template html files to create static html pages to serve as the final website.


## To view your changes locally

 1. Run `npm install -g node-static` (This is just a lightweight static file server.)
 2. Run `static dest` from the root directory of this project
 3. Point your web browser at [http://localhost:8080](http://localhost:8080)


