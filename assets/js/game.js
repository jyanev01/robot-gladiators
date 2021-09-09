// var playerName = 'Cranker'
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple value at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

if  (playerHealth > 0){
    //let players know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! ROund " + ( i+1));

    //pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames [i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    //use debugger to pause script from running and check waht's going on at that moment in the code
    debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
}

else {
    window.alert("You have lost your robot in the battle! Game Over!");
}

//fight function
var fight = function (enemyNames) {
    while(playerHealth > 0 && enemyHealth >0) {
    // Prompt- ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
   
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP" ) {
        // confirm player wants to skip
        var confirmSKip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSKip){
            window.alert (playerName + ' has decided to skip this fight. Goobye!');
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
        }
    }
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log( playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
    
    //Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + "has died!");
        
        // award player money for winning
        playerMoney = playerMoney + 20;

        //leave while() loop since enemy is dead
        break;
    }   else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }
    
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
    //check player's health
    if(playerHealth <= 0) {
        window.alert(playerName + " has died!");
        // leave while() loop if player is dead
        break;
    }   else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}        
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmskip = window.confirm("are you sure you'd like to quit?");

        // if yes (true), leave fight
        if(confirmskip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
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

for (var i = 0; i < enemyNames.length; i++) {
    debugger;
    // call fight function with enemy-robot
    fight(enemyNames[i]);
}
// run fight function to start game
var fight = function(enemyNames){
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0){
        for (var i = 0; i < enemyNames.length; i++) {
            var pickedEnemyName = enemyNames [i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
    }
    
}


