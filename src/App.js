import React from 'react'
import './App.css'
import Logo from './mictin.jpeg'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Michael Martin!</p>
        <img src={Logo} alt='' height='200px' />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
