class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("pink");

    //write code to show a heading for showing the result of Quiz
    fill("black");
    textSize(27);
    text("RESULT OF THE QUIZ",340,50)

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();


    //write condition to check if contestantInfor is not undefined
    if(allContestants !==undefined){
      var displayAns=240;
      fill("black");
      textSize(20);
      text("NOTE: CONTESTANT WHO ANSWERED CORRECT ARE HIGHLIGHTED IN GREEN ",75,240);

      for(var plr in allContestants){
        var correctans="2";
        if(correctans===allContestants[plr].answer){
          fill("green");
        }
        else{
          fill("red");

        }
        displayAns+=20;
        textSize(15);
        text(allContestants[plr].name + ": "+allContestants[plr].answer,180,displayAns)
      }

    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
