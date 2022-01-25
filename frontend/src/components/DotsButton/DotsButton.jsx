import {useState} from 'react';
import { StyledDotsButton, ButtonContainer } from './DotsButton.styled';
import { FaEllipsisH } from 'react-icons/fa';

import PropTypes from 'prop-types';

const DotsButton = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledDotsButton onClick={() => setIsOpen((prevState) => !prevState)}>
      <ButtonContainer>
        <FaEllipsisH />
      </ButtonContainer>
      {isOpen && children}
    </StyledDotsButton>
  )
}

DotsButton.propTypes = {
  children: PropTypes.node
}

export default DotsButton;