import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greeting from './Components/Greeting'
import './App.css'
import SimpleButton from './Components/SimpleButton'
import Footer from './Components/Footer'
import Car from './Components/Car'
import Todo from './Components/Todo'


function App() {

  const carInfo = {
  carName: "Ford",
  model: "Mustang",
  color: "red",
  year: 1969
};

  return (
    
      <div>
            <Greeting name="John" age={25} />
            <SimpleButton />
            <Car carInfo={carInfo} />
            <Todo task="Buy groceries" completed={false} />
            <Footer />
      </div>
  )
}

export default App
