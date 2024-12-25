import React from 'react'
import UserClass from './UserClass';

const Contact = () => {
  return (
    <div className='contact'>
    <h1>Contact Information</h1>
    <UserClass name={"Aryan"} location= {"Bangalore"} contact= {"@aryan_07"}/>
    </div>
  )
}

export default Contact;