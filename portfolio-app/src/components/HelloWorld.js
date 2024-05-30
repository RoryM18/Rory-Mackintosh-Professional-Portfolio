import React from 'react'

function HelloWorld({numberprops, name}) {

const greeting = "Hello World";
const introduction = "My Name Is Rory"
const link = "http://www.google.com"

const myStyle = {backgroundColor:'blue', padding: '10px', fontSize: '20px'}

  return (
    <div style={myStyle}>
      <div>{greeting} ! {name}</div>
      <div>{introduction}</div>
      <div>This Number is from props, {numberprops}</div>
      <a href={link}>Go To Google</a>
      <div className='call-app-css'>Call Ap CSS Class</div>
    </div>
  )
}

export default HelloWorld
