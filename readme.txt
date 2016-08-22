EMC STASH WIDGET - FRONT-END TRACK
===============================

Step 1 - A basic html/css/angularjs app
---
1. BASIC HTML / CSS / JAVASCRIPT
    a. create an index.html file, have it display 'hello world' and run it ( double click )
    b. add angularjs script into the header of the index.html file ( see bower_components folder )
    c. create a javascript file in the js folder ( js/app.js ) and add that also into your header
    c. create an angular app and controller in js/app.js
    d. display a simple "hello world" from an angularjs scope
    e. add a css/main.css file and add it to your index.html header
    f. for fun, change the background color of the displayed page

Step 2 - start your web server
---
2. BASIC NODEJS
    a. Run a web server to serve your html / css / javascript files
    b. open your terminal and navigate to the root of this project
    c. type 'node server.js'
    d. open your favorite browser and enter http://localhost:3000 in the address bar
    e. enter http://localhost:3000/hello in the address bar and you should see 'hello world!' displayed
    f. enter http://localhost:3000/stats/userStats in the address bar and you should see data returned.
    g. look at the mock/userstats.json file to see where the data is coming from.
    g. open up server.js and to take a closer look at the server side script that is your web server ( it won't bite you )


// Badass Step 3 - get that data into your html
---
3a. call the rest apis you checked out in step 2 from angularjs.
    a. use angular's $http service to call the '/hello' REST api
    b. use angular's $http service to call the 'stats/userStats' REST api
    c. put the returned data from the 'stats/userStats' REST api on your angular $scope and display in your index.html page.

3b. Start to build out a nice display of the userStats data in html / css / angularjs
    a. loop over the data from the REST apis with ng-repeat
    b. display the user name
    c. display the number of projects and list of projects the user has contributed to.
    d. BONUS: see if you can display the percentage of all commits this user has contributed.





