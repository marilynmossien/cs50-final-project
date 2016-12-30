// global variables
// necessary to use the canvas function
var canvas = document.getElementById('myCanvas');
var draw = canvas.getContext('2d');

// function to set start and end dates of the timeline. executes when user creates a new project
function setDate(){
    
    // set font and font size
    draw.font = '15px Arial';

    // adds start date to first point of timeline
    draw.fillText(document.getElementById('startDate').value, 30, 190);

    // creates a point    
    draw.beginPath();
    draw.arc(30,200,5,0,2*Math.PI);
    draw.stroke();

    // adds end date to final point of timeline
    draw.fillText(document.getElementById('endDate').value, 1020, 190);

    // creates a point
    draw.beginPath();
    draw.arc(1070,200,5,0,2*Math.PI);
    draw.stroke();

    // changes event name (header) to name of user's project
    document.getElementById('title').innerHTML = document.getElementById('projectName').value;
}

// http://www.w3schools.com/jsref/met_document_createelement.asp
// function to append to task-list at bottom of page
function addtotasks(){

    // creates a new paragraph
    var p = document.createElement('P');

    // determines the text to add to that paragraph
    var text = document.createTextNode(document.getElementById('startInput').value + ' through ' + document.getElementById('endInput').value + ':   ' + document.getElementById('nameInput').value + '  -  ' + document.getElementById('actorInput').value);

    // appends the text to the paragraph
    p.appendChild(text);

    // sets the style to centered
    p.style = 'text-align:center';

    // appends paragraph to body
    document.body.appendChild(p);
}

// function to create a task on the timeline
function createTask(){

    // gets values of start and end date of the project
    var s = document.getElementById('startDate').value;
    var e = document.getElementById('endDate').value;

    // # of milliseconds in a day, for later use
    var millidays = 86400000; 

    // creates date objects for start and end dates
    var startdate = new Date(s);
    var enddate = new Date(e); 

    // var to get millisecond length of timeline (only using time (since 1/1/70) removes inherent innacuray of date object in JS) 
    var dist = enddate.getTime() - startdate.getTime();

    // project length in days
    var numofdays = dist/millidays;

    // physical length of a day on the timeline     
    var daydistance = 1040/numofdays;
    
    // gets values of start and end date of a task
    var startin = document.getElementById('startInput').value; 
    var endin = document.getElementById('endInput').value;
    
    // creates date objects for start and end dates of task    
    var begintask = new Date(startin);
    var endtask = new Date(endin);
    
    // millisecond length between start of project and beginning of task
    var millilength = begintask.getTime() - startdate.getTime();

    // millisecond length between start of project and end of task   
    var milliend = endtask.getTime() - startdate.getTime(); 

    // number of days between start of task and start of project 
    var startpoint = millilength/millidays;
    
    // number of days between end of task and start of project
    var endpoint = milliend/millidays; 

    // set font and font size
    draw.font = "15px Arial";

    // add start date to timeline
    draw.fillText(document.getElementById('startInput').value, startpoint*daydistance, 220);
    
    // add start point to timeline    
    draw.beginPath();
    draw.arc(startpoint*daydistance + 30,200,5,0,2*Math.PI);
    draw.stroke();
    
    // add end date to timeline    
    draw.fillText(document.getElementById('endInput').value, endpoint*daydistance, 220);
    
    // add end point to timeline    
    draw.beginPath();
    draw.arc(endpoint*daydistance + 30,200,5,0,2*Math.PI);
    draw.stroke();
    
    // http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    // set height of quadratic curve to a random num in a certain range
    var curveheight = Math.floor(Math.random() * 400); 

    // www.w3schools.com/TAgs/canvas_quadraticcurveto.asp    
    // draw curve between points of task
    draw.beginPath();
    draw.moveTo(startpoint*daydistance + 30,200);
    draw.quadraticCurveTo(startpoint*daydistance + (daydistance*endpoint - daydistance*startpoint)/2, curveheight, endpoint*daydistance + 30, 200);
    draw.stroke();
    
    // add name of task and person assigned to it to timeline on the curve    
    draw.fillText(document.getElementById('nameInput').value, startpoint*daydistance + (daydistance*endpoint - daydistance*startpoint)/2, curveheight);
    draw.fillText(document.getElementById('actorInput').value, startpoint*daydistance + (daydistance*endpoint - daydistance*startpoint)/2, curveheight - 20);

    // call addtotasks function to add to task list 
    addtotasks(); 
}

// function to add basic info about novel to timeline. similar to setDate function
function createNovel(){
    
    // set font 
    draw.font = '15px Arial';

    // adds instigating event to first point of timeline
    draw.fillText(document.getElementById('inst').value, 30, 190);

    // creates the point    
    draw.beginPath();
    draw.arc(30,200,5,0,2*Math.PI);
    draw.stroke();

    // adds resolution to final point of timeline
    draw.fillText(document.getElementById('res').value, 950, 190);

    // creates the point
    draw.beginPath();
    draw.arc(1070,200,5,0,2*Math.PI);
    draw.stroke();

    // changes novel name (header) to name of user's novel
    document.getElementById('title').innerHTML = document.getElementById('novelname').value;
    
    // changes summary to user's given summary 
    document.getElementById('subtitle').innerHTML = document.getElementById('novelsum').value; 
    
    // sets style attributes for summary 
    document.getElementById('subtitle').style = 'font-style: italic; text-align: center'; 
}

// adds major plot info to timeline 
function addPlot(){

    // set font 
    draw.font = "15px Arial";

    // adds rising action to timeline
    draw.fillText(document.getElementById('risingaction').value, 277.5, 220);
    
    // adds corresponding point to timeline    
    draw.beginPath();
    draw.arc(277.5,200,5,0,2*Math.PI);
    draw.stroke();
    
    // adds climax to timeline    
    draw.fillText(document.getElementById('climax').value, 525, 190);
    
    // adds corresponding point to timeline    
    draw.beginPath();
    draw.arc(525,200,5,0,2*Math.PI);
    draw.stroke();
    
    // adds falling action to timeline    
    draw.fillText(document.getElementById('fallingaction').value, 772.5, 220);
    
    // add corresponding point to timeline    
    draw.beginPath();
    draw.arc(772.5,200,5,0,2*Math.PI);
    draw.stroke();
}