import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <Tooltip title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
    <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  </Tooltip>
);
export default DarkModeToggle;
