class Player{
 constructor(x, y, w, h){
     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;
     this.floor =y;
     this.maxJump = 0;
     this.wasItUp =false
     this.speedY = 0;
     this.ctx = gamePlane.context;
     this.ctx.fillStyle = "red";
     this.ctx.fillRect(this.x, this.y, this.w, this.h);

 }
 update(){
     //jeśli kolejne podniesienie nie wyjdzie za this.maxJump
   if(this.y - this.speedY >= this.maxJump && !this.wasItUp){
       //jeśli jest miejsce nad kwadratem
       //i jeśli jeszcze nie byłem na szczycie
   this.y -= this.speedY
   
}else{
    //zaznaczam,że osiągnąłem szczyt
    this.wasItUp = true;
    
    if(this.floor <= this.y){
    // jeśli wróciłem na ziemię
    console.log(this.floor , this.y)
    this.wasItUp = false;
    this.speedY = 0;
}else{
    //jeśłi byłem na górze, ale jeszcze nie jestem na dole
    this.y += this.speedY;
}
}
   this.ctx.fillStyle = "red";
   this.ctx.fillRect(this.x, this.y, this.w, this.h);

 }
 changePos(key){
     //if(key == 'ArrowUp'){
         if(['ArrowUp',''].includes(key)){
             this.speedY = 7;

     //console.log("CHECKING" + key)
     
     }
     
 }

}
class Rock{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = gamePlane.context;
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.w, this,h);
    }
    update(){
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        this.x -= 5;
    }
}