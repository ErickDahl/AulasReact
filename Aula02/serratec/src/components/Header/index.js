import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';

const Header = ({title}) => {
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

      <Title>{title}</Title>
    </>
  )
}

export default Header;