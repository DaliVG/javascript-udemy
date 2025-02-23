const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 17;
const STRONG_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const STRONG_MODE_ATTACK = 'STRONG_ATTACK'
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum lkife for you and the monster:', '100');
let battleLog = [];
let chosenMaxLife = parseInt(enteredValue);
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

if(isNaN(chosenMaxLife) || chosenMaxLife<= 0){
    chosenMaxLife = 100;
}
adjustHealthBars(chosenMaxLife);

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

    writeToLog(
        LOG_EVENT_MONSTER_ATTACK, 
        playerDamage, 
        currentMonsterHealth, 
        currentPlayerHealth);

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You would be dead but the bonus life saved you!");
  }
  
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
    writeToLog(LOG_EVENT_GAME_OVER, 
        'PLAYER WON', 
        currentMonsterHealth, 
        currentPlayerHealth);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
    writeToLog(LOG_EVENT_GAME_OVER, 
        'MONSTER WON', 
        currentMonsterHealth, 
        currentPlayerHealth);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
    writeToLog(LOG_EVENT_GAME_OVER, 
        'DRAAAAAAW!', 
        currentMonsterHealth, 
        currentPlayerHealth);
  }
  if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0
  ){
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  let logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
  
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent,
    damage, 
    currentMonsterHealth, 
    currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(STRONG_MODE_ATTACK);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can not heal to more than your max initial health.");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(LOG_EVENT_PLAYER_HEAL, 
    healValue, 
    currentMonsterHealth, 
    currentPlayerHealth);
  endRound();
}

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function writeToLog(event, value, monsterHealth, playerHealth){
    let logEntry;
    if(event === LOG_EVENT_PLAYER_ATTACK){
        logEntry = {
            event: event,
            value: value,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    } else if(event === LOG_EVENT_PLAYER_STRONG_ATTACK){
        logEntry = {
            event: event,
            value: value,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    } else if (event === LOG_EVENT_MONSTER_ATTACK){
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    } else if (event === LOG_EVENT_PLAYER_HEAL){
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    } else if(event === LOG_EVENT_GAME_OVER){
        logEntry = {
            event: event,
            value: value,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    }
    battleLog.push(logEntry);
}

function printLogHandler(){
    for (let i = 0; i < 3; i++) {
        console.log('- - - - - - - - - -');
      }
      for (const logEntry of battleLog) {
        console.log(logEntry);
      }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler)