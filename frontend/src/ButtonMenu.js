import React, {useState} from 'react';
import { Menu, Dot } from './ButtonMenu.styled';

const ButtonMenu = (props) => {
  const [open, setOpen] = useState(false);

  return (
      <Menu onClick={() => setOpen(!open)}>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>

        {open && props.children}
      </Menu>
  )
}

export default ButtonMenu;