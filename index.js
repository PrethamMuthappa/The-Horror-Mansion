#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let player_name;

let sleep=(ms=1000)=>new Promise((r)=>setTimeout(r,ms));

async function welcome(){

    let gametitle=chalkAnimation.rainbow('WELCOME TO : THE HORROR MANSION');
    await sleep();
    gametitle.stop();

    console.log(`
    ${chalk.green('HOW TO PLAY')}

    YOU WILL BE GIVING A SERIES OF OPTION REGARDING THE STORY,
    EVERY OPTION WILL AFFECT YOUR GAMEPLAY AND THE STORY..HOPE
    YOU HAVE FUN , THANK YOU ........`)

    await sleep();

    console.log(chalk.red(`
    You find yourself in a dark, abandoned mansion..................................
    The air is heavy with an eerie silence, and a sense of dread fills the atmosphere
    Are you brave enough to uncover the secrets within?..................
    Let's begin!.
    `))
  
}
async function playername(){

    let answer= await inquirer.prompt({

        name:'playerdata',
        type:'input',
        message:'WHAT IS YOUR NAME',
        default(){
            return this.name
        }
    })

    player_name = answer.playerdata;

    console.log(chalk.bgMagentaBright(`WELCOME ${player_name}`));

    await sleep();
}

async function classtype(){
 
    let ctype= await inquirer.prompt({
       
        name:'cname',
        type:'list',
        message:'enter ur choice',
        choices:[
            'PARANORMAL INVESTIGATOR',
            'CURIOUS ADBENTURER',
            'NERDY BOY',
            'NERDY GIRL',
        ],
    })

    console.log(`you are a ${ctype.cname}`)

  await sleep();
}

async function begin(){

    console.log(chalk.redBright(`
    Your journey into darkness begins now...
    You stand in the grand entrance hall of the mansion.
    As you gaze around, you notice a flickering candle on a nearby table and a staircase leading upstairs.
    `))

    await sleep();

    let choice1=await inquirer.prompt({

        name:"candle",
        type:'list',
        message: chalk.greenBright('what do you do'),
        choices:[
            'EXAMINE THE CANDLE',
            'ASCEND THE STAIRCASE',
            'LOOK FOR CLUES',
            'QUIT THE GAME'
        ],
    })

    if(choice1.candle=='EXAMINE THE CANDLE'){

        const spinner=createSpinner();
        spinner.success(option1())
        await sleep();
    }

    
    if(choice1.candle=='ASCEND THE STAIRCASE'){

        const spinner=createSpinner();
        spinner.success(option2())
        await sleep();
    }

    if(choice1.candle=='LOOK FOR CLUES'){

        const spinner=createSpinner();
        spinner.success(option3())
        await sleep();
    }
    
    if(choice1.candle=='QUIT THE GAME'){

        const spinner=createSpinner();
        spinner.success()
        process.exit(1);
        
    }

}

function option1(){

    console.log(chalk.redBright(`
    You approach the flickering candle.
    As you get closer, a cold breeze blows it out, plunging the room into darkness
    You hear a faint whisper echoing through the halls...
    `))
  
    
    
    candle_encounted();
}

function option2(){

    console.log(chalk.redBright(`
    You cautiously ascend the creaking staircase
    Each step sends shivers down your spine as you reach the landing
    The hallway is dimly lit, and several doors line the corridor.
    `))

    
    staircase_encounter();
}

function option3(){

    console.log(chalk.redBright(`
    You search the area for clues
    In a dusty corner, you discover an old diary
    Its pages are filled with chilling tales of the mansion's past
    As you read, you can't help but feel a presence watching you...
    `))
   
    
    clue_searching();
}


///////////////////////////////////////////////

async function candle_encounted(){

    console.log(chalk.redBright(`
    As the candle extinguishes, you hear the sound of footsteps approaching
    A ghostly apparition appears before you, its hollow eyes staring into your soul
    The ghost whispers in a haunting voice, 'Only those who prove their worth shall escape.
    Suddenly, the ghost disappears, leaving you in darkness
    `))

    

    let candleenchoice=await inquirer.prompt({
        name:"candle",
        type:'list',
        message:chalk.greenBright('what do you do'),
        choices:[
            'Light the candle again',
            'Stay in the darkness',
        ],
        
    })

    if(candleenchoice.candle=='Light the candle again'){

        const spinner=createSpinner();
        spinner.success(one())
        await sleep();
    }

    function one(){
   
        console.log(chalk.redBright(`
        You relight the candle, illuminating the room once more`))

      return candlerelight()  
    }

    async function candlerelight(){

        console.log(chalk.redBright(`
        You reach out and grab the candle, feeling the cool wax against your skin
        With a steady hand, you strike a match and ignite the wick
        The room is bathed in a warm, flickering light once again
        As you look around, you notice a small key resting on the table
        
        `))

        let candlerelight=await inquirer.prompt({

            name:'relight',
            type:'list',
            message:'what do you do',
            choices:[
                'take the key',
                'investigate the surrounding further',
            ]

        })

        if(candlerelight.relight=='take the key'){
            console.log(chalk.redBright(`you pick up the key and add it to your inventory`))
            //add key logic

            return keycollect();

            async function keycollect(){

                console.log(chalk.redBright(`
                You reach out and pick up the key from the table.
                The key feels cold and heavy in your hand
                With the key in your possession, you feel a glimmer of hope
                you try to unlock the door using the key and you exit!!!

                congrats you get out alive!!!!!!
                `))

                process.exit(1)


            } 
        }

        if(candlerelight.relight=='take the key'){
            console.log(chalk.redBright(`You carefully examine the surroundings, searching for any additional clues`))
            
        }
    }   
        


    if(candleenchoice.candle=='Stay in the darkness'){

        const spinner=createSpinner();
        spinner.success(stay())
    }

    
    async function stay(){

        console.log(chalk.redBright(`
        You choose to stay in the darkness, feeling a sense of unease
        Suddenly, you hear a bone-chilling laugh and feel a cold touch on your shoulder
        The darkness consumes you...

        END!!!!!!!!!!!!
        `))
    }
}

//////////////////////////////staircase////////////////////


async function staircase_encounter(){

    console.log(chalk.redBright(`
    You cautiously explore the hallway
    As you approach one of the doors, you hear faint whispers coming from behind it
    `))


    

    let stairchoice=await inquirer.prompt({
        name:"stair",
        type:'list',
        message:chalk.greenBright('what do you do'),
        choices:[
            'Open the door',
            'Ignore the door and continue down the hallway',
            'Knock on the door'
        ],
        
       
    })

    if(stairchoice.stair=='Open the door'){
      
        const spinner=createSpinner();
        spinner.success()

    }

    if(stairchoice.stair=='Ignore the door and continue down the hallway'){
      
        const spinner=createSpinner();
        spinner.success()

    }

    if(stairchoice.stair=='Knock on the door'){
      
        const spinner=createSpinner();
        spinner.success()

    }
}

async function clue_searching(){

    console.log(chalk.redBright(`
    You carefully scan the area, hoping to find valuable clues
    After a thorough search, you notice a peculiar painting on the wall
    Its frame seems slightly askew, as if it can be moved
    `))

    // add chices

    let cluechoice=await inquirer.prompt({
        name:"clue",
        type:'list',
        message:chalk.greenBright('what do you do'),
        choices:[
            'Move the painting',
            'Continue searching the room',
            'Leave the room and explore elsewhere'
        ],
        
       
    })

    if(cluechoice.clue=='Move the painting'){

        const spinner= createSpinner();
        spinner.success();
    }
    
    if(cluechoice.clue=='Continue searching the room'){

        const spinner= createSpinner();
        spinner.success();
    }

    if(cluechoice.clue=='Leave the room and explore elsewhere'){

        const spinner= createSpinner();
        spinner.success();
    }
}


await welcome();
await playername();
await classtype();
await begin();

