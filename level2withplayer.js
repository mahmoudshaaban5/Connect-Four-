
var start = 0;
function myFunction()
{

  start = 1;

}

function checkWinner(arr)
{
    // row  
   for(let i=0;i<6;i++)
   {
       for(let j=0;j<7;j++)
       {
           let k=j,step=0,x=arr[i][k];
           while(k<7&&step<5&&x&&arr[i][k]==x)
           {
               step++;
               k++;
           }
           if(step==5)
           {
               return x; 
              
           }
       }
   }
   // col
   for(let j=0;j<7;j++)
    {
        for(let i=0;i<6;i++)
        {
            let k=i,step=0,x=arr[k][j];
            while(k<6&&step<5&&x&&arr[k][j]==x)
            {
                step++;
                k++;
            }
            if(step==5)
            {
                return x;
            }
        }
    }

    // diagnal
    for(let i=0;i<6;i++)
    {
        for(let j=0;j<7;j++)
        {
            let x=i,y=j,val=arr[i][j],steps=0;
            while(x<6&&y<7&&val&&arr[x][y]==val&&steps<5)
            {
                x++;
                y++;
                steps++;
            }
            if(steps==5)
            {
                return val;
                
            }
        }
    }
    for(let i=0;i<6;i++)
    {
        for(let j=6;j>=0;j--)
        {
            let x=i,y=j,val=arr[i][j],steps=0;
            while(x<6&&y>=0&&val&&arr[x][y]==val&&steps<5)
            {
                x++;
                y--;
                steps++;
            }
            if(steps==5)
            {
                return val;
                
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
let firstPlayerTurn = true;

const playersMoves = [];

const initGame = () => {
  for (let i = 0; i < 6; i++) {
    playersMoves.push([0, 0, 0, 0, 0, 0, 0]);
  }

 
};
initGame();


const playerMove = (spanEvent) => {
     if (start == 1)
     {
       
              const id = parseInt(spanEvent.target.id[spanEvent.target.id.length - 1]);
                    
              for (let j = 5; j >= 0; j--) {
                if (playersMoves[j][id] === 0) {
                  const circle = document.getElementById(`circle${j}${id}`);
                  console.log(playersMoves);
                  circle.classList.add(firstPlayerTurn ? 'player-one' : 'player-two');
                  playersMoves[j][id] = firstPlayerTurn ? 1 : 2;
                  firstPlayerTurn = !firstPlayerTurn;
                  if (checkEnd(playersMoves))
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
            var winner = checkWinner(playersMoves);
              if (winner) {
                setTimeout(() => {
                  if (confirm(`${winner === 1 ? ` ${ localStorage.getItem("name") } ` :  ` ${ localStorage.getItem("nameofplayer")}`} won , Play again?`)) {
                    location.reload();
                  } else {

                    ///edit
                    location.replace("startpage.html")
                  }
                }, 100);
              }
              


     }
  
 
}



