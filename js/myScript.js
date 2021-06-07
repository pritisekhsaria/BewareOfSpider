
/*

Beware of the spider - myScript.js - final

In this file we are 
1. just checking if we have clicked on the spider or 10 butterflies
2. removing pointer cursor
3. showing butterfly
4. showing spiderweb
5. checking if game is active
6. checking if we have clicked on this image before

*/

var randomNum = Math.floor((Math.random() * 12) + 1);
alert(randomNum);
var clickCounter = parseInt(0);

var gameActive = true; //will become false to deactivte function at game end

var btnClickedArr = [];
var btnClickedArrCount = parseInt(0);
var btnNotClicked = true;

var butterflyArr = ["one.jpg","two.jpg","three.jpg","four.jpg","five.jpg","six.jpg","seven.jpg","eight.jpg","nine.jpg","ten.jpg","eleven.jpg"];
var butterflyArrCount = parseInt(0);

function boom(btn)
{
	btnNotClicked = true;

	if(gameActive)  //will become false to deactivte function after bomb blast
	{
		if(btn==randomNum)
		{
			alert("Aaaarrrrgggghhhh!!! \nYou found the Spider!!!");
			document.getElementById(btn).src="img/spider.gif";
			document.getElementById(btn).style.border = "red 3px outset";
			document.getElementById("msg").innerHTML="You Lose, Better Luck Next Time!!!";

			document.getElementById(btn).classList.remove("img-cursor");

  			document.getElementById("web").style.display = "block";
  			document.getElementById("web").classList.add("transition");
			
			gameActive = false; //to stop further execution of prg
			deactivate();
		}
		else
		{
			for(var i=0;i<btnClickedArr.length;i++)
			{
				if(btnClickedArr[i]==btn)
				{
					btnNotClicked = false;
				}
			}
			if(btnNotClicked)
			{
				btnClickedArr[btnClickedArrCount] = btn;
				btnClickedArrCount++;

				clickCounter++;
				document.getElementById(btn).src="img/"+butterflyArr[butterflyArrCount];
				document.getElementById(btn).classList.remove("img-cursor");
				butterflyArrCount++;

				if(clickCounter==10)
				{
					document.getElementById(randomNum).src="img/spider.gif";
					document.getElementById(randomNum).classList.remove("img-cursor");
					document.getElementById(randomNum).style.border = "red 3px outset";
					document.getElementById("butterfly1").style.display = "block";
					document.getElementById("butterfly2").style.display = "block";
					document.getElementById("msg").innerHTML="Congratulations, You Won!!!<br/><span style='font-size:20px'>The spider was on position "+randomNum+"</span>";
					alert("Congratulations!!!");
					
					gameActive = false;  //to stop further execution of prg
					deactivate();
				}
			}
		}
	}
}


//changing cursor from pointer to default to show deactivated state
function deactivate()
{
	for(var i=1; i<=12; i++)
	{
		document.getElementById(i).classList.remove("img-cursor");
	}
}

