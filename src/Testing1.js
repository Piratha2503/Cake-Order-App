import React from 'react'
import Testing2 from './Testing2';

function Testing1() {

    const msg = {
name:"Pirathaban",
age:31,
Address:'Kokkuvil',
District:`Jaffna`
};

let checkArray = ['Invicta','Virtusha','Mithra','Axiata Digital Labs'];

let boolOb = {isAlive:true,isAged:false}

  return (
    <div>
      <Testing2 myMessage={msg} lastname={"Velrajah"} testArray={checkArray} boolRes={boolOb}/>
    </div>
  )
}

export default Testing1
