function Cell(x, y, w, wsk) {
    this.x = x;
    this.y = y; 
    this.w = w;
    this.start = true;
    this.wall = false;
    this.end = false;
    this.Clk = false;
}

Cell.prototype.show = function(){
    stroke(0);
    fill(133);
    cellColor = color(0);
    rect(this.x, this.y, this.w, this.w);
    if (this.Clk){
        if(this.start){
            fill(123,100,87);
            ellipse(this.x+this.w*0.5, this.y+this.w*0.5,this.w * 0.5);
        }
        else if(this.wall){
            fill(100,210,45);
            rect(this.x,this.y,this.w,this.w);
        }
        else if(this.end){
            fill(180,80,87);
            ellipse(this.x+this.w*0.5, this.y+this.w*0.5,this.w * 0.5);
        }
    }
}

Cell.prototype.contains = function(x,y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.do = function(wsk) {
    this.Clk = true;

}
