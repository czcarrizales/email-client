import React from 'react'
import './CreateMessage.css'

const CreateMessage = () => {
  return (
    <div className="row">
        <div className="col">
        <form action="">
            <div id='create-message-to'>
            <input className='form-control create-message-input' type="text" placeholder='To:' />
            </div>
            <div id='create-message-subject'>
            <input className='form-control create-message-input' type="text" placeholder='Subject Title' />
            </div>
            <div id='create-message-text'>
            <textarea className='form-control create-message-input' name="" id="" cols={30} rows={10}></textarea>
            </div>
            
            <div id='create-message-submit'>
            <input className='btn btn-primary btn-block create-message-input' type="submit" />
            </div>
            
        </form>
        </div>
        
    </div>
  )
}

export default CreateMessage