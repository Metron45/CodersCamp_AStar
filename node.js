const Node = class
{
    constructor(x,y,prev)
    {
        this.x = x;
        this.y = y;
        this.status = 'free';

        // referencja do  poprzednego i następnego 
        this.next = null;
        this.prev = prev;
        if(prev!=null) prev.next = this;

        this.neighbours = null;
        this.score = Number.MAX_SAFE_INTEGER;
        this.heuristic_score = Number.MAX_SAFE_INTEGER;
     }
    // zniany stanów 
    start()
    {
        this.status= 'start';
        console.log(`zmiana statusu na: ${this.status}`);
    }
    block()
    {
        this.status= 'block';
        console.log(`zmiana statusu na: ${this.status}`);
    }
    free()
    {
        this.status= 'free';
        console.log(`zmiana statusu na: ${this.status}`);
    }
    end()
    {
        this.status= 'end';
        console.log(`zmiana statusu na: ${this.status}`);
    }
    set_goal_score(score){
        this.score = score;
    }
    set_heuristic_score(score){
        this.heuristic_score = score;
    }
    set_neighbours(neighbours){
        this.neighbours = neighbours;
    }
}

