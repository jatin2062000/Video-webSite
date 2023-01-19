import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      pos={'fixed'}
      top={'4'}
      right={'4'}
onClick={toggleColorMode}
      variant="ghost"
      color="current"
      zIndex={'overlay'}
      marginLeft="2"
      icon={<SwitchIcon
     />}
      {...props}
    />
  );
};
 export default ColorModeSwitcher