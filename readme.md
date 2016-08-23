# EMC STASH WIDGET

**[ REMINDER: Fork this repo before you begin to work on it! ]**

![Alt text](/assets/img/screenshot.png "Screen shot of the user git stats widget" )

# TRACKS

## [Badass](https://github.com/EMC-UI/emc-stash-widget/tree/badass-start) - Do the front end AND the backend!
## [Frontend Web Developer](https://github.com/EMC-UI/emc-stash-widget/tree/front-end-only-start) - Front-end only steps ( server-side is already done )
## [Backend Plumber](https://github.com/EMC-UI/emc-stash-widget/tree/back-end-only-start) - Back-end only steps ( client-side is already done )

# Badass Steps Example
## 1. BASIC HTML / CSS / JAVASCRIPT
1. create an index.html file, have it display 'hello world' and run it ( double click )
1. add angularjs script into the header of the index.html file ( see bower_components folder )
1. create a javascript file in the js folder ( js/app.js ) and add that also into your header
1. create an angular app and controller in js/app.js
1. display a simple "hello world" from an angularjs scope
1. add a css/main.css file and add it to your index.html header
1. for fun, change the background color of the displayed page

## 2. BASIC NODEJS
1. create a server.js file in the root of the project and run it with 'node server.js'
1. log a message to the terminal
1. add express and start a server
1. add an api endpoint that responds with "hello world"
1. add express static file middleware
1. call "hello world" api in express, and call it from angularjs and display on screen

## 3. DISPLAY USER GIT ACTIVITY DATA
### Option 1 - Use Mongo For Realz
1. npm install git+https://github.com/EMC-UI/tally
1. require it in server.js
1. look at it's api
1. create a REST endpoint for '/userStats' that return data from tally's userStats api
1. call those apis in angularjs and display the data.

### Option 2 - Just use mock data
1. Look at the mock directory
1. require those 2 mock files in your server.js
1. create a REST endpoint for '/userStats' that return the userStats.json mock data.
1. call those REST apis in angularjs and display the mock data.

### Step 3 Continued - Display the data from Option 1 or 2
1. Start to build out a nice display of the userStats data in html / css / angularjs
1. loop over the data from the REST apis with ng-repeat
1. display the user name
1. display the number of projects and list of projects the user has contributed to.
1. BONUS: see if you can display the percentage of all commits this user has contributed.

## 4. DISPLAY PROJECT GIT ACTIVITY DATA
1. Add a project stats display, similar to user stats from step 3.
1. build out the html / css / javascript to display project stats
1. add some way for the user to switch the views between user stats and project stats
1. bonus: cycle using angularjs's $interval between the 2 views automatically.

## BONUS IDEAS
* Display the repo stats.
* Graph the data in some way.




