import Die from "./Die"
import { useEffect, useState, useRef } from "react"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

function App() {

  const [dices, setDices] = useState(() => generateAllNewDice())
  const buttonRef = useRef(null);

  const gameWon = dices.every(die => die.isHeld) && 
        dices.every(die => die.value === dices[0].value)

  useEffect(() => {
    if(gameWon){
      buttonRef.current.focus()
    }
  }, [gameWon])



  function generateAllNewDice(){
    return new Array(10)
               .fill(0)
               .map(() => ({
                value: Math.ceil(Math.random() * 6), 
                isHeld:false,
                id:nanoid()
           }))
  }

  function rollDice(){
    if(gameWon){
      setDices(generateAllNewDice())
    }
    else{
      setDices((prevDices) => (prevDices.map(
      (diceObj) => diceObj.isHeld? diceObj : ({
        ...diceObj,
        value:Math.ceil(Math.random() * 6) 
      })
    )))
    }
  }

  function hold(id){
    setDices((prevDices) => (prevDices.map(
      (dieObj) => ({
        ...dieObj,
        isHeld: dieObj.id === id ? !dieObj.isHeld : dieObj.isHeld
      })
    )))
  }

  const dicesElements = dices.map( dieObj => <Die 
    key = {dieObj.id} 
    value={dieObj.value} 
    isHeld={dieObj.isHeld} 
    hold={hold}
    id = {dieObj.id} 
/>
  )

  

  return (
    <main>
      {gameWon && <Confetti/>} 
      <div aria-live="polite" className="sr-only">
          {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="buttonsContainer">
        {dicesElements}
      </div>
      <button onClick={rollDice}  className="roll-dice" ref={buttonRef}>
        {gameWon ? "New Game" : "Roll"}
        </button>
    </main>
  )
}

export default App