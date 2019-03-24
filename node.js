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

}

