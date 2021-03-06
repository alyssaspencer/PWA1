JS

// self-executing function
(function(){
    //player name
    var playerOneName = "Wolverine";
    var playerTwoName = "The Hulk";

    //player damage
    var playerOneDamage = 20;
    var playerTwoDamage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    var round=0;

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            //The next two variables determine what the minimum possible damage is for each player
            var minDamage1 = playerOneDamage * .5;
            var minDamage2 = playerTwoDamage * .5;

            //The next two variables are picking a random number to reduce from the player's health points
            var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);

            //Subtracting the points determined by the previous random numbers from the player's health.
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            //Checking for a winner
            var result = winnerCheck();
            console.log(result);
            //If the result is no winner then start another round and update the alert with the new values.
            //If the result is winner (else) then the alert screen will display the winner and tell the function to stop running.
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

        };
    };


    // Function to check the health scores to determine if there is a winner.
    function winnerCheck(){
        //Setting result to no winner by default.
        //If player one's health and player two's health are less than one then both players are dead.
        //Setting the result variable to match the scenario
        // If player one's health is less than 1 then player two is the winner and the result is updated appropriately.
        // If player two's health is less than 1 then player two is the winner and the result is updated appropriately.
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
        //Returning the result so that the fight function knows if there has been a winner or not.
        return result;
    };

    //Here the fight function is run until a win/lose scenario has been met.
    fight();

})();
