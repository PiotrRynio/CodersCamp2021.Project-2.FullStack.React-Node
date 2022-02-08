import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisH } from 'react-icons/fa';
import { StyledDotsButton, ButtonContainer } from './DotsButton.styled';

const DotsButton = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledDotsButton onClick={() => setIsOpen((prevState) => !prevState)}>
      <ButtonContainer>
        <FaEllipsisH />
      </ButtonContainer>
      {isOpen && children}
    </StyledDotsButton>
  );
};

DotsButton.propTypes = {
  children: PropTypes.node,
};

export default DotsButton;
