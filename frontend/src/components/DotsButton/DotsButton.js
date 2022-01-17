import React, {useState} from 'react';
import { StyledDotsButton, ButtonContainer } from './DotsButton.styled';
import { FaEllipsisH } from 'react-icons/fa';

import PropTypes from 'prop-types';

const DotsButton = (props) => {
  const [isOpened, setOpened] = useState(false);

  return (
    <StyledDotsButton onClick={() => setOpened(!isOpened)}>
      <ButtonContainer>
        <FaEllipsisH />
      </ButtonContainer>

      {isOpened && props.children}
    </StyledDotsButton>
  )
  DotsButton.propTypes = {
    props: PropTypes.bool
  }
}

export default DotsButton;