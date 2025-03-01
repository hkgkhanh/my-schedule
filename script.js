var w = 1000;
var h = 600;
var table_start_pos = 70;
var table_end_pos = h - 30;
var time_display_offset = 70;

var start_of_the_day = 60 * 6 + 30;
var end_of_the_day = 60 * 23 + 30;

var weekDays = [null, "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function setup() {
    createCanvas(w, h);
}

function draw() {
    background(225);
    drawUI();
}

function addTask() {
    
}