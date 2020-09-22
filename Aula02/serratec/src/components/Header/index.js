import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const Header = () => {
  return (
    <>
      <Container>
        <img src={logoImg} alt="" />

        <ul>
          <li>
            <Link to='/dashboard'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to='/tarefas'>
              Tarefas
            </Link>
          </li>
        </ul>
      </Container>
    </>
  )
}

export default Header;