class _Node {
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}
class Stack {
    constructor(){
        this.top = null;
    }
    push(data) {
        if(this.top === null){
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop(){
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}
function peek(stack){
    if(!stack.top){
        return;
    }
    else{
        console.log(stack.top.data);
    }
}
function display(stack){
    let counter = stack.top;
     while(counter){
        console.log(counter.data);
        counter = counter.next;
    }
}
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reverse = new Stack();
    for(let i = 0; i < s.length; i++){
        reverse.push(s.charAt(i));        
    }
    for(let j = 0; j< s.length; j++){
        if(s[j] === reverse.pop()) continue;
        else return false;
    }
    return true;
}
function matchParentheses(str){
    let newStack = new Stack();
    let counter = 0;
    for(let i =0; i<str.length; i++){
        if(str[i] === '('){
            newStack.push(str[i]);
            counter++;
        }
        if(str[i] === ')' && !newStack.top){
            return new Error(`Missing an open parenthesis at ${counter}`);
        }
        if(str[i] === ')'){
            newStack.pop();
            counter++;
        }
        if(newStack.top === '('){
            return new Error(`Missing closing parenthesis at ${counter}`);
        }
    }
    return true;

}
function sortStack(stack){
    let holderStack = new Stack();
    if(!stack.top){
        return;
    } 
    for(let i =0; i< stack.length; i++){

    }
}
function main(){
    const starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    starTrek.pop();
    starTrek.pop();
    // console.log(is_palindrome('racecar'));
    // console.log(matchParentheses('((()))')); 

    //peek(starTrek);
    //display(starTrek);
    //console.log(JSON.stringify(starTrek, null, 2));
}
main();