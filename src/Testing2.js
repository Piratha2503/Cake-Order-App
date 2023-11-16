import React from 'react'

function Testing2(props) {

const {myMessage} = props
const boolArray = props.testArray

//props.checkArray.forEach(a=>console.log(a))
//console.log(props.boolRes)
//props.testArray.forEach(a=>console.log(a))
//for(let x in props.boolRes) console.log(x)
Object.entries(props.boolRes).forEach((a,b)=>console.log(`${a}+${b}`))
  return (
    <div>
      <h1 style={{color:'green'}}>{myMessage.name}</h1>
      <h2 style={{color:'red'}}>{myMessage.age}</h2>
      <h3 style={{color:'blue'}}>{myMessage.Address}</h3>

    </div>
  )
}

export default Testing2
