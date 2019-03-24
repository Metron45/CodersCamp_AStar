function Cell(x, y, w,) {
    this.wskSTART;
    this.wskEND;
    this.x = x;
    this.y = y; 
    this.w = w;
    this.start = false;
    if( random(1) < 0.3){
        this.wall = true;
    }else{
        this.wall = false;
    }
    this.end = false;
    this.Clk = false;
    this.zliczacz = 0;
}

Cell.prototype.show = function(){
    stroke(0);
    fill(133);
    cellColor = color(0);
    rect(this.x, this.y, this.w, this.w);

    if(this.wall){
        fill(255,0,0);
    rect(this.x,this.y,this.w,this.w);
    }
    else{
        fill(255);
        rect(this.x, this.y,this.w, this.w);
    }

    if(this.Clk){
        this.wskSTART = [this.x,this.y];
        if(this.start){
            fill(0,0,255);
            rect(this.x,this.y,this.w,this.w);
            this.wskSTART = [this.x,this.y];
        }else{
            fill(0,255,0);
            rect(this.x,this.y,this.w,this.w);
            this.wskEND = [this.x,this.y];
        }
    }

}

Cell.prototype.contains = function(x,y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.click = function() {
    this.Clk = true;
}
