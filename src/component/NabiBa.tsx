import React from 'react'
import { useNavigate } from 'react-router-dom';

function NabiBa() {
    const navigate = useNavigate();
    const ModalClickMainDiary = () => {
        navigate('/');
    }
  return (
    <nav className="NabiBar">
      <ul>
          <li>
            <span onClick={ModalClickMainDiary}>HashTAG</span>
          </li>
          <li className="LogIn-Out">
            <div>Login</div>
            <div>Sign Up</div>
          </li>
        </ul>
    </nav>
  )
}

export default NabiBa
