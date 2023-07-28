import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon  />}
      {...props}
      w={"full"}
      display={"flex"}
      justifyContent={["center","flex-start"]}
      paddingLeft={["0vw","1vw"]}
      zIndex={10}
    />
  );
};

export default ColorModeSwitcher;