//grab the messahe  tah <h3>
var msg = document.querySelector('h1');
var playerOne = document.querySelector("#p1");
var playerTwo = document.querySelector("#p2");

var playerOneWin = document.querySelector("#player1");
var playerTwoWin = document.querySelector("#player2");
localStorage.setItem("score1",0);
localStorage.setItem("score2",0);

//restart the cells
var restart = document.querySelector("#b");
var restartNew = document.querySelector("#b1");
restartNew.addEventListener("click",function(){window.location.href="";  
})

//grab all the squres
var squres = document.querySelectorAll("td");
var u1=0,u2=0;



//clear all the squres
function clearBoard() {
  for (var i = 0; i < squres.length; i++) {
    squres[i].textContent = '';
    squres[i].style.background = "#1105c4";
    squres[i].style.color = "white";
  }
  msg.textContent = "Welcome to Tic-Tac-Toe Game....!";
  msg.style.color = "black";
  //set current user

   playerOne.style.border = "10px solid red";
   playerTwo.style.border = "10px solid red";
   playerOneWin.innerHTML = "<b style='color:green;''>(X)Points: "+localStorage.getItem("score1")+"</b>";
   playerTwoWin.innerHTML = "<b style='color:green;''>(O)Points: "+localStorage.getItem("score2")+"</b>";
}
restart.addEventListener("click",clearBoard);
localStorage.setItem("user", "one");
localStorage.setItem("resume", "one");




//function for user one
function checkMarker(){
  if (localStorage.getItem('user') == 'one')
  {
    if (this.textContent === '') 
    {
      this.textContent = 'X';
      localStorage.setItem("resume","two");
    }
    else if(this.textContent === 'X')
    {
      this.textContent = '';
      localStorage.setItem("resume","one");
    }
  }
  else if(localStorage.getItem('user') == 'two')
  {
    if (this.textContent === '') 
    {
      this.textContent = 'O';
      localStorage.setItem("resume","one");
    }
    else if(this.textContent === 'O')
    {
      this.textContent = '';
      localStorage.setItem("resume","two");
    }
  }
  

  if(localStorage.getItem("resume") == 'one')
  {
    localStorage.setItem("user", "one");
    playerTwo.style.visibility = "hidden";
    playerOne.style.visibility = "visible";
  }
  
  if(localStorage.getItem("resume") == "two")
  {
    localStorage.setItem("user", "two");
    playerOne.style.visibility = "hidden";
    playerTwo.style.visibility = "visible";
  }
  checkWinner(0,1,2);checkWinner(1,4,7);checkWinner(6,7,8);
  checkWinner(0,3,6);checkWinner(2,5,8);checkWinner(2,4,6);
  checkWinner(0,4,8);checkWinner(3,4,5);

  console.log("user: "+localStorage.getItem("user")+"  resume: "+localStorage.getItem("resume")+"\n");
}





//for loop to add eventlistner to all the squres
for (var i = 0; i < squres.length; i++){
      squres[i].addEventListener('click',checkMarker);
    }




//function for check the checkWinner
function checkWinner(i1, i2, i3) {
  //conditions for user userOne
  if((squres[i1].textContent==='X' && squres[i2].textContent==='X' && squres[i3].textContent==='X')){
    squres[i3].textContent = "X";
    squres[i1].style.background = "green";
    squres[i2].style.background = "green";
    squres[i3].style.background = "green";

     squres[i1].style.color = "white";
    squres[i2].style.color = "white";
    squres[i3].style.color = "white";


    playerOne.style.visibility = "visible";
    playerOne.style.border = "10px solid green";
    playerOneWin.innerHTML = "<b style='color:green;''>Congratulations !</b>";
    var points1 = Number(localStorage.getItem("score1"))+10;
    localStorage.setItem("score1",points1);
  }
  //condition for user two
  if((squres[i1].textContent==='O' && squres[i2].textContent==='O' && squres[i3].textContent==='O')){
    squres[i3].textContent==='O';
    squres[i1].style.background = "green";
    squres[i2].style.background = "green";
    squres[i3].style.background = "green";

    squres[i1].style.color = "white";
    squres[i2].style.color = "white";
    squres[i3].style.color = "white";
   
    playerTwo.style.visibility = "visible";
    playerTwo.style.border = "10px solid green";
    playerTwoWin.innerHTML = "<b style='color:green;''>Congratulations !</b>";
    var points2 = Number(localStorage.getItem("score2"))+10;
    localStorage.setItem("score2",points2);
  }
}


//background audio
function start(){
    var audio = new Audio("game.mp3" );
    audio.play();
}