import React from 'react';
import './Footer.css'

const Footer = () => {
  //JS - Math,Date
  let date=new Date();
 
  return (
    <footer className='footer'>
      <h2>TodosList &copy; {date.getFullYear()}</h2>
    </footer>
  )
}

export default Footer
