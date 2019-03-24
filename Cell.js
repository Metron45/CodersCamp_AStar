var START =[]
var END =[];
var wall1D = [];
var WALL=[]


function Cell(x, y, w,prev) {
    this.x = x;
    this.y = y; 
    this.w = w;

    // this.status = 'free';
    // this.next = null;
    // this.prev = prev;
    // if(prev!=null) prev.next = this;

    this.start = false;
    this.wall = false;
    this.end = false;
    this.Clk = false;
}

Cell.prototype.show = function(){
    stroke(25,18,38);
    strokeWeight(4);
    fill(255);
    rect(this.x, this.y, this.w, this.w);

    if(this.Clk){
        if(this.start){
            fill(239,183,4);
            rect(this.x,this.y,this.w,this.w);
        }
        else if(this.wall){
            fill(242,53,91);
            rect(this.x,this.y,this.w,this.w);
        }
        else{
            fill(2,166,148)
            rect(this.x, this.y,this.w, this.w);
        }
    }

}

Cell.prototype.contains = function(x,y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}
// zaznaczanie poczatka i konca grida
//START to komorka startowa algorytmu
//END to komorka koncowa algorytmu
Cell.prototype.click = function(i,j,number) {
    this.Clk = true;
    console.log(i + " " + j + " " + number);
    if(number == 0){
        this.start = true;
        START = [i,j];
        console.log("START: " + START);
    }
    else if(number > 0  && number < 6){
        this.wall = true;
        wall1D = [i,j];
        console.log("PRZESZKODA: " + wall1D);
    }else if(number > 5 && number < 7){
        this.end = true;
        END = [i,j];
        console.log("END: " + END);
    }
    else{

        alert("No more cells to choose!");
        this.end = false;
    }
}
