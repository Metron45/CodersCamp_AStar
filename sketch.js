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
  var can = createCanvas(401,401);
  var x = ((windowWidth+300) - width) / 2;
  var y = ((windowHeight+150) - height) / 2;
  can.position(x, y+20);
  colInput = createInput();
  colInput.position(x+100,y-130);
  colInput.changed(newText);
  greeting = createElement('h2', 'Podaj liczbe kolumn kwadratowej siatki');
  greeting.position(x, y-200);

  w = floor(width / col);

  grid = genGrid(col,row);
  for (var i = 0; i < col; i++){
    for (var j = 0; j < row; j++){
      grid[i][j] = new Cell(i * w, j * w, w, 1);
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

