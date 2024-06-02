import React from 'react'

function Greeting() {
    
    function sayHi(name, surname){
        alert('Hi ' + name + ' ' + surname)
    }

  return (
    <div>
        <button onClick={() => sayHi('Rory', 'Mackintosh')}>Say Hi</button>
    </div>
  )
}

export default Greeting
