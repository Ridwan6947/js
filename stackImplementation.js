class stack{
    constructor(){
        this.items = [];
    }
    
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length === 0){
            return "stack is empty";
        }
        return this.items.pop();
    }
    peek(){
        if(this.items.length === 0){
            return "stack is empty";
        }
        return this.items[this.items.length - 1];
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length === 0;
    }
}


