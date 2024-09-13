import React from "react";
import { Box, Typography } from "@mui/material";
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';

interface TimeLeftProps {
  timeLeft: string;
}

const TimeLeft: React.FC<TimeLeftProps> = ({ timeLeft }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2} sx={{backgroundColor: "#1B3C67", paddingLeft: 1, paddingRight: 2, borderRadius: 1, marginRight: 1, paddingY: 1}}>
      <Box display="flex" alignItems="center">
        <BatteryChargingFullIcon />
        <Typography variant="h6" sx={{ marginLeft: 1 }}>
          Time left
        </Typography>
      </Box>
      <Typography variant="h5">{timeLeft}</Typography>
    </Box>
  );
};

export default TimeLeft;
