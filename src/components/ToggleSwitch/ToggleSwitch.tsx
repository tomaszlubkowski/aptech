import React from 'react';
import { Box, Typography, Switch } from "@mui/material";

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, checked, onChange }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
      <Typography>{label}</Typography>
      <Switch checked={checked} onChange={onChange} 
        sx={{
            '& .MuiSwitch-track': {
                backgroundColor: checked ? '#50b9f9' : 'lightgrey',                
              },
            }}/>
    </Box>
  );
};

export default ToggleSwitch;
