// var playerName = 'Cranker'
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple value at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function () {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Prompt
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
   
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT" ) {
         //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
        //Check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + "has died!");
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
        //check player's health
        if(playerHealth <= 0) {
            window.alert(pla + " has died!");
        }else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player chooses to skip
    }   else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmskip = window.confirm("are you sure you'd like to quit?");

        // if yes (true), leave fight
        if(confirmskip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }

        // if no (false), ask question again by running fight() again
        else {
            fight()
        }
        // if player did not chose 1 or 2 in prompt
    }   else {
        window.alert("You need to pick a valid option. Try again!");
    }
};


// run fight function to start game
for (var i = 0; i < enemyName.length; i++) {
    fight(enemyName[i]);
}
