class _Node {
    constructor(value){
        this.value = value,
        this.next = null,
        this.prev = null;
    }
}
class Queue{
    conctructor(){
        this.first = null;
        this.last = null;
    }
    enqueue(data){
        //create node w/ data you want to add to the queue
        const node = new _Node(data);
        //if queue if empty, make the node the first node
        if(!this.first){
            this.first = node;
        }
        // if theres something on the queue, take the last node and link it to the new node
        if(this.last){
            node.next = this.last;
            this.last.prev = node;
        }
        //make new node the last item in the queue
        this.last = node;
    }
    dequeue(){
        if(!this.first){
            return;
        }
        //make the first item on the queue to be the 
        // item that is next on the line 
        // the item after the current first item
        const node = this.first;
        this.first = node.prev;
        //if its the last node set it to null
        if(node === this.last){
            this.last = null;
        }
        return node.value;
    }
}