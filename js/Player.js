class Player{
constructor(){}

getCount(){
var playerCountRef=database.ref("playerCount")
playerCountRef.on("value",(data)=>{
    playerCount=data.val();
})

}

upadateCount(count){
database.ref("/").update({
 playerCount:count  
})


}
}