class Game{
    constructor(){

    }
    getState(){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value", (data)=>{
            gameState = data.val();
        }
        )
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        if (gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount()
            
        }

        Rocket1 = createSprite(500,600);
        Rocket1.addImage(rocket1Img)

        Rocket2 = createSprite(700,600);
        Rocket2.addImage(rocket2Img)

        Rockets = [Rocket1, Rocket2]

    }

    play(){
        
    form.hidden();
    Player.getPlayerInfo()

    //if players are there
    if(allPlayers !== undefined){
    //background(bgImg)
    image(bgImg, 0, -1500, displayWidth-50, displayHeight*3.5)
    var index = 0;

    var x = 150
    var y;

    for(var plr in allPlayers){
        index = index+1

        x = x + 400
        y = displayHeight - allPlayers[plr].distance
        Rockets[index-1].x = x
        Rockets[index-1].y = y
        if(index === player.index){
        fill("blue")
        ellipse(x,y,30, 30)
        camera.position.x = displayWidth/2
        camera.position.y = Rockets[index-1].y
        }

        
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance = player.distance + 15;
        player.update();
        console.log("sprinker")
    }

    }
    drawSprites()
    }
    
  

}