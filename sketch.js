function genGrid(col,row) {
  var arr = new Array(col);
  for (var i = 0; i < arr.length;i++){
    arr[i] = new Array(row);
  }
  return arr;
}

function Cell() {
  this.num = true;
}

var grid;
var col = 20;
var row = 20;
var w = 40;
var rowInput,colInput,greeting;
var start;
var wall;
var end;
var openSet = [];
var closedSet = [];

var buttonStart = document.getElementById("start");
var buttonEnd = document.getElementById("end");
var buttonWall = document.getElementById("wall");

function setup() {
  //width = height = 401
  createCanvas(601,601);
  colInput = createInput();
  colInput.position(100,70);
  colInput.changed(newText);
  greeting = createElement('h2', 'wprowadź wymiary siatki');
  greeting.position(50, 20);

  w = floor(width / col);

  grid = genGrid(col,row);
  for (var i = 0; i < col; i++){
    for (var j = 0; j < row; j++){
      grid[i][j] = new Cell(i * w, j * w, w);
    }
  }
}



function newText(){
  col = parseInt(colInput.value());
  row = parseInt(colInput.value());

  w = width/col;

  grid = genGrid(col,row);
  for (var i = 0; i < col; i++){
    for (var j = 0; j < row; j++){
      grid[i][j] = new Cell(i * w, j * w, w);
    }
  }
}


function mousePressed() {
  for (var i = 0; i < col; i++){
    for (var j = 0; j < row; j++){
      if(grid[i][j].contains(mouseX,mouseY)){
        grid[i][j].click();
      }
    }
  }
}


function draw() {
  background(255);
  for (var i = 0; i < col; i++){
    for (var j = 0; j < row; j++){
      grid[i][j].show();
    }
  }
}

