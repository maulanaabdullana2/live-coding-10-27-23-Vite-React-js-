import Calculator from "./components/Calculator"
import Header from "./components/Header"
import Result from "./components/Result"
import { useState } from 'react'

function App() {
  const[userInput,setUserInput]= useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn:5,
    duration:10
})

const durationisValid = userInput.duration>0
function heanldeuserInput(inputKey,newValue){
  console.log(newValue);
    setUserInput(exitingUserInput =>{
        return{
            ...exitingUserInput,
            [inputKey]:+newValue
        }
    })
}
  return (
    <>
        <Header />
        <Calculator onChangeProps={heanldeuserInput} userInput={userInput}/>
        {!durationisValid&& <p className="center">Masukan Duration 0</p>}
        {durationisValid&& <Result resultInput={userInput} />}
    </>
  
  )
  
}

export default App
