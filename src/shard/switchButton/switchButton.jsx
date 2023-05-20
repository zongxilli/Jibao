import React from 'react';

import { Switch, SwitchInput, SwitchLabel } from './switchButton.styles';

const SwitchButton = ({
  // general
  children, // ie. react icons / one letter

  // props
  active = false, // switch at left(false) / right(true)
  whileClick = () => {}, // on click handler function
}) => {
  return (
    <>
      <SwitchInput type='checkbox' checked={active} />
      <SwitchLabel onClick={whileClick}>
        <Switch>{children}</Switch>
      </SwitchLabel>
    </>
  );
};

export default SwitchButton;