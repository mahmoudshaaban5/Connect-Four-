var start = 0;
function myFunction()
{

  start = 1;

}




function checkWinner(arr) {
    // row
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        let k = j,
          step = 0,
          x = arr[i][k];
        while (k < 7 && step < 4 && x && arr[i][k] == x) {
          step++;
          k++;
        }
        if (step == 4) {
          return x;
        }
      }
    }
    // col
    for (let j = 0; j < 7; j++) {
      for (let i = 0; i < 6; i++) {
        let k = i,
          step = 0,
          x = arr[k][j];
        while (k < 6 && step < 4 && x && arr[k][j] == x) {
          step++;
          k++;
        }
        if (step == 4) {
          return x;
        }
      }
    }
  
   
    return 0;
  }
  
  function checkEnd(arr)
  {
  
    for(let i=0 ; i<6 ; i++)
    {
      for(let j=0 ; j<7 ; j++)
      {
        if(arr[i][j] == 0)
        return false;
  
      }
    }
    return true;
  
  }
  
  let endGame = false;
  let playerTurn = true;
  
  const playersMoves = [];
  
  const getRandomPosition = () => {
    const randomPositions = [0, 1, 2, 3, 4, 5, 6];
  
    for (;;) {
      const randomIndex = parseInt(Math.floor(Math.random() * 7));
      const randomPos = randomPositions[randomIndex];
  
      if (randomPos === -1) continue;
  
      randomPositions[randomIndex] = -1;
  
      if (playersMoves[0][randomPos] === 0) {
        return randomPos;
      }
  
      let allChecked = true;
  
      for (let i = 0; i < randomPositions.length; i++) {
        if (randomPositions[i] !== -1) {
          allChecked = false;
        }
      }
  
      if (allChecked) {
        return false;
      }
    }
  };
  
  const initGame = () => {
    for (let i = 0; i < 6; i++) {
      playersMoves.push([0, 0, 0, 0, 0, 0, 0]);
    }
  };
  
  initGame();
  
  
  const playerMove = (spanEvent) => {
  if (start == 1)
  {
    if(endGame) return ;
    
    const id = typeof spanEvent === 'number' ? spanEvent : parseInt(spanEvent.target.id[spanEvent.target.id.length - 1]);
      let played = false; 
    for (let j = 5; j >= 0; j--) {
      if (playersMoves[j][id] === 0) {
        played = true;
        const circle = document.getElementById(`circle${j}${id}`);
        console.log(playersMoves);
        if(!playerTurn)
        {
          setTimeout(()=>{circle.classList.add('player-two') }, 400);
        }
        else
        circle.classList.add('player-one');
        playersMoves[j][id] = playerTurn ? 1 : 2;
        if (checkEnd(playersMoves) || spanEvent === false )
          {
                  setTimeout(() => {
                      if(confirm(" game end would yo like to play agin ?"))
                      {
                          location.reload();
                      }
                      else 
                      {
                          location.replace("startpage.html")
                      }
               }, 100);
           }
        break;
      }
    }
     if(!played)
     return;
  
    const winner = checkWinner(playersMoves);
  
    if (winner) {
      endGame = true;
      setTimeout(() => {
        if (confirm(`${winner === 1 ? ` ${ localStorage.getItem("name") } ` : 'Computer'} wins, Play again?`)) {
          location.reload();
        } else {
          ////eddit
          location.replace("startpage.html")
        }
      }, 100);
    }
    
  
    if (playerTurn) {
      playerTurn = false;
      playerMove(getRandomPosition());
      playerTurn = true;
    }

    }    
  }
  