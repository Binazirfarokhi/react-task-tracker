import { Link } from 'react-router-dom'
import React  from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023</p>
      <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer