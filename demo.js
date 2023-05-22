let jonSnowHealth = 100 

// let newjonSnowHealth = Boolean(jonSnowHealth)
// console.log(jonSnowHealth)
// console.log(newjonSnowHealth) 
// console.log(typeof newjonSnowHealth)//typeof allows us to see what a value is ie is it string or number or boolean etc 

let theWinnerIs = `Jamie is the winner!`

let newWinner = theWinnerIs.replace(`Jamie`, `Jon`)

console.log(newWinner)

//we wnat to ask a condition in an if statement to check to see if Jon was the winner 

if (newWinner.includes(`Jon`)) {
    console.log(`replaced successfully`)
}  else {
    console.log(`failed!`)
}

//to put the `Jon is the winner into kabob case 

let newWinnerSplit = newWinner.split(` `) //creates an array with by the spaces between the words

console.log(newWinnerSplit)

let newWinnerJoin = newWinnerSplit.join(`-`)
console.log(newWinnerJoin)

let kebabCase = newWinnerJoin.toLowerCase()
console.log(kebabCase)

// Lets create a new function! 

//creating a simple function using an if statement to see if Jon is still alive 


// function isJonAlive(attack) {  //attack is a parameter that we must now have in order to envoke the perameter 
//     jonSnowHealth -= attack 
//     console.log(`Jon Snow's health is ${jonSnowHealth}`)
//     if (jonSnowHealth > 0) {
//         console.log(`John is alive!`)
//     } else (
//         console.log(`John is dead`)
//     )
// }

// isJonAlive(20) //this is how we envoke this function 
// isJonAlive(45)

function isJonAlive() { 
    if (jonSnowHealth > 0) {
        console.log(`John is alive!`)
    } else (
        console.log(`John is dead.`)
    )
}

function supriseAttack (attack) {
    jonSnowHealth -=attack 
    console.log(jonSnowHealth)
    isJonAlive()                    //we can envoke a function within another function 
}

supriseAttack(20)
supriseAttack(40)
supriseAttack(10)
supriseAttack(30)

function rollDice() {
    let possibleRoles = [1, 2, 3, 4, 5, 6]
    let randomIndex = Math.floor(Math.random() * possibleRoles.length) //this will pull from the above array's index which is only 1-5
    return possibleRoles[randomIndex]               // this will take the random index # and apply thos to possible roles array and then output that number 
}
let rollDice1 = rollDice()
let rollDice2 = rollDice()
console.log(`roll dice 1: ${rollDice1}` , `roll dice 2: ${rollDice2}`)