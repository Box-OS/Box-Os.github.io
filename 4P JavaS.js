//Reload the page (learned from W3School)
function rematch() {location.reload();}


//Constant variables
let bluePosition = 0;
let redPosition = 0;
let greenPosition = 0;
let yellowPosition = 0;

let playerTurn = 0;
let textTurn = 1;

let playersWon = 0;

let blueHasWon = false;
let redHasWon = false;
let greenHasWon = false;
let yellowHasWon = false;




function diceRollProcess() {

  //Rank Texts calculation
  const btnRoll = document.getElementById('btnRoll')

  const blueRank = document.getElementById("blueRank");
  const redRank = document.getElementById("redRank");
  const greenRank = document.getElementById("greenRank");
  const yellowRank = document.getElementById("yellowRank");

  const blueRankSuffix = document.getElementById("blueRankSuffix");
  const redRankSuffix = document.getElementById("redRankSuffix");
  const greenRankSuffix = document.getElementById("greenRankSuffix");
  const yellowRankSuffix = document.getElementById("yellowRankSuffix");


  if (playersWon == 3) {
    if (blueHasWon == false) {
      blueRank.innerHTML = "4";
      blueRankSuffix.innerHTML = "th";
      blueRank.style.display = "block";
      blueRankSuffix.style.display = "block";
    }
    if (redHasWon == false) {
      redRank.innerHTML = "4";
      redRankSuffix.innerHTML = "th";
      redRank.style.display = "block";
      redRankSuffix.style.display = "block";
    }
    if (greenHasWon == false) {
      greenRank.innerHTML = "4";
      greenRankSuffix.innerHTML = "th";
      greenRank.style.display = "block";
      greenRankSuffix.style.display = "block";
    }
    if (yellowHasWon == false) {
      yellowRank.innerHTML = "4";
      yellowRankSuffix.innerHTML = "th";
      yellowRank.style.display = "block";
      yellowRankSuffix.style.display = "block";
    }
    btnRoll.disabled = true
    const gg = document.getElementById("finalText");
    gg.style.display = "block";
    playersWon++
    return;
  }

  //Player 1
  if (bluePosition == 100) {

    if (playersWon == 0) {
      blueRank.innerHTML = "1";
      blueRankSuffix.innerHTML = "st";
    }
    else if (playersWon == 1) {
      blueRank.innerHTML = "2";
      blueRankSuffix.innerHTML = "nd";
    }
    else if (playersWon == 2) {
      blueRank.innerHTML = "3";
      blueRankSuffix.innerHTML = "rd";
    }
    blueRank.style.display = "block";
    blueRankSuffix.style.display = "block";
    bluePosition = 101
    blueHasWon = true;
    playersWon++
  }

  //Player 2
  if (redPosition == 100) {

    if (playersWon == 0) {
      redRank.innerHTML = "1";
      redRankSuffix.innerHTML = "st";
    }
    else if (playersWon == 1) {
      redRank.innerHTML = "2";
      redRankSuffix.innerHTML = "nd";
    }
    else if (playersWon == 2) {
      redRank.innerHTML = "3";
      redRankSuffix.innerHTML = "rd";
    }
    redRank.style.display = "block";
    redRankSuffix.style.display = "block";
    redPosition = 101
    redHasWon = true;
    playersWon++
  }

  //Player 3
  if (greenPosition == 100) {

    if (playersWon == 0) {
      greenRank.innerHTML = "1";
      greenRankSuffix.innerHTML = "st";
    }
    else if (playersWon == 1) {
      greenRank.innerHTML = "2";
      greenRankSuffix.innerHTML = "nd";
    }
    else if (playersWon == 2) {
      greenRank.innerHTML = "3";
      greenRankSuffix.innerHTML = "rd";
    }
    greenRank.style.display = "block";
    greenRankSuffix.style.display = "block";
    greenPosition = 101
    greenHasWon = true;
    playersWon++
  }

  //Player 4
  if (yellowPosition == 100) {

    if (playersWon == 0) {
      yellowRank.innerHTML = "1";
      yellowRankSuffix.innerHTML = "st";
    }
    else if (playersWon == 1) {
      yellowRank.innerHTML = "2";
      yellowRankSuffix.innerHTML = "nd";
    }
    else if (playersWon == 2) {
      yellowRank.innerHTML = "3";
      yellowRankSuffix.innerHTML = "rd";
    }
    yellowRank.style.display = "block";
    yellowRankSuffix.style.display = "block";
    yellowPosition = 101
    yellowHasWon = true;
    playersWon++
  }

  //Disable btnRoll
  btnRoll.disabled = true
  
  //Dice Roll
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  const dice3 = document.getElementById("dice3");
  const dice4 = document.getElementById("dice4");
  const dice5 = document.getElementById("dice5");
  const dice6 = document.getElementById("dice6");

  //Pieces ID
  const pieceBlue = document.getElementById("P1_Blue");
  const pieceRed = document.getElementById("P2_Red");
  const pieceGreen = document.getElementById("P3_Green");
  const pieceYellow = document.getElementById("P4_Yellow");

  //Texts ID
  const blueStatus = document.getElementById("blueText");
  const redStatus = document.getElementById("redText");
  const greenStatus = document.getElementById("greenText");
  const yellowStatus = document.getElementById("yellowText");

  //Inital Player Turn Update
  if (playerTurn == 4) {playerTurn = 1} 
  else {playerTurn++}
  
  //squaresAdvanced counts the numbers of squared advanced by a piece
  let squaresAdvanced = 0
  
  //Visual Dice Update
  let stopDiceAnim = setInterval(diceRollAnimation, 100);
  let diceLoopCount = 0

  function diceRollAnimation() {
    let visualRandomizer = Math.floor(Math.random() * 6) + 1;
    if (visualRandomizer == 1) {
      dice1.style.display = "block";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
    }
    if (visualRandomizer == 2) {
      dice1.style.display = "none";
      dice2.style.display = "block";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
    }
    if (visualRandomizer == 3) {
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "block";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
    }
    if (visualRandomizer == 4) {
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "block";
      dice5.style.display = "none";
      dice6.style.display = "none";
    }
    if (visualRandomizer == 5) {
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "block";
      dice6.style.display = "none";
    }
    if (visualRandomizer == 6) {
      dice1.style.display = "none";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "block";
    }
    diceLoopCount++


    if (diceLoopCount == 10) {
      clearInterval(stopDiceAnim);
      if (diceRoll == 1) {
        dice1.style.display = "block";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
      }
        else if (diceRoll == 2) {
        dice1.style.display = "none";
        dice2.style.display = "block";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
      }
      else if (diceRoll == 3) {
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "block";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
      }
      else if (diceRoll == 4) {
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "block";
        dice5.style.display = "none";
        dice6.style.display = "none";
      }
      else if (diceRoll == 5) {
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "block";
        dice6.style.display = "none";
      }
      else if (diceRoll == 6) {
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "block";
      }
    }
  }

  setTimeout(diceAnimWait, 1500);

  //waits for the dice animation to end before moving a piece
  function diceAnimWait() {

    //Prevent the piece from moving if the dice roll exeeds the winning square
    if (
      diceRoll + bluePosition > 100 && playerTurn == 1    ||
      diceRoll + redPosition > 100 && playerTurn == 2     ||
      diceRoll + greenPosition > 100 && playerTurn == 3   ||
      diceRoll + yellowPosition > 100 && playerTurn == 4
      ) {
      btnRoll.disabled = false;
      setTimeout(Calculation, 1);
      return;
    }

    function Calculation() {
      if (diceRoll == 6) {
        playerTurn--
      }
      if (diceRoll !== 6) {
        if (textTurn == 4) {textTurn -= 3;}
        else {
          textTurn++
        }
          if (playerTurn == 1 && redPosition >= 100) {
            playerTurn = 2
            textTurn = 3
          }
          if (playerTurn == 2 && greenPosition >= 100) {
            playerTurn = 3
            textTurn = 4
          }
          if (playerTurn == 3 && yellowPosition >= 100) {
            playerTurn = 4
            textTurn = 1
          }
          if (playerTurn == 4 && bluePosition >= 100) {
            playerTurn = 1
            textTurn = 2
          }
          if (playerTurn == 1 && redPosition >= 100) {
            playerTurn = 2
            textTurn = 3
          }
          if (playerTurn == 2 && greenPosition >= 100) {
            playerTurn = 3
            textTurn = 4
          }
          if (playerTurn == 3 && yellowPosition >= 100) {
            playerTurn = 4
            textTurn = 1
          }
        }
      
      if (textTurn == 1) {
        blueStatus.style.display = "block"
        redStatus.style.display = "none"
        greenStatus.style.display = "none"
        yellowStatus.style.display = "none"
      } 
      if (textTurn == 2) {
        blueStatus.style.display = "none"
        redStatus.style.display = "block"
        greenStatus.style.display = "none"
        yellowStatus.style.display = "none"
      }
      if (textTurn == 3) {
        blueStatus.style.display = "none"
        redStatus.style.display = "none"
        greenStatus.style.display = "block"
        yellowStatus.style.display = "none"
      }
      if (textTurn == 4) {
        blueStatus.style.display = "none"
        redStatus.style.display = "none"
        greenStatus.style.display = "none"
        yellowStatus.style.display = "block"
      }
    }

    //Roll 6 to enter the game
    //Player 1
    if (bluePosition == 0 && diceRoll !== 6 && playerTurn == 1) {
      btnRoll.disabled = false
      blueStatus.style.display = "none"
      redStatus.style.display = "block"
      greenStatus.style.display = "none"
      yellowStatus.style.display = "none"
      textTurn = 2
      return;
    }
    else if (bluePosition == 0 && playerTurn == 1) {
      pieceBlue.style.left = "40px";
      pieceBlue.style.top = "760px";
      bluePosition = 1;
      btnRoll.disabled = false;
      playerTurn--
      blueStatus.style.display = "block"
      redStatus.style.display = "none"
      greenStatus.style.display = "none"
      yellowStatus.style.display = "none"
      return;
    }

    //Player 2
    if (redPosition == 0 && diceRoll !== 6 && playerTurn == 2) {
      btnRoll.disabled = false
      blueStatus.style.display = "none"
      redStatus.style.display = "none"
      greenStatus.style.display = "block"
      yellowStatus.style.display = "none"
      textTurn = 3
      return;
    }
    else if (redPosition == 0 && playerTurn == 2) {
      pieceRed.style.left = "40px";
      pieceRed.style.top = "760px";
      redPosition = 1;
      btnRoll.disabled = false;
      playerTurn--
      blueStatus.style.display = "none"
      redStatus.style.display = "block"
      greenStatus.style.display = "none"
      yellowStatus.style.display = "none"
      return;
    }

    //Player 3
    if (greenPosition == 0 && diceRoll !== 6 && playerTurn == 3) {
      btnRoll.disabled = false
      blueStatus.style.display = "none"
      redStatus.style.display = "none"
      greenStatus.style.display = "none"
      yellowStatus.style.display = "block"
      textTurn = 4
      return;
    }
    else if (greenPosition == 0 && playerTurn == 3) {
      pieceGreen.style.left = "40px";
      pieceGreen.style.top = "760px";
      greenPosition = 1;
      btnRoll.disabled= false;
      playerTurn--
      blueStatus.style.display = "none"
      redStatus.style.display = "none"
      greenStatus.style.display = "block"
      yellowStatus.style.display = "none"
      return;
    }

    //Player 4
    if (yellowPosition == 0 && diceRoll !== 6 && playerTurn == 4) {
      btnRoll.disabled = false
      blueStatus.style.display = "block"
      redStatus.style.display = "none"
      greenStatus.style.display = "none"
      yellowStatus.style.display = "none"
      textTurn = 1
      return;
    }
    else if (yellowPosition == 0 && playerTurn == 4) {
      pieceYellow.style.left = "40px";
      pieceYellow.style.top = "760px";
      yellowPosition = 1;
      btnRoll.disabled = false;
      playerTurn--
      blueStatus.style.display = "none"
      redStatus.style.display = "none"
      greenStatus.style.display = "none"
      yellowStatus.style.display = "block"
      return;
    }


    //A variable to stop positionCheck function later 
    let StopPieceAdvance = setInterval(positionCheck, 170);
    
    function positionCheck() {

      //This function check piece position value and change the piece coordinates based on it
      squaresAdvanced++
      
      if (playerTurn == 1) {
        
        bluePosition++
        // 0 to 10
        if (bluePosition == 1) {
          pieceBlue.style.left = "40px";
          pieceBlue.style.top = "760px";
        }
        if (bluePosition == 2) {
          pieceBlue.style.left = "120px";
          pieceBlue.style.top = "760px";
        }
        if (bluePosition == 3) {
          pieceBlue.style.left = "200px";
          pieceBlue.style.top = "760px";
        }
        if (bluePosition == 4) {
          pieceBlue.style.left = "280px";
          pieceBlue.style.top = "760px";
        }
        if (bluePosition == 5) {
          pieceBlue.style.left = "360px";
          pieceBlue.style.top = "760px";
        }
        if (bluePosition == 6) {
          pieceBlue.style.left = "440px";
          pieceBlue.style.top = "760px";
        }
        if (bluePosition == 7) {
          pieceBlue.style.left = "510px";
          pieceBlue.style.top = "760px";

          //ladder: 7-14
          if (diceRoll == squaresAdvanced) {
          setTimeout (
            function() {
              pieceBlue.style.left = "520px";
              pieceBlue.style.top = "680px";
              bluePosition = 14
            }, 600
          );
          }
        }
        if (bluePosition == 8) {
          pieceBlue.style.left = "600px";
          pieceBlue.style.top = "760px";
        }
        if (bluePosition == 9) {
          pieceBlue.style.left = "680px";
          pieceBlue.style.top = "760px";
        }
        if (bluePosition == 10) {
          pieceBlue.style.left = "760px";
          pieceBlue.style.top = "760px";
        }

        //11 to 20
        if (bluePosition == 11) {
          pieceBlue.style.left = "760px";
          pieceBlue.style.top = "680px";
        }
        if (bluePosition == 12) {
          pieceBlue.style.left = "680px";
          pieceBlue.style.top = "680px";
        }
        if (bluePosition == 13) {
          pieceBlue.style.left = "600px";
          pieceBlue.style.top = "680px";
        }
        if (bluePosition == 14) {
          pieceBlue.style.left = "520px";
          pieceBlue.style.top = "680px";
        }
        if (bluePosition == 15) {
          pieceBlue.style.left = "440px";
          pieceBlue.style.top = "680px";
        }
        if (bluePosition == 16) {
          pieceBlue.style.left = "360px";
          pieceBlue.style.top = "680px";
        }
        if (bluePosition == 17) {
          pieceBlue.style.left = "280px";
          pieceBlue.style.top = "680px";
        }
        if (bluePosition == 18) {
          pieceBlue.style.left = "200px";
          pieceBlue.style.top = "680px";
        }
        if (bluePosition == 19) {
          pieceBlue.style.left = "120px";
          pieceBlue.style.top = "680px";
        }
        if (bluePosition == 20) {
          pieceBlue.style.left = "40px";
          pieceBlue.style.top = "680px";

          //Ladder: 20-38
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "200px";
                pieceBlue.style.top = "520px";
                bluePosition = 38
              }, 600
            );
          }
        }
        
        //21 to 30
        if (bluePosition == 21) {
          pieceBlue.style.left = "40px";
          pieceBlue.style.top = "600px";
        }
        if (bluePosition == 22) {
          pieceBlue.style.left = "120px";
          pieceBlue.style.top = "600px";
        }
        if (bluePosition == 23) {
          pieceBlue.style.left = "200px";
          pieceBlue.style.top = "600px";
        }
        if (bluePosition == 24) {
          pieceBlue.style.left = "280px";
          pieceBlue.style.top = "600px";
          //Snake: 24-3
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "200px";
                pieceBlue.style.top = "760px";
                bluePosition = 3
              }, 600
            );
          }
        }
        if (bluePosition == 25) {
          pieceBlue.style.left = "360px";
          pieceBlue.style.top = "600px";
        }
        if (bluePosition == 26) {
          pieceBlue.style.left = "440px";
          pieceBlue.style.top = "600px";
        }
        if (bluePosition == 27) {
          pieceBlue.style.left = "510px";
          pieceBlue.style.top = "600px";
        }
        if (bluePosition == 28) {
          pieceBlue.style.left = "600px";
          pieceBlue.style.top = "600px";
        }
        if (bluePosition == 29) {
          pieceBlue.style.left = "680px";
          pieceBlue.style.top = "600px";
        }
        if (bluePosition == 30) {
          pieceBlue.style.left = "760px";
          pieceBlue.style.top = "600px";
          //Ladder: 30-47
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "510px";
                pieceBlue.style.top = "440px";
                bluePosition = 47
              }, 600
            );
          }
        }

        //31 to 40
        if (bluePosition == 31) {
          pieceBlue.style.left = "760px";
          pieceBlue.style.top = "520px";

        }
        if (bluePosition == 32) {
          pieceBlue.style.left = "680px";
          pieceBlue.style.top = "520px";
        }
        if (bluePosition == 33) {
          pieceBlue.style.left = "600px";
          pieceBlue.style.top = "520px";
        }
        if (bluePosition == 34) {
          pieceBlue.style.left = "520px";
          pieceBlue.style.top = "520px";
          //Snake: 34-10
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "760px";
                pieceBlue.style.top = "760px";
                bluePosition = 10
              }, 600
            );
          }
        }
        if (bluePosition == 35) {
          pieceBlue.style.left = "440px";
          pieceBlue.style.top = "520px";
        }
        if (bluePosition == 36) {
          pieceBlue.style.left = "360px";
          pieceBlue.style.top = "520px";
          //Ladder: 36-52
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "680px";
                pieceBlue.style.top = "360px";
                bluePosition = 52
              }, 600
            );
          }
        }
        if (bluePosition == 37) {
          pieceBlue.style.left = "280px";
          pieceBlue.style.top = "520px";
        }
        if (bluePosition == 38) {
          pieceBlue.style.left = "200px";
          pieceBlue.style.top = "520px";
        }
        if (bluePosition == 39) {
          pieceBlue.style.left = "120px";
          pieceBlue.style.top = "520px";
        }
        if (bluePosition == 40) {
          pieceBlue.style.left = "40px";
          pieceBlue.style.top = "520px";
        }
      

        //41 to 50
        if (bluePosition == 41) {
          pieceBlue.style.left = "40px";
          pieceBlue.style.top = "440px";
          //Snake: 41-19
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "120px";
                pieceBlue.style.top = "680px";
                bluePosition = 19
              }, 600
            );
          }
        }
        if (bluePosition == 42) {
          pieceBlue.style.left = "120px";
          pieceBlue.style.top = "440px";
        }
        if (bluePosition == 43) {
          pieceBlue.style.left = "200px";
          pieceBlue.style.top = "440px";
        }
        if (bluePosition == 44) {
          pieceBlue.style.left = "280px";
          pieceBlue.style.top = "440px";
        }
        if (bluePosition == 45) {
          pieceBlue.style.left = "360px";
          pieceBlue.style.top = "440px";
        }
        if (bluePosition == 46) {
          pieceBlue.style.left = "440px";
          pieceBlue.style.top = "440px";
        }
        if (bluePosition == 47) {
          pieceBlue.style.left = "510px";
          pieceBlue.style.top = "440px";
        }
        if (bluePosition == 48) {
          pieceBlue.style.left = "600px";
          pieceBlue.style.top = "440px";
        }
        if (bluePosition == 49) {
          pieceBlue.style.left = "680px";
          pieceBlue.style.top = "440px";
        }
        if (bluePosition == 50) {
          pieceBlue.style.left = "760px";
          pieceBlue.style.top = "440px";
        }

        //51 to 60
        if (bluePosition == 51) {
          pieceBlue.style.left = "760px";
          pieceBlue.style.top = "360px";
        }
        if (bluePosition == 52) {
          pieceBlue.style.left = "680px";
          pieceBlue.style.top = "360px";
        }
        if (bluePosition == 53) {
          pieceBlue.style.left = "600px";
          pieceBlue.style.top = "360px";
        }
        if (bluePosition == 54) {
          pieceBlue.style.left = "520px";
          pieceBlue.style.top = "360px";
        }
        if (bluePosition == 55) {
          pieceBlue.style.left = "440px";
          pieceBlue.style.top = "360px";
        }
        if (bluePosition == 56) {
          pieceBlue.style.left = "360px";
          pieceBlue.style.top = "360px";
        }
        if (bluePosition == 57) {
          pieceBlue.style.left = "280px";
          pieceBlue.style.top = "360px";
          //Ladder: 57-83
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "200px";
                pieceBlue.style.top = "120px";
                bluePosition = 83
              }, 600
            );
          }
        }
        if (bluePosition == 58) {
          pieceBlue.style.left = "200px";
          pieceBlue.style.top = "360px";
          //Snake: 58-45
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "360px";
                pieceBlue.style.top = "440px";
                bluePosition = 45
              }, 600
            );
          }
        }
        if (bluePosition == 59) {
          pieceBlue.style.left = "120px";
          pieceBlue.style.top = "360px";
        }
        if (bluePosition == 60) {
          pieceBlue.style.left = "40px";
          pieceBlue.style.top = "360px";
        }

        //61 to 70
        if (bluePosition == 61) {
          pieceBlue.style.left = "40px";
          pieceBlue.style.top = "280px";
        }
        if (bluePosition == 62) {
          pieceBlue.style.left = "120px";
          pieceBlue.style.top = "280px";
        }
        if (bluePosition == 63) {
          pieceBlue.style.left = "200px";
          pieceBlue.style.top = "280px";
        }
        if (bluePosition == 64) {
          pieceBlue.style.left = "280px";
          pieceBlue.style.top = "280px";
        }
        if (bluePosition == 65) {
          pieceBlue.style.left = "360px";
          pieceBlue.style.top = "280px";
        }
        if (bluePosition == 66) {
          pieceBlue.style.left = "440px";
          pieceBlue.style.top = "280px";
        }
        if (bluePosition == 67) {
          pieceBlue.style.left = "510px";
          pieceBlue.style.top = "280px";
          //Ladder: 67-75
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "440px";
                pieceBlue.style.top = "200px";
                bluePosition = 75
              }, 600
            );
          }
        }
        if (bluePosition == 68) {
          pieceBlue.style.left = "600px";
          pieceBlue.style.top = "280px";
        }
        if (bluePosition == 69) {
          pieceBlue.style.left = "680px";
          pieceBlue.style.top = "280px";
          //Snake: 69-31
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "760px";
                pieceBlue.style.top = "520px";
                bluePosition = 31
              }, 600
            );
          }
        }
        if (bluePosition == 70) {
          pieceBlue.style.left = "760px";
          pieceBlue.style.top = "280px";
        }

        //71 to 80
        if (bluePosition == 71) {
          pieceBlue.style.left = "760px";
          pieceBlue.style.top = "200px";
        }
        if (bluePosition == 72) {
          pieceBlue.style.left = "680px";
          pieceBlue.style.top = "200px";
          //Ladder: 72-91
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "760px";
                pieceBlue.style.top = "40px";
                bluePosition = 91
              }, 600
            );
          }
        }
        if (bluePosition == 73) {
          pieceBlue.style.left = "600px";
          pieceBlue.style.top = "200px";
        }
        if (bluePosition == 74) {
          pieceBlue.style.left = "520px";
          pieceBlue.style.top = "200px";
        }
        if (bluePosition == 75) {
          pieceBlue.style.left = "440px";
          pieceBlue.style.top = "200px";
        }
        if (bluePosition == 76) {
          pieceBlue.style.left = "360px";
          pieceBlue.style.top = "200px";
        }
        if (bluePosition == 77) {
          pieceBlue.style.left = "280px";
          pieceBlue.style.top = "200px";
        }
        if (bluePosition == 78) {
          pieceBlue.style.left = "200px";
          pieceBlue.style.top = "200px";
        }
        if (bluePosition == 79) {
          pieceBlue.style.left = "120px";
          pieceBlue.style.top = "200px";
        }
        if (bluePosition == 80) {
          pieceBlue.style.left = "40px";
          pieceBlue.style.top = "200px";
        }
        //81 to 90
        if (bluePosition == 81) {
          pieceBlue.style.left = "40px";
          pieceBlue.style.top = "120px";
        }
        if (bluePosition == 82) {
          pieceBlue.style.left = "120px";
          pieceBlue.style.top = "120px";
        }
        if (bluePosition == 83) {
          pieceBlue.style.left = "200px";
          pieceBlue.style.top = "120px";
        }
        if (bluePosition == 84) {
          pieceBlue.style.left = "280px";
          pieceBlue.style.top = "120px";
        }
        if (bluePosition == 85) {
          pieceBlue.style.left = "360px";
          pieceBlue.style.top = "120px";
        }
        if (bluePosition == 86) {
          pieceBlue.style.left = "440px";
          pieceBlue.style.top = "120px";
        }
        if (bluePosition == 87) {
          pieceBlue.style.left = "510px";
          pieceBlue.style.top = "120px";
        }
        if (bluePosition == 88) {
          pieceBlue.style.left = "600px";
          pieceBlue.style.top = "120px";
          //Snake: 88-74
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "520px";
                pieceBlue.style.top = "200px";
                bluePosition = 74
              }, 600
            );
          }
        }
        if (bluePosition == 89) {
          pieceBlue.style.left = "680px";
          pieceBlue.style.top = "120px";
        }
        if (bluePosition == 90) {
          pieceBlue.style.left = "760px";
          pieceBlue.style.top = "120px";
        }

        //90 to 100
        if (bluePosition == 91) {
          pieceBlue.style.left = "760px";
          pieceBlue.style.top = "40px";
        }
        if (bluePosition == 92) {
          pieceBlue.style.left = "680px";
          pieceBlue.style.top = "40px";
        }
        if (bluePosition == 93) {
          pieceBlue.style.left = "600px";
          pieceBlue.style.top = "40px";
        }
        if (bluePosition == 94) {
          pieceBlue.style.left = "520px";
          pieceBlue.style.top = "40px";
        }
        if (bluePosition == 95) {
          pieceBlue.style.left = "440px";
          pieceBlue.style.top = "40px";
        }
        if (bluePosition == 96) {
          pieceBlue.style.left = "360px";
          pieceBlue.style.top = "40px";
        }
        if (bluePosition == 97) {
          pieceBlue.style.left = "280px";
          pieceBlue.style.top = "40px";
        }
        if (bluePosition == 98) {
          pieceBlue.style.left = "200px";
          pieceBlue.style.top = "40px";
        }
        if (bluePosition == 99) {
          pieceBlue.style.left = "120px";
          pieceBlue.style.top = "40px";
          //Snake: 99-56
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceBlue.style.left = "360px";
                pieceBlue.style.top = "360px";
                bluePosition = 56
              }, 600
            );
          }
        }
        if (bluePosition == 100) {
          pieceBlue.style.left = "40px";
          pieceBlue.style.top = "40px";
        }
      }
      
      if (playerTurn == 2) {

        redPosition++
        // 0 to 10
        if (redPosition == 1) {
          pieceRed.style.left = "40px";
          pieceRed.style.top = "760px";
        }
        if (redPosition == 2) {
          pieceRed.style.left = "120px";
          pieceRed.style.top = "760px";
        }
        if (redPosition == 3) {
          pieceRed.style.left = "200px";
          pieceRed.style.top = "760px";
        }
        if (redPosition == 4) {
          pieceRed.style.left = "280px";
          pieceRed.style.top = "760px";
        }
        if (redPosition == 5) {
          pieceRed.style.left = "360px";
          pieceRed.style.top = "760px";
        }
        if (redPosition == 6) {
          pieceRed.style.left = "440px";
          pieceRed.style.top = "760px";
        }
        if (redPosition == 7) {
          pieceRed.style.left = "510px";
          pieceRed.style.top = "760px";

          //ladder: 7-14
          if (diceRoll == squaresAdvanced) {
          setTimeout (
            function() {
              pieceRed.style.left = "520px";
              pieceRed.style.top = "680px";
              redPosition = 14
            }, 600
          );
          }
        }
        if (redPosition == 8) {
          pieceRed.style.left = "600px";
          pieceRed.style.top = "760px";
        }
        if (redPosition == 9) {
          pieceRed.style.left = "680px";
          pieceRed.style.top = "760px";
        }
        if (redPosition == 10) {
          pieceRed.style.left = "760px";
          pieceRed.style.top = "760px";
        }

        //11 to 20
        if (redPosition == 11) {
          pieceRed.style.left = "760px";
          pieceRed.style.top = "680px";
        }
        if (redPosition == 12) {
          pieceRed.style.left = "680px";
          pieceRed.style.top = "680px";
        }
        if (redPosition == 13) {
          pieceRed.style.left = "600px";
          pieceRed.style.top = "680px";
        }
        if (redPosition == 14) {
          pieceRed.style.left = "520px";
          pieceRed.style.top = "680px";
        }
        if (redPosition == 15) {
          pieceRed.style.left = "440px";
          pieceRed.style.top = "680px";
        }
        if (redPosition == 16) {
          pieceRed.style.left = "360px";
          pieceRed.style.top = "680px";
        }
        if (redPosition == 17) {
          pieceRed.style.left = "280px";
          pieceRed.style.top = "680px";
        }
        if (redPosition == 18) {
          pieceRed.style.left = "200px";
          pieceRed.style.top = "680px";
        }
        if (redPosition == 19) {
          pieceRed.style.left = "120px";
          pieceRed.style.top = "680px";
        }
        if (redPosition == 20) {
          pieceRed.style.left = "40px";
          pieceRed.style.top = "680px";

          //Ladder: 20-38
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "200px";
                pieceRed.style.top = "520px";
                redPosition = 38
              }, 600
            );
          }
        }
        
        //21 to 30
        if (redPosition == 21) {
          pieceRed.style.left = "40px";
          pieceRed.style.top = "600px";
        }
        if (redPosition == 22) {
          pieceRed.style.left = "120px";
          pieceRed.style.top = "600px";
        }
        if (redPosition == 23) {
          pieceRed.style.left = "200px";
          pieceRed.style.top = "600px";
        }
        if (redPosition == 24) {
          pieceRed.style.left = "280px";
          pieceRed.style.top = "600px";
          //Snake: 24-3
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "200px";
                pieceRed.style.top = "760px";
                redPosition = 3
              }, 600
            );
          }
        }
        if (redPosition == 25) {
          pieceRed.style.left = "360px";
          pieceRed.style.top = "600px";
        }
        if (redPosition == 26) {
          pieceRed.style.left = "440px";
          pieceRed.style.top = "600px";
        }
        if (redPosition == 27) {
          pieceRed.style.left = "510px";
          pieceRed.style.top = "600px";
        }
        if (redPosition == 28) {
          pieceRed.style.left = "600px";
          pieceRed.style.top = "600px";
        }
        if (redPosition == 29) {
          pieceRed.style.left = "680px";
          pieceRed.style.top = "600px";
        }
        if (redPosition == 30) {
          pieceRed.style.left = "760px";
          pieceRed.style.top = "600px";
          //Ladder: 30-47
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "510px";
                pieceRed.style.top = "440px";
                redPosition = 47
              }, 600
            );
          }
        }

        //31 to 40
        if (redPosition == 31) {
          pieceRed.style.left = "760px";
          pieceRed.style.top = "520px";

        }
        if (redPosition == 32) {
          pieceRed.style.left = "680px";
          pieceRed.style.top = "520px";
        }
        if (redPosition == 33) {
          pieceRed.style.left = "600px";
          pieceRed.style.top = "520px";
        }
        if (redPosition == 34) {
          pieceRed.style.left = "520px";
          pieceRed.style.top = "520px";
          //Snake: 34-10
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "760px";
                pieceRed.style.top = "760px";
                redPosition = 10
              }, 600
            );
          }
        }
        if (redPosition == 35) {
          pieceRed.style.left = "440px";
          pieceRed.style.top = "520px";
        }
        if (redPosition == 36) {
          pieceRed.style.left = "360px";
          pieceRed.style.top = "520px";
          //Ladder: 36-52
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "680px";
                pieceRed.style.top = "360px";
                redPosition = 52
              }, 600
            );
          }
        }
        if (redPosition == 37) {
          pieceRed.style.left = "280px";
          pieceRed.style.top = "520px";
        }
        if (redPosition == 38) {
          pieceRed.style.left = "200px";
          pieceRed.style.top = "520px";
        }
        if (redPosition == 39) {
          pieceRed.style.left = "120px";
          pieceRed.style.top = "520px";
        }
        if (redPosition == 40) {
          pieceRed.style.left = "40px";
          pieceRed.style.top = "520px";
        }
      

        //41 to 50
        if (redPosition == 41) {
          pieceRed.style.left = "40px";
          pieceRed.style.top = "440px";
          //Snake: 41-19
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "120px";
                pieceRed.style.top = "680px";
                redPosition = 19
              }, 600
            );
          }
        }
        if (redPosition == 42) {
          pieceRed.style.left = "120px";
          pieceRed.style.top = "440px";
        }
        if (redPosition == 43) {
          pieceRed.style.left = "200px";
          pieceRed.style.top = "440px";
        }
        if (redPosition == 44) {
          pieceRed.style.left = "280px";
          pieceRed.style.top = "440px";
        }
        if (redPosition == 45) {
          pieceRed.style.left = "360px";
          pieceRed.style.top = "440px";
        }
        if (redPosition == 46) {
          pieceRed.style.left = "440px";
          pieceRed.style.top = "440px";
        }
        if (redPosition == 47) {
          pieceRed.style.left = "510px";
          pieceRed.style.top = "440px";
        }
        if (redPosition == 48) {
          pieceRed.style.left = "600px";
          pieceRed.style.top = "440px";
        }
        if (redPosition == 49) {
          pieceRed.style.left = "680px";
          pieceRed.style.top = "440px";
        }
        if (redPosition == 50) {
          pieceRed.style.left = "760px";
          pieceRed.style.top = "440px";
        }

        //51 to 60
        if (redPosition == 51) {
          pieceRed.style.left = "760px";
          pieceRed.style.top = "360px";
        }
        if (redPosition == 52) {
          pieceRed.style.left = "680px";
          pieceRed.style.top = "360px";
        }
        if (redPosition == 53) {
          pieceRed.style.left = "600px";
          pieceRed.style.top = "360px";
        }
        if (redPosition == 54) {
          pieceRed.style.left = "520px";
          pieceRed.style.top = "360px";
        }
        if (redPosition == 55) {
          pieceRed.style.left = "440px";
          pieceRed.style.top = "360px";
        }
        if (redPosition == 56) {
          pieceRed.style.left = "360px";
          pieceRed.style.top = "360px";
        }
        if (redPosition == 57) {
          pieceRed.style.left = "280px";
          pieceRed.style.top = "360px";
          //Ladder: 57-83
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "200px";
                pieceRed.style.top = "120px";
                redPosition = 83
              }, 600
            );
          }
        }
        if (redPosition == 58) {
          pieceRed.style.left = "200px";
          pieceRed.style.top = "360px";
          //Snake: 58-45
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "360px";
                pieceRed.style.top = "440px";
                redPosition = 45
              }, 600
            );
          }
        }
        if (redPosition == 59) {
          pieceRed.style.left = "120px";
          pieceRed.style.top = "360px";
        }
        if (redPosition == 60) {
          pieceRed.style.left = "40px";
          pieceRed.style.top = "360px";
        }

        //61 to 70
        if (redPosition == 61) {
          pieceRed.style.left = "40px";
          pieceRed.style.top = "280px";
        }
        if (redPosition == 62) {
          pieceRed.style.left = "120px";
          pieceRed.style.top = "280px";
        }
        if (redPosition == 63) {
          pieceRed.style.left = "200px";
          pieceRed.style.top = "280px";
        }
        if (redPosition == 64) {
          pieceRed.style.left = "280px";
          pieceRed.style.top = "280px";
        }
        if (redPosition == 65) {
          pieceRed.style.left = "360px";
          pieceRed.style.top = "280px";
        }
        if (redPosition == 66) {
          pieceRed.style.left = "440px";
          pieceRed.style.top = "280px";
        }
        if (redPosition == 67) {
          pieceRed.style.left = "510px";
          pieceRed.style.top = "280px";
          //Ladder: 67-75
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "440px";
                pieceRed.style.top = "200px";
                redPosition = 75
              }, 600
            );
          }
        }
        if (redPosition == 68) {
          pieceRed.style.left = "600px";
          pieceRed.style.top = "280px";
        }
        if (redPosition == 69) {
          pieceRed.style.left = "680px";
          pieceRed.style.top = "280px";
          //Snake: 69-31
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "760px";
                pieceRed.style.top = "520px";
                redPosition = 31
              }, 600
            );
          }
        }
        if (redPosition == 70) {
          pieceRed.style.left = "760px";
          pieceRed.style.top = "280px";
        }

        //71 to 80
        if (redPosition == 71) {
          pieceRed.style.left = "760px";
          pieceRed.style.top = "200px";
        }
        if (redPosition == 72) {
          pieceRed.style.left = "680px";
          pieceRed.style.top = "200px";
          //Ladder: 72-91
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "760px";
                pieceRed.style.top = "40px";
                redPosition = 91
              }, 600
            );
          }
        }
        if (redPosition == 73) {
          pieceRed.style.left = "600px";
          pieceRed.style.top = "200px";
        }
        if (redPosition == 74) {
          pieceRed.style.left = "520px";
          pieceRed.style.top = "200px";
        }
        if (redPosition == 75) {
          pieceRed.style.left = "440px";
          pieceRed.style.top = "200px";
        }
        if (redPosition == 76) {
          pieceRed.style.left = "360px";
          pieceRed.style.top = "200px";
        }
        if (redPosition == 77) {
          pieceRed.style.left = "280px";
          pieceRed.style.top = "200px";
        }
        if (redPosition == 78) {
          pieceRed.style.left = "200px";
          pieceRed.style.top = "200px";
        }
        if (redPosition == 79) {
          pieceRed.style.left = "120px";
          pieceRed.style.top = "200px";
        }
        if (redPosition == 80) {
          pieceRed.style.left = "40px";
          pieceRed.style.top = "200px";
        }
        //81 to 90
        if (redPosition == 81) {
          pieceRed.style.left = "40px";
          pieceRed.style.top = "120px";
        }
        if (redPosition == 82) {
          pieceRed.style.left = "120px";
          pieceRed.style.top = "120px";
        }
        if (redPosition == 83) {
          pieceRed.style.left = "200px";
          pieceRed.style.top = "120px";
        }
        if (redPosition == 84) {
          pieceRed.style.left = "280px";
          pieceRed.style.top = "120px";
        }
        if (redPosition == 85) {
          pieceRed.style.left = "360px";
          pieceRed.style.top = "120px";
        }
        if (redPosition == 86) {
          pieceRed.style.left = "440px";
          pieceRed.style.top = "120px";
        }
        if (redPosition == 87) {
          pieceRed.style.left = "510px";
          pieceRed.style.top = "120px";
        }
        if (redPosition == 88) {
          pieceRed.style.left = "600px";
          pieceRed.style.top = "120px";
          //Snake: 88-74
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "520px";
                pieceRed.style.top = "200px";
                redPosition = 74
              }, 600
            );
          }
        }
        if (redPosition == 89) {
          pieceRed.style.left = "680px";
          pieceRed.style.top = "120px";
        }
        if (redPosition == 90) {
          pieceRed.style.left = "760px";
          pieceRed.style.top = "120px";
        }

        //90 to 100
        if (redPosition == 91) {
          pieceRed.style.left = "760px";
          pieceRed.style.top = "40px";
        }
        if (redPosition == 92) {
          pieceRed.style.left = "680px";
          pieceRed.style.top = "40px";
        }
        if (redPosition == 93) {
          pieceRed.style.left = "600px";
          pieceRed.style.top = "40px";
        }
        if (redPosition == 94) {
          pieceRed.style.left = "520px";
          pieceRed.style.top = "40px";
        }
        if (redPosition == 95) {
          pieceRed.style.left = "440px";
          pieceRed.style.top = "40px";
        }
        if (redPosition == 96) {
          pieceRed.style.left = "360px";
          pieceRed.style.top = "40px";
        }
        if (redPosition == 97) {
          pieceRed.style.left = "280px";
          pieceRed.style.top = "40px";
        }
        if (redPosition == 98) {
          pieceRed.style.left = "200px";
          pieceRed.style.top = "40px";
        }
        if (redPosition == 99) {
          pieceRed.style.left = "120px";
          pieceRed.style.top = "40px";
          //Snake: 99-56
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceRed.style.left = "360px";
                pieceRed.style.top = "360px";
                redPosition = 56
              }, 600
            );
          }
        }
        if (redPosition == 100) {
          pieceRed.style.left = "40px";
          pieceRed.style.top = "40px";
        }
      }

      if (playerTurn == 3) {

        greenPosition++
        // 0 to 10
        if (greenPosition == 1) {
          pieceGreen.style.left = "40px";
          pieceGreen.style.top = "760px";
        }
        if (greenPosition == 2) {
          pieceGreen.style.left = "120px";
          pieceGreen.style.top = "760px";
        }
        if (greenPosition == 3) {
          pieceGreen.style.left = "200px";
          pieceGreen.style.top = "760px";
        }
        if (greenPosition == 4) {
          pieceGreen.style.left = "280px";
          pieceGreen.style.top = "760px";
        }
        if (greenPosition == 5) {
          pieceGreen.style.left = "360px";
          pieceGreen.style.top = "760px";
        }
        if (greenPosition == 6) {
          pieceGreen.style.left = "440px";
          pieceGreen.style.top = "760px";
        }
        if (greenPosition == 7) {
          pieceGreen.style.left = "510px";
          pieceGreen.style.top = "760px";

          //ladder: 7-14
          if (diceRoll == squaresAdvanced) {
          setTimeout (
            function() {
              pieceGreen.style.left = "520px";
              pieceGreen.style.top = "680px";
              greenPosition = 14
            }, 600
          );
          }
        }
        if (greenPosition == 8) {
          pieceGreen.style.left = "600px";
          pieceGreen.style.top = "760px";
        }
        if (greenPosition == 9) {
          pieceGreen.style.left = "680px";
          pieceGreen.style.top = "760px";
        }
        if (greenPosition == 10) {
          pieceGreen.style.left = "760px";
          pieceGreen.style.top = "760px";
        }

        //11 to 20
        if (greenPosition == 11) {
          pieceGreen.style.left = "760px";
          pieceGreen.style.top = "680px";
        }
        if (greenPosition == 12) {
          pieceGreen.style.left = "680px";
          pieceGreen.style.top = "680px";
        }
        if (greenPosition == 13) {
          pieceGreen.style.left = "600px";
          pieceGreen.style.top = "680px";
        }
        if (greenPosition == 14) {
          pieceGreen.style.left = "520px";
          pieceGreen.style.top = "680px";
        }
        if (greenPosition == 15) {
          pieceGreen.style.left = "440px";
          pieceGreen.style.top = "680px";
        }
        if (greenPosition == 16) {
          pieceGreen.style.left = "360px";
          pieceGreen.style.top = "680px";
        }
        if (greenPosition == 17) {
          pieceGreen.style.left = "280px";
          pieceGreen.style.top = "680px";
        }
        if (greenPosition == 18) {
          pieceGreen.style.left = "200px";
          pieceGreen.style.top = "680px";
        }
        if (greenPosition == 19) {
          pieceGreen.style.left = "120px";
          pieceGreen.style.top = "680px";
        }
        if (greenPosition == 20) {
          pieceGreen.style.left = "40px";
          pieceGreen.style.top = "680px";

          //Ladder: 20-38
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "200px";
                pieceGreen.style.top = "520px";
                greenPosition = 38
              }, 600
            );
          }
        }
        
        //21 to 30
        if (greenPosition == 21) {
          pieceGreen.style.left = "40px";
          pieceGreen.style.top = "600px";
        }
        if (greenPosition == 22) {
          pieceGreen.style.left = "120px";
          pieceGreen.style.top = "600px";
        }
        if (greenPosition == 23) {
          pieceGreen.style.left = "200px";
          pieceGreen.style.top = "600px";
        }
        if (greenPosition == 24) {
          pieceGreen.style.left = "280px";
          pieceGreen.style.top = "600px";
          //Snake: 24-3
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "200px";
                pieceGreen.style.top = "760px";
                greenPosition = 3
              }, 600
            );
          }
        }
        if (greenPosition == 25) {
          pieceGreen.style.left = "360px";
          pieceGreen.style.top = "600px";
        }
        if (greenPosition == 26) {
          pieceGreen.style.left = "440px";
          pieceGreen.style.top = "600px";
        }
        if (greenPosition == 27) {
          pieceGreen.style.left = "510px";
          pieceGreen.style.top = "600px";
        }
        if (greenPosition == 28) {
          pieceGreen.style.left = "600px";
          pieceGreen.style.top = "600px";
        }
        if (greenPosition == 29) {
          pieceGreen.style.left = "680px";
          pieceGreen.style.top = "600px";
        }
        if (greenPosition == 30) {
          pieceGreen.style.left = "760px";
          pieceGreen.style.top = "600px";
          //Ladder: 30-47
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "510px";
                pieceGreen.style.top = "440px";
                greenPosition = 47
              }, 600
            );
          }
        }

        //31 to 40
        if (greenPosition == 31) {
          pieceGreen.style.left = "760px";
          pieceGreen.style.top = "520px";

        }
        if (greenPosition == 32) {
          pieceGreen.style.left = "680px";
          pieceGreen.style.top = "520px";
        }
        if (greenPosition == 33) {
          pieceGreen.style.left = "600px";
          pieceGreen.style.top = "520px";
        }
        if (greenPosition == 34) {
          pieceGreen.style.left = "520px";
          pieceGreen.style.top = "520px";
          //Snake: 34-10
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "760px";
                pieceGreen.style.top = "760px";
                greenPosition = 10
              }, 600
            );
          }
        }
        if (greenPosition == 35) {
          pieceGreen.style.left = "440px";
          pieceGreen.style.top = "520px";
        }
        if (greenPosition == 36) {
          pieceGreen.style.left = "360px";
          pieceGreen.style.top = "520px";
          //Ladder: 36-52
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "680px";
                pieceGreen.style.top = "360px";
                greenPosition = 52
              }, 600
            );
          }
        }
        if (greenPosition == 37) {
          pieceGreen.style.left = "280px";
          pieceGreen.style.top = "520px";
        }
        if (greenPosition == 38) {
          pieceGreen.style.left = "200px";
          pieceGreen.style.top = "520px";
        }
        if (greenPosition == 39) {
          pieceGreen.style.left = "120px";
          pieceGreen.style.top = "520px";
        }
        if (greenPosition == 40) {
          pieceGreen.style.left = "40px";
          pieceGreen.style.top = "520px";
        }
      

        //41 to 50
        if (greenPosition == 41) {
          pieceGreen.style.left = "40px";
          pieceGreen.style.top = "440px";
          //Snake: 41-19
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "120px";
                pieceGreen.style.top = "680px";
                greenPosition = 19
              }, 600
            );
          }
        }
        if (greenPosition == 42) {
          pieceGreen.style.left = "120px";
          pieceGreen.style.top = "440px";
        }
        if (greenPosition == 43) {
          pieceGreen.style.left = "200px";
          pieceGreen.style.top = "440px";
        }
        if (greenPosition == 44) {
          pieceGreen.style.left = "280px";
          pieceGreen.style.top = "440px";
        }
        if (greenPosition == 45) {
          pieceGreen.style.left = "360px";
          pieceGreen.style.top = "440px";
        }
        if (greenPosition == 46) {
          pieceGreen.style.left = "440px";
          pieceGreen.style.top = "440px";
        }
        if (greenPosition == 47) {
          pieceGreen.style.left = "510px";
          pieceGreen.style.top = "440px";
        }
        if (greenPosition == 48) {
          pieceGreen.style.left = "600px";
          pieceGreen.style.top = "440px";
        }
        if (greenPosition == 49) {
          pieceGreen.style.left = "680px";
          pieceGreen.style.top = "440px";
        }
        if (greenPosition == 50) {
          pieceGreen.style.left = "760px";
          pieceGreen.style.top = "440px";
        }

        //51 to 60
        if (greenPosition == 51) {
          pieceGreen.style.left = "760px";
          pieceGreen.style.top = "360px";
        }
        if (greenPosition == 52) {
          pieceGreen.style.left = "680px";
          pieceGreen.style.top = "360px";
        }
        if (greenPosition == 53) {
          pieceGreen.style.left = "600px";
          pieceGreen.style.top = "360px";
        }
        if (greenPosition == 54) {
          pieceGreen.style.left = "520px";
          pieceGreen.style.top = "360px";
        }
        if (greenPosition == 55) {
          pieceGreen.style.left = "440px";
          pieceGreen.style.top = "360px";
        }
        if (greenPosition == 56) {
          pieceGreen.style.left = "360px";
          pieceGreen.style.top = "360px";
        }
        if (greenPosition == 57) {
          pieceGreen.style.left = "280px";
          pieceGreen.style.top = "360px";
          //Ladder: 57-83
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "200px";
                pieceGreen.style.top = "120px";
                greenPosition = 83
              }, 600
            );
          }
        }
        if (greenPosition == 58) {
          pieceGreen.style.left = "200px";
          pieceGreen.style.top = "360px";
          //Snake: 58-45
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "360px";
                pieceGreen.style.top = "440px";
                greenPosition = 45
              }, 600
            );
          }
        }
        if (greenPosition == 59) {
          pieceGreen.style.left = "120px";
          pieceGreen.style.top = "360px";
        }
        if (greenPosition == 60) {
          pieceGreen.style.left = "40px";
          pieceGreen.style.top = "360px";
        }

        //61 to 70
        if (greenPosition == 61) {
          pieceGreen.style.left = "40px";
          pieceGreen.style.top = "280px";
        }
        if (greenPosition == 62) {
          pieceGreen.style.left = "120px";
          pieceGreen.style.top = "280px";
        }
        if (greenPosition == 63) {
          pieceGreen.style.left = "200px";
          pieceGreen.style.top = "280px";
        }
        if (greenPosition == 64) {
          pieceGreen.style.left = "280px";
          pieceGreen.style.top = "280px";
        }
        if (greenPosition == 65) {
          pieceGreen.style.left = "360px";
          pieceGreen.style.top = "280px";
        }
        if (greenPosition == 66) {
          pieceGreen.style.left = "440px";
          pieceGreen.style.top = "280px";
        }
        if (greenPosition == 67) {
          pieceGreen.style.left = "510px";
          pieceGreen.style.top = "280px";
          //Ladder: 67-75
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "440px";
                pieceGreen.style.top = "200px";
                greenPosition = 75
              }, 600
            );
          }
        }
        if (greenPosition == 68) {
          pieceGreen.style.left = "600px";
          pieceGreen.style.top = "280px";
        }
        if (greenPosition == 69) {
          pieceGreen.style.left = "680px";
          pieceGreen.style.top = "280px";
          //Snake: 69-31
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "760px";
                pieceGreen.style.top = "520px";
                greenPosition = 31
              }, 600
            );
          }
        }
        if (greenPosition == 70) {
          pieceGreen.style.left = "760px";
          pieceGreen.style.top = "280px";
        }

        //71 to 80
        if (greenPosition == 71) {
          pieceGreen.style.left = "760px";
          pieceGreen.style.top = "200px";
        }
        if (greenPosition == 72) {
          pieceGreen.style.left = "680px";
          pieceGreen.style.top = "200px";
          //Ladder: 72-91
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "760px";
                pieceGreen.style.top = "40px";
                greenPosition = 91
              }, 600
            );
          }
        }
        if (greenPosition == 73) {
          pieceGreen.style.left = "600px";
          pieceGreen.style.top = "200px";
        }
        if (greenPosition == 74) {
          pieceGreen.style.left = "520px";
          pieceGreen.style.top = "200px";
        }
        if (greenPosition == 75) {
          pieceGreen.style.left = "440px";
          pieceGreen.style.top = "200px";
        }
        if (greenPosition == 76) {
          pieceGreen.style.left = "360px";
          pieceGreen.style.top = "200px";
        }
        if (greenPosition == 77) {
          pieceGreen.style.left = "280px";
          pieceGreen.style.top = "200px";
        }
        if (greenPosition == 78) {
          pieceGreen.style.left = "200px";
          pieceGreen.style.top = "200px";
        }
        if (greenPosition == 79) {
          pieceGreen.style.left = "120px";
          pieceGreen.style.top = "200px";
        }
        if (greenPosition == 80) {
          pieceGreen.style.left = "40px";
          pieceGreen.style.top = "200px";
        }
        //81 to 90
        if (greenPosition == 81) {
          pieceGreen.style.left = "40px";
          pieceGreen.style.top = "120px";
        }
        if (greenPosition == 82) {
          pieceGreen.style.left = "120px";
          pieceGreen.style.top = "120px";
        }
        if (greenPosition == 83) {
          pieceGreen.style.left = "200px";
          pieceGreen.style.top = "120px";
        }
        if (greenPosition == 84) {
          pieceGreen.style.left = "280px";
          pieceGreen.style.top = "120px";
        }
        if (greenPosition == 85) {
          pieceGreen.style.left = "360px";
          pieceGreen.style.top = "120px";
        }
        if (greenPosition == 86) {
          pieceGreen.style.left = "440px";
          pieceGreen.style.top = "120px";
        }
        if (greenPosition == 87) {
          pieceGreen.style.left = "510px";
          pieceGreen.style.top = "120px";
        }
        if (greenPosition == 88) {
          pieceGreen.style.left = "600px";
          pieceGreen.style.top = "120px";
          //Snake: 88-74
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "520px";
                pieceGreen.style.top = "200px";
                greenPosition = 74
              }, 600
            );
          }
        }
        if (greenPosition == 89) {
          pieceGreen.style.left = "680px";
          pieceGreen.style.top = "120px";
        }
        if (greenPosition == 90) {
          pieceGreen.style.left = "760px";
          pieceGreen.style.top = "120px";
        }

        //90 to 100
        if (greenPosition == 91) {
          pieceGreen.style.left = "760px";
          pieceGreen.style.top = "40px";
        }
        if (greenPosition == 92) {
          pieceGreen.style.left = "680px";
          pieceGreen.style.top = "40px";
        }
        if (greenPosition == 93) {
          pieceGreen.style.left = "600px";
          pieceGreen.style.top = "40px";
        }
        if (greenPosition == 94) {
          pieceGreen.style.left = "520px";
          pieceGreen.style.top = "40px";
        }
        if (greenPosition == 95) {
          pieceGreen.style.left = "440px";
          pieceGreen.style.top = "40px";
        }
        if (greenPosition == 96) {
          pieceGreen.style.left = "360px";
          pieceGreen.style.top = "40px";
        }
        if (greenPosition == 97) {
          pieceGreen.style.left = "280px";
          pieceGreen.style.top = "40px";
        }
        if (greenPosition == 98) {
          pieceGreen.style.left = "200px";
          pieceGreen.style.top = "40px";
        }
        if (greenPosition == 99) {
          pieceGreen.style.left = "120px";
          pieceGreen.style.top = "40px";
          //Snake: 99-56
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceGreen.style.left = "360px";
                pieceGreen.style.top = "360px";
                greenPosition = 56
              }, 600
            );
          }
        }
        if (greenPosition == 100) {
          pieceGreen.style.left = "40px";
          pieceGreen.style.top = "40px";
        }
      }

      if (playerTurn == 4) {

        yellowPosition++
        // 0 to 10
        if (yellowPosition == 1) {
          pieceYellow.style.left = "40px";
          pieceYellow.style.top = "760px";
        }
        if (yellowPosition == 2) {
          pieceYellow.style.left = "120px";
          pieceYellow.style.top = "760px";
        }
        if (yellowPosition == 3) {
          pieceYellow.style.left = "200px";
          pieceYellow.style.top = "760px";
        }
        if (yellowPosition == 4) {
          pieceYellow.style.left = "280px";
          pieceYellow.style.top = "760px";
        }
        if (yellowPosition == 5) {
          pieceYellow.style.left = "360px";
          pieceYellow.style.top = "760px";
        }
        if (yellowPosition == 6) {
          pieceYellow.style.left = "440px";
          pieceYellow.style.top = "760px";
        }
        if (yellowPosition == 7) {
          pieceYellow.style.left = "510px";
          pieceYellow.style.top = "760px";

          //ladder: 7-14
          if (diceRoll == squaresAdvanced) {
          setTimeout (
            function() {
              pieceYellow.style.left = "520px";
              pieceYellow.style.top = "680px";
              yellowPosition = 14
            }, 600
          );
          }
        }
        if (yellowPosition == 8) {
          pieceYellow.style.left = "600px";
          pieceYellow.style.top = "760px";
        }
        if (yellowPosition == 9) {
          pieceYellow.style.left = "680px";
          pieceYellow.style.top = "760px";
        }
        if (yellowPosition == 10) {
          pieceYellow.style.left = "760px";
          pieceYellow.style.top = "760px";
        }

        //11 to 20
        if (yellowPosition == 11) {
          pieceYellow.style.left = "760px";
          pieceYellow.style.top = "680px";
        }
        if (yellowPosition == 12) {
          pieceYellow.style.left = "680px";
          pieceYellow.style.top = "680px";
        }
        if (yellowPosition == 13) {
          pieceYellow.style.left = "600px";
          pieceYellow.style.top = "680px";
        }
        if (yellowPosition == 14) {
          pieceYellow.style.left = "520px";
          pieceYellow.style.top = "680px";
        }
        if (yellowPosition == 15) {
          pieceYellow.style.left = "440px";
          pieceYellow.style.top = "680px";
        }
        if (yellowPosition == 16) {
          pieceYellow.style.left = "360px";
          pieceYellow.style.top = "680px";
        }
        if (yellowPosition == 17) {
          pieceYellow.style.left = "280px";
          pieceYellow.style.top = "680px";
        }
        if (yellowPosition == 18) {
          pieceYellow.style.left = "200px";
          pieceYellow.style.top = "680px";
        }
        if (yellowPosition == 19) {
          pieceYellow.style.left = "120px";
          pieceYellow.style.top = "680px";
        }
        if (yellowPosition == 20) {
          pieceYellow.style.left = "40px";
          pieceYellow.style.top = "680px";

          //Ladder: 20-38
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "200px";
                pieceYellow.style.top = "520px";
                yellowPosition = 38
              }, 600
            );
          }
        }
        
        //21 to 30
        if (yellowPosition == 21) {
          pieceYellow.style.left = "40px";
          pieceYellow.style.top = "600px";
        }
        if (yellowPosition == 22) {
          pieceYellow.style.left = "120px";
          pieceYellow.style.top = "600px";
        }
        if (yellowPosition == 23) {
          pieceYellow.style.left = "200px";
          pieceYellow.style.top = "600px";
        }
        if (yellowPosition == 24) {
          pieceYellow.style.left = "280px";
          pieceYellow.style.top = "600px";
          //Snake: 24-3
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "200px";
                pieceYellow.style.top = "760px";
                yellowPosition = 3
              }, 600
            );
          }
        }
        if (yellowPosition == 25) {
          pieceYellow.style.left = "360px";
          pieceYellow.style.top = "600px";
        }
        if (yellowPosition == 26) {
          pieceYellow.style.left = "440px";
          pieceYellow.style.top = "600px";
        }
        if (yellowPosition == 27) {
          pieceYellow.style.left = "510px";
          pieceYellow.style.top = "600px";
        }
        if (yellowPosition == 28) {
          pieceYellow.style.left = "600px";
          pieceYellow.style.top = "600px";
        }
        if (yellowPosition == 29) {
          pieceYellow.style.left = "680px";
          pieceYellow.style.top = "600px";
        }
        if (yellowPosition == 30) {
          pieceYellow.style.left = "760px";
          pieceYellow.style.top = "600px";
          //Ladder: 30-47
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "510px";
                pieceYellow.style.top = "440px";
                yellowPosition = 47
              }, 600
            );
          }
        }

        //31 to 40
        if (yellowPosition == 31) {
          pieceYellow.style.left = "760px";
          pieceYellow.style.top = "520px";

        }
        if (yellowPosition == 32) {
          pieceYellow.style.left = "680px";
          pieceYellow.style.top = "520px";
        }
        if (yellowPosition == 33) {
          pieceYellow.style.left = "600px";
          pieceYellow.style.top = "520px";
        }
        if (yellowPosition == 34) {
          pieceYellow.style.left = "520px";
          pieceYellow.style.top = "520px";
          //Snake: 34-10
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "760px";
                pieceYellow.style.top = "760px";
                yellowPosition = 10
              }, 600
            );
          }
        }
        if (yellowPosition == 35) {
          pieceYellow.style.left = "440px";
          pieceYellow.style.top = "520px";
        }
        if (yellowPosition == 36) {
          pieceYellow.style.left = "360px";
          pieceYellow.style.top = "520px";
          //Ladder: 36-52
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "680px";
                pieceYellow.style.top = "360px";
                yellowPosition = 52
              }, 600
            );
          }
        }
        if (yellowPosition == 37) {
          pieceYellow.style.left = "280px";
          pieceYellow.style.top = "520px";
        }
        if (yellowPosition == 38) {
          pieceYellow.style.left = "200px";
          pieceYellow.style.top = "520px";
        }
        if (yellowPosition == 39) {
          pieceYellow.style.left = "120px";
          pieceYellow.style.top = "520px";
        }
        if (yellowPosition == 40) {
          pieceYellow.style.left = "40px";
          pieceYellow.style.top = "520px";
        }
      

        //41 to 50
        if (yellowPosition == 41) {
          pieceYellow.style.left = "40px";
          pieceYellow.style.top = "440px";
          //Snake: 41-19
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "120px";
                pieceYellow.style.top = "680px";
                yellowPosition = 19
              }, 600
            );
          }
        }
        if (yellowPosition == 42) {
          pieceYellow.style.left = "120px";
          pieceYellow.style.top = "440px";
        }
        if (yellowPosition == 43) {
          pieceYellow.style.left = "200px";
          pieceYellow.style.top = "440px";
        }
        if (yellowPosition == 44) {
          pieceYellow.style.left = "280px";
          pieceYellow.style.top = "440px";
        }
        if (yellowPosition == 45) {
          pieceYellow.style.left = "360px";
          pieceYellow.style.top = "440px";
        }
        if (yellowPosition == 46) {
          pieceYellow.style.left = "440px";
          pieceYellow.style.top = "440px";
        }
        if (yellowPosition == 47) {
          pieceYellow.style.left = "510px";
          pieceYellow.style.top = "440px";
        }
        if (yellowPosition == 48) {
          pieceYellow.style.left = "600px";
          pieceYellow.style.top = "440px";
        }
        if (yellowPosition == 49) {
          pieceYellow.style.left = "680px";
          pieceYellow.style.top = "440px";
        }
        if (yellowPosition == 50) {
          pieceYellow.style.left = "760px";
          pieceYellow.style.top = "440px";
        }

        //51 to 60
        if (yellowPosition == 51) {
          pieceYellow.style.left = "760px";
          pieceYellow.style.top = "360px";
        }
        if (yellowPosition == 52) {
          pieceYellow.style.left = "680px";
          pieceYellow.style.top = "360px";
        }
        if (yellowPosition == 53) {
          pieceYellow.style.left = "600px";
          pieceYellow.style.top = "360px";
        }
        if (yellowPosition == 54) {
          pieceYellow.style.left = "520px";
          pieceYellow.style.top = "360px";
        }
        if (yellowPosition == 55) {
          pieceYellow.style.left = "440px";
          pieceYellow.style.top = "360px";
        }
        if (yellowPosition == 56) {
          pieceYellow.style.left = "360px";
          pieceYellow.style.top = "360px";
        }
        if (yellowPosition == 57) {
          pieceYellow.style.left = "280px";
          pieceYellow.style.top = "360px";
          //Ladder: 57-83
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "200px";
                pieceYellow.style.top = "120px";
                yellowPosition = 83
              }, 600
            );
          }
        }
        if (yellowPosition == 58) {
          pieceYellow.style.left = "200px";
          pieceYellow.style.top = "360px";
          //Snake: 58-45
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "360px";
                pieceYellow.style.top = "440px";
                yellowPosition = 45
              }, 600
            );
          }
        }
        if (yellowPosition == 59) {
          pieceYellow.style.left = "120px";
          pieceYellow.style.top = "360px";
        }
        if (yellowPosition == 60) {
          pieceYellow.style.left = "40px";
          pieceYellow.style.top = "360px";
        }

        //61 to 70
        if (yellowPosition == 61) {
          pieceYellow.style.left = "40px";
          pieceYellow.style.top = "280px";
        }
        if (yellowPosition == 62) {
          pieceYellow.style.left = "120px";
          pieceYellow.style.top = "280px";
        }
        if (yellowPosition == 63) {
          pieceYellow.style.left = "200px";
          pieceYellow.style.top = "280px";
        }
        if (yellowPosition == 64) {
          pieceYellow.style.left = "280px";
          pieceYellow.style.top = "280px";
        }
        if (yellowPosition == 65) {
          pieceYellow.style.left = "360px";
          pieceYellow.style.top = "280px";
        }
        if (yellowPosition == 66) {
          pieceYellow.style.left = "440px";
          pieceYellow.style.top = "280px";
        }
        if (yellowPosition == 67) {
          pieceYellow.style.left = "510px";
          pieceYellow.style.top = "280px";
          //Ladder: 67-75
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "440px";
                pieceYellow.style.top = "200px";
                yellowPosition = 75
              }, 600
            );
          }
        }
        if (yellowPosition == 68) {
          pieceYellow.style.left = "600px";
          pieceYellow.style.top = "280px";
        }
        if (yellowPosition == 69) {
          pieceYellow.style.left = "680px";
          pieceYellow.style.top = "280px";
          //Snake: 69-31
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "760px";
                pieceYellow.style.top = "520px";
                yellowPosition = 31
              }, 600
            );
          }
        }
        if (yellowPosition == 70) {
          pieceYellow.style.left = "760px";
          pieceYellow.style.top = "280px";
        }

        //71 to 80
        if (yellowPosition == 71) {
          pieceYellow.style.left = "760px";
          pieceYellow.style.top = "200px";
        }
        if (yellowPosition == 72) {
          pieceYellow.style.left = "680px";
          pieceYellow.style.top = "200px";
          //Ladder: 72-91
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "760px";
                pieceYellow.style.top = "40px";
                yellowPosition = 91
              }, 600
            );
          }
        }
        if (yellowPosition == 73) {
          pieceYellow.style.left = "600px";
          pieceYellow.style.top = "200px";
        }
        if (yellowPosition == 74) {
          pieceYellow.style.left = "520px";
          pieceYellow.style.top = "200px";
        }
        if (yellowPosition == 75) {
          pieceYellow.style.left = "440px";
          pieceYellow.style.top = "200px";
        }
        if (yellowPosition == 76) {
          pieceYellow.style.left = "360px";
          pieceYellow.style.top = "200px";
        }
        if (yellowPosition == 77) {
          pieceYellow.style.left = "280px";
          pieceYellow.style.top = "200px";
        }
        if (yellowPosition == 78) {
          pieceYellow.style.left = "200px";
          pieceYellow.style.top = "200px";
        }
        if (yellowPosition == 79) {
          pieceYellow.style.left = "120px";
          pieceYellow.style.top = "200px";
        }
        if (yellowPosition == 80) {
          pieceYellow.style.left = "40px";
          pieceYellow.style.top = "200px";
        }
        //81 to 90
        if (yellowPosition == 81) {
          pieceYellow.style.left = "40px";
          pieceYellow.style.top = "120px";
        }
        if (yellowPosition == 82) {
          pieceYellow.style.left = "120px";
          pieceYellow.style.top = "120px";
        }
        if (yellowPosition == 83) {
          pieceYellow.style.left = "200px";
          pieceYellow.style.top = "120px";
        }
        if (yellowPosition == 84) {
          pieceYellow.style.left = "280px";
          pieceYellow.style.top = "120px";
        }
        if (yellowPosition == 85) {
          pieceYellow.style.left = "360px";
          pieceYellow.style.top = "120px";
        }
        if (yellowPosition == 86) {
          pieceYellow.style.left = "440px";
          pieceYellow.style.top = "120px";
        }
        if (yellowPosition == 87) {
          pieceYellow.style.left = "510px";
          pieceYellow.style.top = "120px";
        }
        if (yellowPosition == 88) {
          pieceYellow.style.left = "600px";
          pieceYellow.style.top = "120px";
          //Snake: 88-74
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "520px";
                pieceYellow.style.top = "200px";
                yellowPosition = 74
              }, 600
            );
          }
        }
        if (yellowPosition == 89) {
          pieceYellow.style.left = "680px";
          pieceYellow.style.top = "120px";
        }
        if (yellowPosition == 90) {
          pieceYellow.style.left = "760px";
          pieceYellow.style.top = "120px";
        }

        //90 to 100
        if (yellowPosition == 91) {
          pieceYellow.style.left = "760px";
          pieceYellow.style.top = "40px";
        }
        if (yellowPosition == 92) {
          pieceYellow.style.left = "680px";
          pieceYellow.style.top = "40px";
        }
        if (yellowPosition == 93) {
          pieceYellow.style.left = "600px";
          pieceYellow.style.top = "40px";
        }
        if (yellowPosition == 94) {
          pieceYellow.style.left = "520px";
          pieceYellow.style.top = "40px";
        }
        if (yellowPosition == 95) {
          pieceYellow.style.left = "440px";
          pieceYellow.style.top = "40px";
        }
        if (yellowPosition == 96) {
          pieceYellow.style.left = "360px";
          pieceYellow.style.top = "40px";
        }
        if (yellowPosition == 97) {
          pieceYellow.style.left = "280px";
          pieceYellow.style.top = "40px";
        }
        if (yellowPosition == 98) {
          pieceYellow.style.left = "200px";
          pieceYellow.style.top = "40px";
        }
        if (yellowPosition == 99) {
          pieceYellow.style.left = "120px";
          pieceYellow.style.top = "40px";
          //Snake: 99-56
          if (diceRoll == squaresAdvanced) {
            setTimeout (
              function() {
                pieceYellow.style.left = "360px";
                pieceYellow.style.top = "360px";
                yellowPosition = 56
              }, 600
            );
          }
        }
        if (yellowPosition == 100) {
          pieceYellow.style.left = "40px";
          pieceYellow.style.top = "40px";
        }
      }

      //End the function loop
        if (diceRoll == squaresAdvanced) {
        
        if (diceRoll == 6) {
          playerTurn--
        }

        if (diceRoll !== 6) {
          if (textTurn == 4) {textTurn -= 3}
          else {
            textTurn++
          }
          if (playerTurn == 1 && redPosition >= 100) {
            playerTurn = 2
            textTurn = 3
          }
          if (playerTurn == 2 && greenPosition >= 100) {
            playerTurn = 3
            textTurn = 4
          }
          if (playerTurn == 3 && yellowPosition >= 100) {
            playerTurn = 4
            textTurn = 1
          }
          if (playerTurn == 4 && bluePosition >= 100) {
            playerTurn = 1
            textTurn = 2
          }
          //The above if statments are repeated to ensure the switch between playerTurn is completed. 
          if (playerTurn == 1 && redPosition >= 100) {
            playerTurn = 2
            textTurn = 3
          }
          if (playerTurn == 2 && greenPosition >= 100) {
            playerTurn = 3
            textTurn = 4
          }
          if (playerTurn == 3 && yellowPosition >= 100) {
            playerTurn = 4
            textTurn = 1
          }
          
        }
        
        if (textTurn == 1) {
          blueStatus.style.display = "block"
          redStatus.style.display = "none"
          greenStatus.style.display = "none"
          yellowStatus.style.display = "none"
        } 
        if (textTurn == 2) {
          blueStatus.style.display = "none"
          redStatus.style.display = "block"
          greenStatus.style.display = "none"
          yellowStatus.style.display = "none"
        }
        if (textTurn == 3) {
          blueStatus.style.display = "none"
          redStatus.style.display = "none"
          greenStatus.style.display = "block"
          yellowStatus.style.display = "none"
        }
        if (textTurn == 4) {
          blueStatus.style.display = "none"
          redStatus.style.display = "none"
          greenStatus.style.display = "none"
          yellowStatus.style.display = "block"
        }

        clearInterval(StopPieceAdvance)
        //Enable btnRoll
        btnRoll.disabled = false

      }
    }
  }
}
function setup() {
  createCanvas(1500, 850);
}


function draw() {
  //The pieces container
  fill(125, 125, 125, 0.75)
  rect(900, 400, 150, 150, 20);

  //board grid
  translate(30, 30);
  //(Learned translate from p5.js reference)
  let boardSq_X = -80;
  let boardSq_Y = 0;
  let boardLoopCount = 0;
  let gridMovingRight = true;
  while (boardLoopCount < 100) {

    if (boardSq_Y == 0 && boardLoopCount >= 10) {
      boardSq_Y = 80;
      boardSq_X = 800;
      gridMovingRight = false;
    }
    if (boardSq_Y == 80 && boardLoopCount >= 20) {
      boardSq_Y = 160;
      boardSq_X = -80;
      gridMovingRight = true;
    }
    if (boardSq_Y == 160 && boardLoopCount >= 30) {
      boardSq_Y = 240;
      boardSq_X = 800;
      gridMovingRight = false;
    }
    if (boardSq_Y == 240 && boardLoopCount >= 40) {
      boardSq_Y = 320;
      boardSq_X = -80;
      gridMovingRight = true;
    }
    if (boardSq_Y == 320 && boardLoopCount >= 50) {
      boardSq_Y = 400;
      boardSq_X = 800;
      gridMovingRight = false;
    }
    if (boardSq_Y == 400 && boardLoopCount >= 60) {
      boardSq_Y = 480;
      boardSq_X = -80;
      gridMovingRight = true;
    }
    if (boardSq_Y == 480 && boardLoopCount >= 70) {
      boardSq_Y = 560;
      boardSq_X = 800;
      gridMovingRight = false;
    }
    if (boardSq_Y == 560 && boardLoopCount >= 80) {
      boardSq_Y = 640;
      boardSq_X = -80;
      gridMovingRight = true;
    }
    if (boardSq_Y == 640 && boardLoopCount >= 90) {
      boardSq_Y = 720;
      boardSq_X = 800;
      gridMovingRight = false;
    }

    //Draw every other square blue
    if (boardLoopCount % 2 == 0) {fill(189, 216, 238)}
    else {fill(255)}

    //Ensure continuous draw pattern
    if (gridMovingRight == true) {
      boardSq_X += 80;
    }
    else {boardSq_X -= 80;} 


    rect(boardSq_X, boardSq_Y, 80,80)
    boardLoopCount ++;
  } 


  //Grid Number Labels
  let sqNumberLoopCount = 0;
  let sqNumberValue = 100;
  let sqNumber_X = 50;
  let sqNumber_Y = 20;
  let labelMovingRight = true;

  while (sqNumberLoopCount < 100) {
    
    if (sqNumber_X == 130 && sqNumber_Y == 20 && sqNumberLoopCount >= 1) {
        sqNumber_X = 138;
    }

    if (sqNumber_Y == 20 && sqNumberLoopCount >= 10) {
      sqNumber_Y = 100;
      sqNumber_X = 778;
      labelMovingRight = false
    }
    if (sqNumber_Y == 100 && sqNumberLoopCount >= 20) {
      sqNumber_Y = 180;
      sqNumber_X = 58;
      labelMovingRight = true;
    }
    if (sqNumber_Y == 180 && sqNumberLoopCount >= 30) {
      sqNumber_Y = 260;
      sqNumber_X = 778;
      labelMovingRight = false;
    }
    if (sqNumber_Y == 260 && sqNumberLoopCount >= 40) {
      sqNumber_Y = 340;
      sqNumber_X = 58;
      labelMovingRight = true;
    }
    if (sqNumber_Y == 340 && sqNumberLoopCount >= 50) {
      sqNumber_Y = 420;
      sqNumber_X = 778;
      labelMovingRight = false;
    }
    if (sqNumber_Y == 420 && sqNumberLoopCount >= 60) {
      sqNumber_Y = 500;
      sqNumber_X = 58;
      labelMovingRight = true;
    }
    if (sqNumber_Y == 500 && sqNumberLoopCount >= 70) {
      sqNumber_Y = 580;
      sqNumber_X = 778;
      labelMovingRight = false;
    }
    if (sqNumber_Y == 580 && sqNumberLoopCount >= 80) {
      sqNumber_Y = 660;
      sqNumber_X = 58;
      labelMovingRight = true;
    }
    if (sqNumber_Y == 660 && sqNumberLoopCount >= 90) {
      sqNumber_Y = 740;
      sqNumber_X = 778;
      labelMovingRight = false;
    }
    if (sqNumber_X == 138 && sqNumber_Y == 740 && sqNumberLoopCount >= 91) {
        sqNumber_X = 146;
    }
    fill(0)
    textSize(15);
    text(sqNumberValue, sqNumber_X, sqNumber_Y);

    //Ensure continuous drawing pattern
    if (labelMovingRight == true) {
      sqNumber_X += 80;
    }
    else {sqNumber_X -= 80;} 
    
    sqNumberValue --
    sqNumberLoopCount ++
  } 
}
