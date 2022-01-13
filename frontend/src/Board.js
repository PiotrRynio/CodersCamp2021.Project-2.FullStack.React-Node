import React from 'react';
import ReactDOM from "react-dom";
import './Board.css';

const Board = (props) => {
  return (
    <div className='board'>
      <div className='board__header'>
        <div className='board__header__title'>
          <div className='board__header__title__image'>
            {props.image}
          </div>
          <div className='board__header__title__text'>
            <h1>{props.title}</h1>
          </div>
          <div className='board__header__title__menu'>
            <span className='menu__dot'></span>
            <span className='menu__dot'></span>
            <span className='menu__dot'></span>
          </div>
        </div>
        <div className='board__header__author'>
          <span className='board__header__author__name'>
            {props.name}
          </span>
          <div className='board__header__author__avatar'>
            {props.avatar}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
)

export default Board;