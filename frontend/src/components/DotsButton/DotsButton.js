import React, {useState} from 'react';
import { StyledDotsButton, ButtonContainer } from './DotsButton.styled';
import { FaEllipsisH } from 'react-icons/fa';

import PropTypes from 'prop-types';

const DotsButton = ({children = this.props.children}) => {
  const [isOpened, setOpened] = useState(false);

  return (
    <StyledDotsButton onClick={() => setOpened(!isOpened)}>
      <ButtonContainer>
        <FaEllipsisH />
      </ButtonContainer>

      {isOpened && children}
    </StyledDotsButton>
  )
}

DotsButton.propTypes = {
  children: PropTypes.node
}
export default DotsButton;