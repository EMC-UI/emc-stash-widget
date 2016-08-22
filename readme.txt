EMC STASH WIDGET - BADASS TRACK
===============================

Badass Step 1 - A basic html/css/angularjs app
---
1. BASIC HTML / CSS / JAVASCRIPT
    a. create an index.html file, have it display 'hello world' and run it ( double click )
    b. add angularjs script into the header of the index.html file ( see bower_components folder )
    c. create a javascript file in the js folder ( js/app.js ) and add that also into your header
    c. create an angular app and controller in js/app.js
    d. display a simple "hello world" from an angularjs scope
    e. add a css/main.css file and add it to your index.html header
    f. for fun, change the background color of the displayed page

Badass Step 2 - Let's create a server
---
2. BASIC NODEJS
    a. create a server.js file in the root of the project and run it with 'node server.js'
    a. log a message to the terminal
    b. add express and start a server
    c. add an api endpoint that responds with "hello world"
    d. add express static file middleware
    e. call "hello world" api in express, and call it from angularjs and display on screen


// Badass Step 3 has 2 options
---
// Option 1 - Use Mongo For Realz
3a. npm install git+https://github.com/EMC-UI/tally
    a. require it in server.js
    b. look at it's api
    c. create a REST endpoint for '/userStats' that return data from tally's userStats api
    d. call those apis in angularjs and display the data.

// Option 2 - Just use mock data
3b. Look at the mock directory
    a. require those 2 mock files in your server.js
    b. create a REST endpoint for '/userStats' that return the userStats.json mock data.
    c. call those REST apis in angularjs and display the mock data.

3c. Start to build out a nice display of the userStats data in html / css / angularjs
    a. loop over the data from the REST apis with ng-repeat
    b. display the user name
    c. display the number of projects and list of projects the user has contributed to.
    d. BONUS: see if you can display the percentage of all commits this user has contributed.

// Badass Step 4 FINISHED
---
4. Add a project stats display, similar to user stats from step 3.
    a. build out the html / css / javascript to display project stats
    b. add some way for the user to switch the views between user stats and project stats
    c. bonus: cycle using angularjs's $interval between the 2 views automatically.

// BONUS IDEAS
---
1. Display the repo stats.
2. Graph the data in some way.




