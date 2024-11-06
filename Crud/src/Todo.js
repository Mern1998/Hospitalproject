import React from 'react'
import {AiFillEdit} from "react-icons/ai"
import {RxCross1} from "react-icons/rx"


function Todo() {
  return (
    <div className='todo'>
        <div className='icons'>
          <AiFillEdit className='icon'/>
          <RxCross1 className ='icon'/>
        </div>
    </div>
  )
}

export default Todo