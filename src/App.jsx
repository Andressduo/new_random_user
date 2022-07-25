import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from "./json/quotes.json"
import color from "./util/colors.js"
import Button from './components/Button'


function App() {
 
const getRandomElement=arr =>{
  const random = Math.floor(Math.random()*arr.length)
  return arr[random]
}
let randomUser= getRandomElement(quotes)
let randomColor=getRandomElement(color)

const [userRandom, setUserRandom] = useState(randomUser)
const [colorRandom, setColorRandom] = useState(randomColor) 

const randomAll=()=>{
  let randomUser= getRandomElement(quotes)
  let randomColor=getRandomElement(color)
  setUserRandom(randomUser)
  setColorRandom(randomColor)
}

console.log(quotes)
console.log(color)



  return (
   <div style={{backgroundColor:`${colorRandom}`}} className="App">
      <div  className="container">
      <QuoteBox user={userRandom} color={colorRandom}/>
      <Button  color={colorRandom} random={randomAll}/>
      </div>
    </div>
  
  )
}

export default App
