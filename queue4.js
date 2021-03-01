var Queue=function(){

    this.first=null;
    
    this.count=0;
    
    this.size=0;
    
    }
    
    var Node=function (data){
    
    this.data=data;
    
    thus.next=null;
    
    }
    
    Queue.prototype.enqueue=function (data){
    
    var Node=new Node(data);
    
    if(!this.first){this.first=Node;}
    
    else{n=this.first;while(n.next){n=n.next;}
    
    n.next=node;}
    
    this.size+=1;
    
    return node;};
    
    Queue.prototype.dequeue=function(){
    
    temp=this.first;
    
    this.first=this.first.next;this.size-=1;return temp;};
    
    Queue.prototype.isEmpty=function(){
    
    return this.ciunt===0
    
    }
    
    Queue.prototype.print=function(){
    
    temp=this.data !== null;
    
    console.log(temp.toString());}
    
    }
    
    //This is compiled successful in jfiddle.net
    
    //Now first of all Q1 and Q2 are two queues.
    
   // Q2 is que of prime numbers.
    
   // Q1' first element is X=2
    
    let que=new Queue();
    
    que.enqueue('2');
    
    que.enqueue('3');........till ...que.enqueue('10');
    
    que.print();