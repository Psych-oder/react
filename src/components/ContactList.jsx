import React from 'react'
import {AiTwotoneEdit} from 'react-icons/ai'

export default function ContactList() {
  return (
    <div className='contactlist radius'>
        <div className='listdetail'>
            <li>1</li>
            <div className='profile'>

            <img src="" className='profileImage' alt="profileImage" />
            <div className='detail'>
                <li className='name'>Name</li>
                <li className='Contact'>Contact</li>
            </div>
            </div>

            <div>

            <span>display</span>
            <span>delete</span>
            <span>edit</span>
            </div>
        </div>
    </div>
  )
}
